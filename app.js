const mealBtn = async() => {
    const mealInput = document.getElementById("mealInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`
  const res = await fetch(url)
    const data = await res.json()
    showMeal(data.meals);
};

const showMeal = meals => {
const mealContainer = document.getElementById("mealBody");
mealContainer.textContent = '';

meals.forEach(meal => {

    const mealContent = document.createElement('div');
       mealContent.innerHTML = `
            <div class="col">
              <div onclick="showDetails(${meal.idMeal})"  class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-footer">
                  <h3>${meal.strMeal}</h3>
                  <h5>${meal.strCategory}</h5>
                  <a target="_blank"  id="youtube" href="${meal.strYoutube}">YouTube</a>
                </div>
              </div>
            </div>
    `
    mealContainer.appendChild(mealContent);
});
};

const showDetails = async(meals) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
   const res = await fetch (url)
    const data = await res.json()
     showInfo(data.meals)

};

const showInfo = foodDetails => {
    foodDetails.forEach(meal => {
    console.log(meal)
    const mealContainer = document.getElementById("mealBody");
    mealContainer.style.display = 'none';

    const showInfo = document.getElementById("showINfo");
    const mealDiv = document.createElement('div');
    mealDiv.textContent = '';
    mealDiv.innerHTML = `
    <div class="card mx-auto" style="width: 50rem;">
    <img id="card-images" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title">${meal.strMeal}</h3>
    <h5 class="mt-4">Ingredients </h5>
    <p>1.${meal.strIngredient1}</p>
    <p>2.${meal.strIngredient2}</p>
    <p>3.${meal.strIngredient3}</p>
    <p>4.${meal.strIngredient4}</p>
    <p>5.${meal.strIngredient5}</p>

    </div>
    </div>
    `
    showInfo.appendChild(mealDiv)

    })
};

