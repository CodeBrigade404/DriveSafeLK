require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const fineRoutes = require("./routes/fine.routes");
const bodyParser = require("body-parser");
const dbConnection = require("./config/db.connection");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

dbConnection();

app.use("/driveSafe/payfine", fineRoutes);

app.listen(port, () => {
  console.log(`Fine Service listening at http://localhost:${port}`);
});
