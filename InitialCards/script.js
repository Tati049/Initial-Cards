const panels = document.querySelectorAll('.panel') //selecting all panels

panels.forEach((panel) => { //take panels(photos) 
    panel.addEventListener('click', () => {  //listen for click and run a function
        removeActiveClasses() //function close all others panels
        panel.classList.add('active') //add one more active panel(open the picture)
        
    })
})

function removeActiveClasses() { //call function for close other photos
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}