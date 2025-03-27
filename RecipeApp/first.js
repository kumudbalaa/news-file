
// const searchbox = document.querySelector('.searchbox');
// const searchbtn = document.querySelector('.searchbtn');
// const recipecontainer = document.querySelector('.recipe-container');
// const recipedetailscontent = document.querySelector('.recipe-details-content');
// const recipeclosebtn = document.querySelector('.recipe-close-btn');


// const fetchRecipes = async (query) => {
//     recipecontainer.innerHTML = "<h2>Fetching Recipes....</h2>";
//  const data =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//  const response = await data.json();

//  recipecontainer.innerHTML = "";
//  response.meals.forEach(meal => {
//     const recipeDiv = document.createElement('div');
//     recipeDiv.classList.add('recipe');
//     recipeDiv.innerHTML=`
//     <img src="${meal.strMealThumb}">
//     <h3>${meal.strMeal}</h3>
//     <p><span> ${meal.strArea}</span> Dish</p>
//      <p> Belongs to <span> ${meal.strCategory}</span> Category</p>
//     `

//     const button = document.createElement('button');
//     button.textContent = "View Recipe";
//     recipeDiv.appendChild(button);

//     // ADDING EVENT LISTNER
//     button.addEventListener('click',()=>{
//         openRecipePopup(meal);
//     })

//     recipecontainer.appendChild(recipeDiv);

//  });
// }

// // function to fetch ingridents and measurement
// const fetchIngredients=(meal)=>{
//     let ingridentlist ="";
//     for(let i=1; i<=20 ; i++){
//         const Ingredents = meal[`strIngredent${i}`];
//         if(ingridents){
//             const measure = meal[`strMeasure${i}`];
//             ingridentlist +=`<li>${measure}${ingredients}</li>`
//         }
//         else {
//             break;
//         }

//     }
//      return ingridentlist;

// }

// const openRecipePopup = (meal)=>{
//   recipedetailscontent.innerHTML =`
//  <h2 class="recipename">${meal.strMeal}</h2>
//  <h3>Ingredents:<h3/>
//  <ul>${fetchIngredients(meal)}</ul>
//  <div>
//     <h3>Instructions:</h3>
//     <p class="recipeinstruction">${meal.strInstructions}</p>
//   </div>
//   `
  
//  recipedetailscontent.parentElement.style.display = "block"

// }


// //  console.log(response.meals[0]);

// recipeclosebtn.addEventListener('click',()=>{
//   recipedetailscontent.parentElement.style.display="none";
// });

// searchbtn.addEventListener('click',(e) => {
//     e.preventDefault();
//     // console.log("button clicked");
//     const searchInput = searchbox.value.trim();
//     fetchRecipes (searchInput);

// });


const searchbox = document.querySelector('.searchbox');
const searchbtn = document.querySelector('.searchbtn');
const recipecontainer = document.querySelector('.recipe-container');
const recipedetailscontent = document.querySelector('.recipe-details-content');
const recipeclosebtn = document.querySelector('.recipe-close-btn');

const fetchRecipes = async (query) => {
    recipecontainer.innerHTML = "<h2>Fetching Recipes....</h2>";
    
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipecontainer.innerHTML = "";
    if (response.meals) {
        response.meals.forEach(meal => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p><span>${meal.strArea}</span> Dish</p>
                <p>Belongs to <span>${meal.strCategory}</span> Category</p>
            `;

            const button = document.createElement('button');
            button.textContent = "View Recipe";
            recipeDiv.appendChild(button);

            // Adding Event Listener
            button.addEventListener('click', () => {
                openRecipePopup(meal);
            });

            recipecontainer.appendChild(recipeDiv);
        });
    } else {
        recipecontainer.innerHTML = "<h2>No recipes found</h2>";
    }
};

// Function to fetch ingredients and measurements
const fetchIngredients = (meal) => {
    let ingredientList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredientList += `<li>${measure} ${ingredient}</li>`;
        } else {
            break;
        }
    }
    return ingredientList;
};

const openRecipePopup = (meal) => {
    recipedetailscontent.innerHTML = `
        <h2 class="recipename">${meal.strMeal}</h2>
        <h3>Ingredients:</h3>
        <ul class=" ingredientList">${fetchIngredients(meal)}</ul>
        <div class="recipeinstruction">
            <h3>Instructions:</h3>
            <p> ${meal.strInstructions} </p>
        </div>
    `;

    recipedetailscontent.parentElement.style.display = "block";
};

recipeclosebtn.addEventListener('click', () => {
    recipedetailscontent.parentElement.style.display = "none";
});

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchbox.value.trim();
    if (!searchInput) {
        recipecontainer.innerHTML=`<h2>type the meal in the search<h2/>`;
        return;
    } 
    fetchRecipes(searchInput);
});
