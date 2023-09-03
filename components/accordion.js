function handleAccordion() {
  const heads = document.querySelectorAll('.accordion-head')
  
  for (let i = 0; i < heads.length; i++) {
    heads[i].addEventListener('click', () => {
      // console.log(heads[i].nextElementSibling)

      heads[i].nextElementSibling.classList.toggle('show-accordion-body')
      heads[i].lastElementChild.classList.toggle('rotate')
    })
  }

}

export default handleAccordion