import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const serviceAccount = path.resolve("firebase-service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
