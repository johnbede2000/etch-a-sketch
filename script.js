let lineNumber = 16;
let squareNumber = lineNumber * lineNumber;

function createDivs() {
    for (i=1; i<=squareNumber; i++) {
        let div = document.createElement('div');
        div.classList.add('paintMe');
        document.querySelector('#grid-container').appendChild(div);
    }
    document.querySelector('#grid-container').style.cssText = `grid-template-columns: repeat(${lineNumber}, calc(960px/${lineNumber}));`;
}

createDivs();

let allSquares = document.querySelectorAll('.paintMe');
allSquares.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        e.target.classList.add('black');
        }
        )
    }
)

function reset() {
    allSquares.forEach((div) => {
        div.className = 'paintMe'
    });
}

document.querySelector('#reset').addEventListener('click', reset)
