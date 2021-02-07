const apiLink = "https://www.themealdb.com/api/json/v1/1/search.php";


const searchBtn = document.getElementById("meal-search");
searchBtn.addEventListener("click", function () {
    const mealFood = document.getElementById("meal-wrapper").value;
    const link = `${apiLink}?s=${mealFood}`;
    fetch(link)
        .then(res => res.json())
        .then(data => mealMenu(data.meals));
    const mealMenu = (food) => {
        if (food == null) {
            document.getElementById("circular").innerText = "Sorry, No Results Found!";
        } else {
            const menuList = document.getElementById("menuList");
            food.forEach(foods => {
                const foodDiv = document.createElement("div");
                foodDiv.className = "foods mt-5";
                const foodInfo = `
                    <div class="card" style="width: 18rem;" onclick="foodDetail('${foods.strMeal}')">
                    <img src="${foods.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${foods.strMeal}</h5>
                    </div>
                    </div>
                `
                foodDiv.innerHTML = foodInfo;
                menuList.appendChild(foodDiv);
            });
        }

    }
    document.getElementById("menuList").innerHTML = "";
    document.getElementById("foodDetail").innerHTML = "";
    document.getElementById("circular").innerText = "";
});


const foodDetail = (foodName) => {
    const urlLink = `${apiLink}?s=${foodName}`
    fetch(urlLink)
        .then(res => res.json())
        .then(data => foodInformation(data.meals[0]));
}

const foodInformation = food => {
    const mealDetail = document.getElementById("foodDetail");
    mealDetail.innerHTML = `
        <img width="400" height="200" class="img-fluid" src="${food.strMealThumb}">
        <h1>${food.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul class="list-group">
            <li class="list-group-item list-group-item-dark">
                <input class="form-check-input me-1" type="checkbox" Checked>
                ${food.strIngredient1}
            </li>
            <li class="list-group-item list-group-item-dark">
                <input class="form-check-input me-1" type="checkbox" Checked>
                ${food.strIngredient2}
            </li>
            <li class="list-group-item list-group-item-dark">
                <input class="form-check-input me-1" type="checkbox"  Checked>
                ${food.strIngredient3}
            </li>
            <li class="list-group-item list-group-item-dark justify-content-first">
                <input class="form-check-input me-1" type="checkbox"  Checked>
                ${food.strIngredient4}
            </li>
            <li class="list-group-item list-group-item-dark">
                <input class="form-check-input me-1" type="checkbox"  Checked>
                ${food.strIngredient5}
            </li>
             <li class="list-group-item list-group-item-dark">
                 <input class="form-check-input me-1" type="checkbox"  Checked>
                 ${food.strIngredient6}
             </li>
        </ul>
    `
}