import { PrismaClient, Recipe } from '@prisma/client';

const prisma = new PrismaClient();

export default class RecipeService {
  async getRecipes(): Promise<Recipe[]> {
    try {
      return await prisma.recipe.findMany();
    } catch (error) {
      throw new Error('Could not fetch recipes');
    }
  }

  async getRecipeById(id: string): Promise<Recipe | null> {
    try {
      return await prisma.recipe.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error('Could not fetch the recipe');
    }
  }
}
