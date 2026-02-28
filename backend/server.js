import express from 'express'
import cors from "cors";
import router from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import predictRoutes from "./routes/predict.routes.js";
import farmprofile from './routes/farmprofile.routes.js'
import cropRoutes from './routes/cropadvisory.routes.js';

const app = express();
// app.trustproxy(1)

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json())
app.use(cookieParser());

app.get('/', (req, res) => {
  return res.send("hii from backend");
})

app.use('/api/auth', router);
app.use("/api/predict", predictRoutes);
app.use("/api/farmprofile", farmprofile);
app.use("/api/cropadvisory", cropRoutes);


export default app;