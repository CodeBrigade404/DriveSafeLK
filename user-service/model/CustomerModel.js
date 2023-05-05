import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        firstname:{ 
            type: String,
            maxLenght: 50, 
            required: false
         },
        lastname:{
            type: String,
            maxLenght: 50,
            required: false
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            minLenght : 6,
            required: false
        },
        phoneNo:{
            type: String,
            maxLenght: 10,
            required: false
        }
    },
);
    export default mongoose.model("Customer", customerSchema);