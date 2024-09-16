import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { user } from "../models/user.js";

const SECRET_KEY='ADNFALNLAFDI9020932EKLW2NO123H12HE3';


export const getUserFromToken = async (token) => {
    try {
            const decoded= jwt.verify(token,SECRET_KEY);
            const userEmail = decoded.email;
            const dbuser = await user.findOne({email:userEmail})

            return dbuser;
        
            
        
    
    } catch (error) {
        throw new Error(error.message)
        
    }

  

};
