import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        policeId:{
            type: String,
            maxLenght: 5,
            required: false
        },
        nic:{
            type: String,
            maxLenght: 12,
            required: false

        },
        firstname:{ 
            type: String,
            maxLenght: 50, 
            required: false
         },
        middlename:{
            type: String,
            maxLenght: 50,
            required: false
        },
        
        lastname:{
            type: String,
            maxLenght: 50,
            required: false
        },
        rank:{
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
        },
        station:{
            type: String,
            maxLenght: 50,
            required: false
        },
        address:{
            type: String,
            maxLenght: 50,
            required: false
        }
        
        

    },
);
    export default mongoose.model("Customer", customerSchema);