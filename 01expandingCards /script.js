const panels = document.querySelectorAll('.panel')

// add an event listener on every panel. Add an active class.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//remove the class that was active.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}