const container = document.querySelector('.container')
const wrapper = document.querySelector('.wrapper')
const circles = document.querySelectorAll('.circle-block')


for (let i = 0; i < circles.length; i++){
  circles[i].addEventListener('click', e => {
    removeActiveClass(circles)
    circles[i].classList.add('active')
    let num = 0

    let calc = (i ) * container.clientWidth;
    wrapper.style.transform= `translateX(-${calc}px)`;
  })
}

function removeActiveClass(circles) {
  circles.forEach(element => {
    element.classList.remove('active')
  })
}