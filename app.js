/************************CACHED ELEMENTS************************/
const countDisplay = document.getElementById('count-display')
const addButton = document.getElementById('add-button')
const subtractButton = document.getElementById('subtract-button')
const inputElement = document.getElementById('input')

// state variable and input element
let count = 0
inputElement.value = 1

// updating count display
function updateCountDisplay() {
    countDisplay.textContent = count
}

// add funnction
function addButton() {
    const inputValue = parseInt(inputElement.value)
    count += inputValue

    updateCountDisplay()
}

// subtract function
function subtractButton() {
    const inputValue = parseInt(inputElement.value)
    count -= inputValue

    updateCountDisplay()
}

// event listeners

addButton.addEventListener('click', addButton)
  
subtractButton.addEventListener('click', subtractButton)

addButton.addEventListener('mouseover', function() {
    addButton.className += 'reverse-color'
})

subtractButton.addEventListener('mouseover', function() {
    addButton.className -= 'reverse-color'
})