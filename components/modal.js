import RECIPES from "../db/data.js";


function handleModal() {
  const detailBtn = document.querySelectorAll("#detailBtn")

  // console.log(detailBtn)
  for (let i = 0; i < detailBtn.length; i++) {

    let btn = detailBtn[i]

    btn.addEventListener('click', (e) => {
      // console.log('you click on food', btn.dataset.index)
      let index = parseInt(btn.dataset.index)
      let recipe = RECIPES.find((item) => item.id == index)


      const modalWrapper = document.querySelector('.modal-wrapper')
      modalWrapper.classList.remove('hide')

      modalWrapper.innerHTML = `
      <div class="modal-container" style="background-image: url(${recipe.image});">
        <div class="modal-overlay">
          <div class="modal-head">
            <h4>${recipe.title}</h4>

            <button class="link" id="closeBtn">
              <ion-icon name="close-circle"></ion-icon>
            </button>
          </div>

          <div class="modal-body">
            <!-- Tabbar -->



          </div>
        </div>
      </div>
      `

      const closeBtn = document.querySelector("#closeBtn")
      closeBtn.addEventListener("click", () => {
        modalWrapper.classList.add('hide')
      })



    })

  }



}


export default handleModal