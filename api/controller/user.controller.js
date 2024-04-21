import { errorHandler } from "../utils/error.js";
import User from '../models/user.model.js'
import Listing from "../models/listing.model.js";

export const test = (req,res)=>{
    res.json({
        message:'Hello World',
    });
    
}



export const deleteUser = async(req,res,next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401,'can only delete own account'))
    console.log(req.user.id, req.params.id)
    try{
        await User.findByIdAndDelete(req.params.id)
        res.clearCookie('access_token');
        res.status(200).json('User has been deleted');

    }catch(error){
        console.log(error)
        next(error)
    }
}


export const getUserListings=async(req,res,next) => {
    
    console.log(req.user.id)
    console.log(req.params.id)
    if(req.user.id ===req.params.id){

        try{
            const listings=await Listing.find({userRef:req.params.id});
            console.log(listings)
            res.status(200).json(listings);

        }catch(error){
            console.log(error)
            next(error)
        }


    }
    else{
        return next(errorHandler(401,'You can only view your own listings'));
    }
};



export const getUser = async(req,res,next)=>{

    try{

        const user = await User.findById(req.params.id);

        if(!user) return next(errorHandler(404,'User not found'));

        const {password :pass, ...rest}=user._doc;
        res.status(200).json(user)

    }catch(error){

        next(error)
    }



}