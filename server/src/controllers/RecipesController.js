const knex = require('../database/index')
const AppError = require('../utils/AppError')

class RecipesController {
  async create(req, res) {
    const { title, category, ingredients, instructions } = req.body

    const recipes_id = await knex('recipes').insert({
      title,
      category,
    })

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        recipes_id,
        name: ingredient
      }
    })

    const instructionsInsert = instructions.map(instruction => {
      return {
        recipes_id,
        description: instruction
      }
    })

    await knex('ingredients').insert(ingredientsInsert)
    await knex('instructions').insert(instructionsInsert)

    return res.status(201).json()
  }

  async show(req, res) {
    const { id } = req.params

    const recipe = await knex('recipes').where({ id }).first()
    const ingredients = await knex('ingredients').where({ recipes_id: id }).orderBy('title')
    const instructions = await knex('instructions').where({ recipes_id: id }).orderBy('description')

    return res.json({
      ...recipe,
      ingredients,
      instructions
    })
  }

  async delete(req, res) {
    const { id } = req.params

    await knex('recipes').where({ id }).delete()

    return res.json()
  }

  async index(req, res) {
    const { title, ingredients } = req.query

    let recipes

    if(ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim())

      recipes = await knex('ingredients')
        .select([
          'recipes.id',
          'recipes.title'
        ])
        .whereLike('recipes.title', `%${title}%`)
        .whereIn('title', filterIngredients)
        .innerJoin('recipes', 'recipes.id', 'ingredients.recipes_id')
        .orderBy('recipes.title')
    } else {
      recipes = await knex('recipes')
      .whereLike('title', `%${title}%`)
    }

    const recipesIngredients = await knex('ingredients')
    const recipesWithIngredients = recipes.map(recipe => {
      const recipeIngredient = recipesIngredients.filter(ingredient => ingredient.recipes_id === recipes.id)

      return {
        ...recipe,
        ingredients: recipeIngredient
      }
    })

    return res.json(recipesWithIngredients)
  }
}

module.exports = RecipesController