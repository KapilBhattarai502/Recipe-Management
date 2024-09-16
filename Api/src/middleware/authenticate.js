import { getUserFromToken } from "../Services/user.service.js";

export const authenticate=async(req,res,next)=>{
    console.log('authenticate')
    try {
        const token = await req.headers.authorization?.split(" ")[1];
        if (token){
            const user= await getUserFromToken(token);
            console.log('obtained user from token',user)
            req.user=user;
        }
        else{
            return res.status(404).send({message:"No user with the given token"})
        }
      
        
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
    next();

}