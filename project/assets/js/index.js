import { getIngredients, getRandomMeal } from "/assets/js/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("home-featured");
    const tile = document.createElement("div");
    tile.classList.add("meal-tile");
    tile.classList.add("featured");

    async function loadRandomTile() {
        const meal = await getRandomMeal();
        console.log("Meal loaded:", meal.idMeal, meal.strMeal);

        const featuredImage = document.createElement("img");
        featuredImage.src = meal.strMealThumb;
        featuredImage.alt = meal.strMeal;

        const featuredTextContainer = document.createElement("div");
        const featuredTitle = document.createElement("h2");
        const featuredIngredients = document.createElement("ul");
        featuredTitle.innerHTML = meal.strMeal;
        
        const ingredients = getIngredients(meal); 
            
        ingredients.forEach(ingredient => {
            const ingredientElement = document.createElement("li");
            ingredientElement.innerHTML = ingredient;
            featuredIngredients.appendChild(ingredientElement); 
        });
        
        featuredTextContainer.appendChild(featuredTitle);
        featuredTextContainer.appendChild(featuredIngredients);
        tile.appendChild(featuredImage)
        tile.appendChild(featuredTextContainer)

        tile.addEventListener("click", () => {
            window.location.href = `/html/recipes/?id=${meal.idMeal}`;
        });
        container.appendChild(tile);
    }

    loadRandomTile();
});
