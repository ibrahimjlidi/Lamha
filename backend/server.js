import  express  from "express";
import dotenv from "dotenv";
import connectDB from './db/connectDB.js';
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRoutes.js'
import postsRoutes from './routes/postsRoutes.js'


dotenv.config();
connectDB();
const app= express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // allows to parse json data in the req.body 
app.use(express.urlencoded({ extended: true })); // allows to parse from data in the req.body
app.use(cookieParser()); // get set cookie by default

//routes
app.use("/api/users",userRoutes)
app.use("/api/posts",postsRoutes)

app.listen(PORT, ()=>console.log(`Server started at http://localhost:${PORT}` ))