
let index = 0
function slideshow() {
  const slides = document.querySelectorAll('.slide')
  const dots = document.querySelectorAll('.dot')

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    dots[i].classList.remove('dot-active')
  }

  index = index + 1
  if (index > slides.length) {
    index = 1
  }

  slides[index - 1].style.display = "block"
  dots[index - 1].classList.add('dot-active')

  setTimeout(slideshow, 2000)
}

export default slideshow