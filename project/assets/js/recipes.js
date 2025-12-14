import { getMealById, getIngredients } from "/assets/js/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const mealId = params.get("id");
    //console.log("Meal ID:", mealId);

    //Felmeddelande 
    if (!mealId) {
        document.getElementById("recipe-container").innerHTML =
            "<p>No recipe selected.</p>";
        return;
    }

    const meal = await getMealById(mealId);

    //Felmeddelande 
    if (!meal) {
        document.getElementById("recipe-container").innerHTML =
            "<p>Recipe not found.</p>";
        return;
    }

    // Bygger ingredienslistan
    const ingredients = getIngredients(meal);

    document.getElementById("recipe-container").innerHTML = `
        <h1>${meal.strMeal}</h1>
        <div class=recipe-tile>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div>
        <h2>Ingredients</h2>
        <ul>
            ${ingredients.map(i => `<li>${i}</li>`).join("")}
        </ul>
        </div>
        </div>
        <h2>Instructions</h2>
        <p>${meal.strInstructions.replace(/\r?\n|\r/g, "<br>")}</p>
    `;
});
