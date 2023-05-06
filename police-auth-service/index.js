import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CustomerRoutes from './routes/CustomerRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', CustomerRoutes);

mongoose
.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB'))
                                .catch(err => console.log(err));
                
const PORT = process.env.PORT || 1670;

app.listen(PORT, () => {
    console.log(`Server is up and runnig on : ${PORT} 🚀🚀🚀`);
  });
  
