import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { Recipe } from "../models/recipe.js";

const router = express.Router();

router.post("/createrecipe", authenticate, async (req, res) => {
  try {
    const {
      title,
      description,
      Ingredients,
      preparationTime,
      Instructions,
      cookingMethod,
      equipmentNeeded,
    } = req.body;

    const userId = req.user._id;

    const dbrecipe = await Recipe.create({
      title,
      description,
      Ingredients,
      preparationTime,
      Instructions,
      cookingMethod,
      equipmentNeeded,
      user: userId,
    });

    return res.status(200).send(dbrecipe);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/search", async (req, res) => {
  const { title } = req.query;
  function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  try {
    if (title) {
      const recipes = await Recipe.find({
        title: { $regex: title, $options: "i" },
      });

      return res.json(recipes);
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get("/getuserrecipes", authenticate, async (req, res) => {
  const user = req.user;
  try {
    const allRecipes = await Recipe.find({ user: user._id });
    if (!allRecipes) {
      return res.json("You havenot created any recipe yet");
    }
    return res.status(200).send(allRecipes);
  } catch (error) {
    throw new Error(error.message);
  }
});
router.put("/editrecipes/:id",async (req, res) => {
  const recipeId = req.params.id;
  console.log(recipeId);
  console.log(req.body)

  const {
    Ingredients,
    title,
    description,
    preparationTime,
    cookingMethod,
    equipmentNeeded,
  } = req.body;

  await Recipe.findOneAndUpdate(
    { _id: recipeId },
    {
      $set: {
        Ingredients,
        title,
        description,
        preparationTime,
        cookingMethod,
        equipmentNeeded,
      },
    }
  );
});

export default router;
