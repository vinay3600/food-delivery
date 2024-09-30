import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRoute from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"


// app config
const app = express()
const port = process.env.PORT || 4001;


// middleware
app.use(express.json())
app.use(cors())



// db connection
connectDB();

//api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRoute);
app.use("/api/cart",cartRouter);

app.get("/",(req,res)=>{
    res.send("API is Working");
})

app.listen(port , ()=>{
    console.log(`server Started on http://localhost:${port}`);
})


