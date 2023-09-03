import RECIPES from "../db/data.js"
import getRating from "./getRating.js"


function generateRecipeCards() {

  const recipesWrapper = document.querySelector('.recipes-wrapper')
  recipesWrapper.innerHTML = ``

  for (let i = 0; i < RECIPES.length; i++) {
    // console.log(RECIPES[i])

    let recipe = RECIPES[i]

    recipesWrapper.innerHTML += `
    <div class="recipe">
        <div class="recipe-thumbnail">
          <img src="${recipe.image}" alt="">
          <a href="#" class="link category">${recipe.category}</a>
        </div>

        <div class="recipe-detail">
          <div class="rating">
            ${getRating(recipe.rating)}
          </div>
          <h4 class="recipe-name">${recipe.title}</h4>
          <button class="btn" id="detailBtn" data-index="${recipe.id}">Show Detail</button>

        </div>
      </div>
    `

  }
}


export default generateRecipeCards