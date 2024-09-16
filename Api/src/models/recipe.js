import mongoose from 'mongoose'
const { Schema } = mongoose;
const recipeSchema=new mongoose.Schema(
    {
      title:{
        type:String,
        required:true,
      },
      description:{
        type:String,
        
      },
      Ingredients:{
        type:String,
        required:true,
      },
      preparationTime:{
        type:String,
        
      },
      Instructions:{
        type:String,
      },
      cookingMethod:{
        type:String,
      },
      equipmentNeeded:{
        type:String,
      },
      user:{
        type:Schema.Types.ObjectId, ref: 'user'
      }

    
    }
)

export const Recipe = mongoose.model('recipe',recipeSchema);