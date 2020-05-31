// OPEN MODAL
function onOff() {
  const getModal = document.getElementById('modal')
  const getBody = document.querySelector('body')
  getModal
    .classList
    .toggle('hide')

  getBody
    .classList
    .toggle('hideScroll')

  getModal
    .classList
    .toggle('addScroll')
}


// Toggle - Menu
const getBtnToggle = document.querySelector('.menu-mobile')
const getNav = document.querySelector('.menu-mobile nav')

let toggle = false
function menuToogle() {
  
  if (!toggle) {
    TweenMax.set(getNav, {display: 'none', x: -300})
    TweenMax.to(getNav, .3, {
      display: "block",
      x: 0
    })
    TweenMax.to(getBtnToggle, 0.1, {
      autoAlpha: 1,
      display: "block"
    })
    toggle = true


  } else {
    toggle = false
    TweenMax.to(getNav, .3, {
      display: 'none',
      x: -300
    })

    TweenMax.to(getBtnToggle, .2, {
      autoAlpha: 0,
      display: 'none',
    })
  }

}