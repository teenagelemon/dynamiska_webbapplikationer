const API_BASE = "https://www.themealdb.com/api/json/v1/1";

// Hämtar en måltid med hjälp av id
export async function getMealById(id) {
    const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    const data = await res.json();
    console.log("API response:", data);
    return data.meals ? data.meals[0] : null;
}

// Söker på måltider med namnet 
export async function searchMeals(query) {
    const res = await fetch(`${API_BASE}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
}

// Genererar en slumpmässig måltid
export async function getRandomMeal() {
    const res = await fetch(`${API_BASE}/random.php`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
}

// Hämtar ingredienser, 30 för att det är varierande längd på listan
export  function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 30; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ing && ing.trim().length > 0) {
            ingredients.push(`${measure} ${ing}`.trim());
        }
    }
    return ingredients;
}