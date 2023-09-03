import handleSidenav from './components/showSidenav.js'
import slideshow from './components/slideshow.js'
import handleAccordion from './components/accordion.js'
import generateRecipeCards from './helpers/getRecipeCards.js'
import searchRecipe from './components/search.js'
import handleModal from './components/modal.js'


window.addEventListener('DOMContentLoaded', main)


function main() {
  handleSidenav()

  slideshow()

  handleAccordion()

  generateRecipeCards()

  searchRecipe()

  handleModal()
}




