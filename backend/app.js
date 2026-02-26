import app from './server.js'
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js';

connectDB()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})