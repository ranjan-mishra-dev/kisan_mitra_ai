import express from 'express'
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import predictRoutes from "./routes/predict.routes.js";
import farmprofile from './routes/farmprofile.routes.js'
import cropRoutes from './routes/cropadvisory.routes.js';

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json())
app.use(cookieParser());

app.get('/', (req, res) => {
  return res.send("Backend API is running.");
})

app.use('/api/auth', router);
app.use("/api/predict", predictRoutes);
app.use("/api/farmprofile", farmprofile);
app.use("/api/cropadvisory", cropRoutes);


export default app;