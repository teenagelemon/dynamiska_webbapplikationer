import { getRandomMeal } from "/assets/js/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("inspiration-container");

    //Laddar in 6 stycken måltidskort 
    async function loadRandomTiles(count = 6) {
        container.innerHTML = "";
        for (let i = 0; i < count; i++) {
            const meal = await getRandomMeal();
            console.log("Meal loaded:", meal.idMeal, meal.strMeal);
            const tile = document.createElement("div");
            tile.classList.add("meal-tile");
            tile.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strMeal}</p>
            `;
            tile.addEventListener("click", () => {
                window.location.href = `recipes/?id=${meal.idMeal}`;
            });
            container.appendChild(tile);
        }
    }

    loadRandomTiles(6);
});
