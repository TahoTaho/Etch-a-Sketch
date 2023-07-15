const container = document.querySelector('div.container');

function makeGrid(columns, rows) {
    for (let i = 1; i <= columns; i++) {
    const column = document.createElement('div');
    column.className = 'column';
        for (let j = 1; j <= rows; j++) {
        const row = document.createElement('div');
            row.className = 'row';
            column.append(row);
            mouseOver(row);
        }
        container.append(column);
    }
}

function mouseOver(element) {
    element.addEventListener('mouseover', () => {
        element.setAttribute('style', 'background-color:red;');
    });
}

makeGrid(26,56);



