import express from 'express'
import { connectDB } from './Config/DB.js';
import authRouter from "./src/routes/auth.route.js"
import recipeRouter from "./src/routes/recipe.route.js"
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());
app.use('/auth',authRouter);
app.use('/recipe',recipeRouter);

connectDB();

export default app;