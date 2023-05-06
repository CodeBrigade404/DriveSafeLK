import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

//config dotenv
dotenv.config();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/vehicles", vehicleRoutes);

app.use(errorHandler);
//connect to db
connectDB();

const Port = process.env.PORT || 5200;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
