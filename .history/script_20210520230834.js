let house = document.querySelector('body');
let table = document.createElement('table');
let x = 4//prompt('Enter number of rows');
let y = 4//prompt('Enter number of columns');
house.appendChild(table);
let tr;
let counter = 0;
//let th = document.createElement('t4h');
let td;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
//console.log(colorHouse.length);
let rowArray = new Array();
for (let i = 0; i < x; i++) {
    tr = document.createElement('tr');
    rowArray.push(tr);
    for (let j = 0; j < y; j++) {
        td = document.createElement('td');
        td.textContent = `${i} x ${j}`;
        tr.appendChild(td);
        table.appendChild(tr);
    }

}

let colorChange = (e) => {
    console.dir(element);
    {
        if (counter > 7) {
            counter = 0;
        }

        td.style.backgroundColor = colorHouse[counter];
        counter++;
    }

}
let stopListen = (e) => {
    td.removeEventListener('mouseover', colorChange);
    td.preventDefault();
};
td.addEventListener('mouseover', colorChange);
td.addEventListener('mouseout', stopListen);

