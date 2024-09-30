import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user 
const loginUser = async (req,res) => {
    const {email , password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User Doesnt exist"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({seccess:true,token});
    }
    catch(error){
        console.log(error);
        re.json({success:false,message:"Error"});
    }
}
const createToken = (id) =>{
    const secret = process.env.JWT_SECRET;
    return jwt.sign({id},secret)
}
//refister user

const registerUser = async (req , res) => {
    const {name,password,email} = req.body;
    try{
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exists"});
        }

        //validation eamil fomrat & strong password

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a vaild email"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"please enter a strong password"})
        }

        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success:true,token});


    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export  { loginUser, registerUser };