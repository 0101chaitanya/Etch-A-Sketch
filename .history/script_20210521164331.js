let house = document.querySelector('body');
let table = document.createElement('table');
let heading = document.createElement('heading');
heading.textContent = 'Paint Grid';
heading.style.fontSize = '45px';
heading.style.marginTop = '20px';
heading.style.marginBottom = '0px';

house.appendChild(heading);
let x = 16//prompt('Enter number of rows');
let y = 16//prompt('Enter number of columns', x);
let tr;
let td;
let elementWidth, elementHeight, fromTop;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
if (x + y <= 16) {
    elementWidth = '40px';
    elementHeight = '40px';
    fromTop = '25px';
} else if (x + y > 16 && x + y <= 32) {
    elementWidth = '30px';
    elementHeight = '30px';
    fromTop = '25px';
} else if (x + y > 32 && x + y <= 64) {
    elementWidth = '15px';
    elementHeight = '15px';
    fromTop = '5px';
} else if (x + y > 64 && x + y <= 128) {
    elementWidth = '7.5px';
    elementHeight = '7.5px';
    fromTop = '40px';
}
let rowArray = [];
for (let i = 0; i < x; i++) {
    let tr = document.createElement('tr');
    let columnArray = [];
    for (let j = 0; j < y; j++) {
        td = document.createElement('td');
        td.innerHTML = `<span></span>`;
        tr.appendChild(td);
        td.style.height = elementHeight;
        td.style.width = elementWidth;
        td.style.color = colorHouse[0];
        td.style.backgroundColor = colorHouse[0];
        columnArray.push(td);
    }
    table.appendChild(tr);
    rowArray.push(columnArray);
}
for (let k = 0; k < x; k++) {
    rowArray[k].forEach(item => {
        let counter = 1;
        let colorChange = function (event) {
            console.log(event.target);
            if (counter > 7) {
                counter = 0;
            }
            item.style.backgroundColor = colorHouse[counter];
            item.style.color = colorHouse[counter];
            counter++;
        };
        item.addEventListener('mouseover', colorChange);
    });
}
table.style.marginTop = fromTop;
house.appendChild(table);






