
function getRating(rating) {

  let starsText = ``

  // generate the rating star
  for (let i = 0; i < rating; i++) {
    starsText += `
      <ion-icon name="star"></ion-icon>
    `
  }

  // generate the remaining star (outline)
  for (let i = 0; i < 5 - rating; i++) {
    starsText += `
    <ion-icon name="star-outline"></ion-icon>
    `
  }

  return starsText
}

export default getRating