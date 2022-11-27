const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

//event listener that adds/removes the class .show-nav to .container when the container is clicked

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

