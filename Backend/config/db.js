import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://vinay12345:vinay12345@cluster0.vfc17.mongodb.net/food-delivey');
        console.log("DB connected");
    }catch(error){
        console.log("error occured in connecting with database");
        process.exit(1);
    }
}