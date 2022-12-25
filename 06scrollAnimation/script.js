// select the box class 
const boxes = document.querySelectorAll('.box')

// listen to the scroll, when it happens it calls the function checkBoxes
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // define the trigger point (80%)
    const triggerBottom = window.innerHeight / 5 * 4

    // getBoundingClientRect gives the position from the top 
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
// depending on the box´s position it will either add or remove the class show 
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}