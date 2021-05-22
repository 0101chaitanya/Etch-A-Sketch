let house = document.querySelector('body');
let table = document.createElement('table');
let x = prompt('Enter number of rows');
let y = prompt('Enter number of columns');
house.appendChild(table);
let tr;
//let th = document.createElement('t4h');
let td;

for (let i = 0; i < x; i++) {
    tr = document.createElement('tr');
    for (let j = 0; j < y; j++) {
        td = document.createElement('td');
        td.textContent = `${i} x ${j}`;
        tr.appendChild(td);
        colorChange();
        table.appendChild(tr);

    }
}
colorChange = (elementNode) => {

    elementNode.style.backgroundColor = `rgb(0,255,0)`;
};
