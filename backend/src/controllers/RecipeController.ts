import { Request, Response } from 'express';
import RecipeService from '../services/RecipeService';

export default class RecipeController {
  async getRecipes(req: Request, res: Response) {
    const { q } = req.query
    if (typeof q == 'string' && q.length > 0) {
      const ingredients = q.split(",")
      const recipes = await new RecipeService().getRecipesByIngredient(ingredients);
      return res.json(recipes)
    } else {
      const recipes = await new RecipeService().getRecipes();
      return res.status(200).json(recipes);
    }
  }

  async getRecipeById(req: Request, res: Response) {
    const { id } = req.params
    const recipes = await new RecipeService().getRecipeById(id);
    return res.status(200).json(recipes);
  }
}