function handleSidenav() {
  const menuBtn = document.querySelector('#menuBtn')
  const sideNav = document.querySelector('#sidenav')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('rotate')
    sideNav.classList.toggle('showSidenav')
  })

}

export default handleSidenav