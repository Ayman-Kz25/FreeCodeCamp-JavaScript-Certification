const recipes = [];

const getTotalIngredients = (ingredients) => {
    return ingredients.length;
}

const getDifficultyLevel = (cookingTime) => {
    if(cookingTime <= 30){
        return 'easy';
    } else if(cookingTime <= 60) {
        return 'medium';
    }
    return 'hard';
}

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

// const recipe1Name = recipe1.name;
// const recipe2CookingTime = recipe2.cookingTime;
// const recipe3Ingredients = recipe3.ingredients;

// console.log(recipe1Name);
// console.log(recipe2CookingTime);
// console.log(recipe3Ingredients);

recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// console.log(recipe1TotalIngredients);
// console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

// console.log(recipe1);


const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;

// console.log(recipe2);


const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);

recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

// console.log(recipe3);

console.log(recipes);