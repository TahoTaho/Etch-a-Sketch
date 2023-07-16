
function makeGrid(columns, rows) {
    for (let i = 1; i <= columns; i++) {
    const column = document.createElement('div');
    column.className = 'column';
        for (let j = 1; j <= rows; j++) {
        const row = document.createElement('div');
            row.className = 'row';
            column.append(row);
            row.addEventListener('mouseover', changeColor);
        }
        container.append(column);
    }
}

function changeColor() {
    this.setAttribute('style', 'background-color:red;');
}

function newGrid() {
    let inputHeight = prompt('Enter grid height (Maxium is 100)', '');
    let inputWidth = prompt('Enter width (Maxium is 100)', '');

    const height = parseInt(inputHeight);
    const width = parseInt(inputWidth);

    if (height > 100 || width > 100) {
        alert('Maximum you can input is 100, Try again');
    }
    else {
        removeContents(container);
        makeGrid(height,width);
    }   
}

function removeContents(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const container = document.querySelector('div.container');
const button = document.querySelector('button');
button.addEventListener('click', newGrid);
makeGrid(60,60);




