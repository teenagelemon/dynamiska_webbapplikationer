import { searchMeals } from "/assets/js/api.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const resultsContainer = document.getElementById("search-results");

    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const query = document.getElementById("search-input").value.trim();
        if (!query) return;

        const results = await searchMeals(query);

        if (!results.length) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            return;
        }

        resultsContainer.innerHTML = results
            .map(
                meal => `
                <div class="meal-tile" data-id="${meal.idMeal}">
                    <img src="${meal.strMealThumb}">
                    <p>${meal.strMeal}</p>
                </div>`
            )
            .join("");

        // Lägger till click-element
        document.querySelectorAll(".meal-tile").forEach(tile => {
            tile.addEventListener("click", () => {
                const id = tile.getAttribute("data-id");
                window.location.href = `/html/recipes?id=${id}`;
            });
        });
    });
});
