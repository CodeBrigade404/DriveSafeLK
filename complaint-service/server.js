import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import vehicleRoutes from "./routes/complaintRoutes.js";

//config dotenv
dotenv.config();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/complaints", vehicleRoutes);

app.use(errorHandler);
//connect to db
connectDB();

const Port = process.env.PORT || 5300;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
