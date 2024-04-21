import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,

    },

    avatar:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&usqp=CAU"
    },

},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;