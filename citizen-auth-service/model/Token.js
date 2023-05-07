import mongoose from "mongoose";
import { Schema } from "mongoose";


const citizentokens = new mongoose.Schema(
    {
        token:{ 
            type: String,
            required: false
         },
        _customerId:{
            type: Schema.Types.ObjectId,
            ref: "customers"
            
        },
       tokenType:{
            type: String,
            enum: ["login", "resetPassword"]
    }
    },
);
    export default mongoose.model("citizentokens", citizentokens);