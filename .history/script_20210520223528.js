let house = document.querySelector('body');
let table = document.createElement('table');
let x = prompt('Enter number of rows');
let y = prompt('Enter number of columns');
house.appendChild(table);
let tr;
//let th = document.createElement('t4h');
let td;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)',
    'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
console.log(colorHouse);
for (let k; k < 8; k)
    for (let i = 0; i < x; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < y; j++) {
            td = document.createElement('td');
            td.textContent = `${i} x ${j}`;
            tr.appendChild(td);
            tr.style.backgroundColor = `rgb(0,255,0)`;
            table.appendChild(tr);

        }
    }
/* colorChange = (elementNode) => {

    };
 */