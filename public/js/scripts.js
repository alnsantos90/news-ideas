
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
