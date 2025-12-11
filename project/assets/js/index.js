import { getRandomMeal } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const featured = await getRandomMeal();

    document.getElementById("home-featured").innerHTML = `
        <h2>Featured Recipe</h2>
        <img src="${featured.strMealThumb}">
        <p>${featured.strMeal}</p>
        <button onclick="window.location.href='/html/recipes.html?id=${featured.idMeal}'">
            View Recipe
        </button>
    `;
});
