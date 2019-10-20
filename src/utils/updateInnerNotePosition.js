const updateInnerNotePosition = () => {
  let container   = document.getElementById('inner-container')
  let circles     = container.querySelectorAll('.event')
  let total       = circles.length
  let diameter    = window.getComputedStyle(container)
    .getPropertyValue('height')

  let radius      = parseInt(diameter, 10) / 2.0

  // check that an li exists, if not return
  if (!document.querySelector('.event')) { return } 
  else {
    let circleWidth = document.querySelector('.event')
      .getBoundingClientRect()
      .width

    let radius2     = radius + circleWidth
    let alpha       = Math.PI / 2
    let angle       = (Math.PI * 2)/ total

    circles.forEach(circle => {
      circle.style.left = ((radius - circleWidth / 2)
        + (radius2 * Math.cos(alpha)))
        + 'px'

      circle.style.top = ((radius - circleWidth / 2)
        - (radius2 * Math.sin(alpha)))
        + 'px'

      alpha = alpha - angle
    })
  }
}

export default updateInnerNotePosition
