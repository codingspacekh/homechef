import RECIPES from "../db/data.js"
import getRating from "../helpers/getRating.js"

function searchRecipe() {

  const form = document.querySelector(".search-bar")
  const searchTerm = document.querySelector("#recipe")

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log(searchTerm.value) .toLowerCase()
    let foundRecipe = RECIPES.find((item) => item.title.toLowerCase() == searchTerm.value.toLowerCase())

    // console.log(foundRecipe)
    const recipesWrapper = document.querySelector('.recipes-wrapper')
    recipesWrapper.innerHTML = ``
    

    if (foundRecipe) {
      recipesWrapper.innerHTML = `
      <div class="recipe">
          <div class="recipe-thumbnail">
            <img src="${foundRecipe.image}" alt="">
            <a href="#" class="link category">${foundRecipe.category}</a>
          </div>
  
          <div class="recipe-detail">
            <div class="rating">
              ${getRating(foundRecipe.rating)}
            </div>
            <h4 class="recipe-name">${foundRecipe.title}</h4>
            <button class="btn" id="detailBtn" data-index="${foundRecipe.id}" >Show Detail</button>
  
          </div>
        </div>
      `
    } else {
      recipesWrapper.innerHTML = `<p>No recipe found</p>`
    }
    
  })
}

export default searchRecipe