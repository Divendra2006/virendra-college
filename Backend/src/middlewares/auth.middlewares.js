import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { Student } from "../models/student.model.js";

const verifyJWT = asyncHandler(async(req,res,next)=>{
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token){
        throw new ApiError(401,"token not found")
    }

    try {
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const student = await Student.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!student){
            throw new ApiError(401,"Invalid Access Token")
        }
    
        req.student = student;
        next()
    } catch (error) {
        console.error("Token verification error: ", error);
        throw new ApiError(403,"Invalid Token");
        
    }
})

export {verifyJWT}