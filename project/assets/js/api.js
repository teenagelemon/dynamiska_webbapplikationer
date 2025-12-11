const API_BASE = "https://www.themealdb.com/api/json/v1/1";

// Fetch a single meal by ID
export async function getMealById(id) {
    const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    const data = await res.json();
    console.log("API response:", data);
    return data.meals ? data.meals[0] : null;
}

// Search for meals by name
export async function searchMeals(query) {
    const res = await fetch(`${API_BASE}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
}

// Get random meal
export async function getRandomMeal() {
    const res = await fetch(`${API_BASE}/random.php`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
}