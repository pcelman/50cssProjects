
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// event listens when the mouse enters or leaves each side
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))