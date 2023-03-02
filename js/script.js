const board = document.querySelector('#board')
const colors = ['#f61900', '#7600a8', '#0082d8', '#e46a00', '#00ca54']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#a1a1a1'
    element.style.boxShadow = '0 0 2px #a1a1a1'
}

function getRandomColor(){
    const index = Math.floor(Math.random() *colors.length)
    return colors[index]
}