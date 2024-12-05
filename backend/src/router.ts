import { Router } from "express";
import RecipeController from "./controllers/RecipeController";

const router = Router();

router.get("/recipes", new RecipeController().getRecipes)
router.get("/recipes/:id", new RecipeController().getRecipeById)

export default router;
