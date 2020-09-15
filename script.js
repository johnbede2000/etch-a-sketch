let lineNumber = 16;
let squareNumber = lineNumber * lineNumber;
let color = 'black';

function createDivs() {
    for (i=1; i<=squareNumber; i++) {
        let div = document.createElement('div');
        div.classList.add('paintMe');
        document.querySelector('#grid-container').appendChild(div);
    }
    document.querySelector('#grid-container').style.cssText = `grid-template-columns: repeat(${lineNumber}, calc(70vh/${lineNumber})); grid-template-rows: repeat(${lineNumber}, calc(70vh/${lineNumber}));`;
    let allSquares = document.querySelectorAll('.paintMe');
    allSquares.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            e.target.classList.add(color);
            }
            )
        }
    )
}
createDivs();

function reset() {
    document.querySelectorAll('.paintMe').forEach((div) => {
        div.className = 'paintMe'
    });
    document.querySelector('.error-msg').textContent = '';
}
document.querySelector('#reset').addEventListener('click', reset)

function newGrid() {
    lineNumber = prompt("How many squares per side? (Enter a number between 2-64)");
    let testRange = /^[1-9]$|^[1-5][0-9]$|^6[0-4]$/;
    let result = testRange.test(lineNumber);
    if (result) {
        document.querySelector('.error-msg').textContent = '';
        squareNumber = lineNumber * lineNumber;
        document.querySelector('#grid-container').innerHTML = "";
        createDivs();
        return;
    } else {
        document.querySelector('.error-msg').textContent = "Error: only numbers 2-64 accepted. Here's a grid of 16x16.";
        lineNumber = 16;
        squareNumber = 256;
        document.querySelector('#grid-container').innerHTML = "";
        createDivs();
        return;
    }
}
document.querySelector('#new-grid').addEventListener('click', newGrid);