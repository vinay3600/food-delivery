import mongoose from 'mongoose';
import dotenv from 'dotenv';
import foodModel from './models/foodModel.js';
import { food_list } from '../Frontend/src/assets/assets.js';

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

// Insert food data into the database
const insertFoodData = async () => {
    try {
        // Remove any existing data (optional)
        await foodModel.deleteMany();  // Optional step to clear collection before insertion

        // Insert the new data
        await foodModel.insertMany(food_list);
        console.log('Food data inserted successfully');
        process.exit();
    } catch (error) {
        console.log('Error inserting food data: ', error);
        process.exit(1);
    }
};

connectDB();
insertFoodData();
