import { getMealById } from "/assets/js/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const mealId = params.get("id");
    console.log("Meal ID:", mealId);

    if (!mealId) {
        document.getElementById("recipe-container").innerHTML =
            "<p>No recipe selected.</p>";
        return;
    }

    const meal = await getMealById(mealId);

    if (!meal) {
        document.getElementById("recipe-container").innerHTML =
            "<p>Recipe not found.</p>";
        return;
    }

    // Build ingredient list
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ing && ing.trim().length > 0) {
            ingredients.push(`${measure} ${ing}`.trim());
        }
    }

    document.getElementById("recipe-container").innerHTML = `
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />

        <h2>Ingredients</h2>
        <ul>
            ${ingredients.map(i => `<li>${i}</li>`).join("")}
        </ul>

        <h2>Instructions</h2>
        <p>${meal.strInstructions.replace(/\r?\n|\r/g, "<br>")}</p>
    `;
});
