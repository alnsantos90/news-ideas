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
const getTitle = document.querySelector('#title')
const getMain = document.querySelector('main')


// TIMELINE TOGGLE
const tl = new TimelineMax({
  paused: true
})

tl.staggerTo(getMain, 0.1, {
  y: 0
})
tl.staggerTo(getTitle, 0.1, {
  y: 0
},0, '-=.1')
tl.staggerTo(getBtnToggle, 0, {
  x: 0
})
tl.staggerTo(getNav, 0, {
  visibility: 'visible',
  x: 0
})



// FUNÇÃO SHOW AND CLOSE TOGGLE
let toggle = true
function menuToogle() {
  if (toggle) {
    tl.play()
    toggle = false

  } else {
    tl.reverse()
    toggle = true
  }
}





window.onresize = () => {
    if(window.innerWidth >= 601) {
      getNav.style.visibility = 'visible'
      getNav.style.transform = 'translateX(0px)'
      getBtnToggle.style.transform = 'translateX(0px)'
      getTitle.style.transform = 'translateY(0px)'
      getMain.style.transform = 'translateY(0px)'
    } else {
      getNav.style.visibility = 'hidden'
      getNav.style.transform = 'translateX(500px)'
      getBtnToggle.style.transform = 'translateX(500px)'
      getTitle.style.transform = 'translateY(-80px)'
      getMain.style.transform = 'translateY(-80px)'
    }
  }