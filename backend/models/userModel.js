import mongoose from "mongoose";


const userSchema =  mongoose.Schema({
     name: {
        type:String,
        required:true,
     },
     username:{
        type:String,
        required:true,
        unique:true,
     },
     password:{
        type: String,
        minLength:5,
        required:true,

     },
     profifPic:{
        type : String,
        default:"",
     },
     followers:{
        type: [String],
        default:[],
    },
     following:{
        type: [String],
        default:[],
    },
    bio:{
        type: String,
        default:"",
    }

},{
    timestamps: true,
});
const User= mongoose.model("User",userSchema);

export default User;