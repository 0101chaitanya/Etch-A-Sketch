let body = document.getElementById('body');
let table = document.createElement('table')
let x = prompt('Enter number of rows');
let y = prompt('Enter number of columns');
body.appendChild(table);
let tr;
//let th = document.createElement('th');
let td;

for (let i = 0; i < x; i++) {
    tr = document.createElement('tr');
    for (let j = 0; j < y; j++) {
        td = document.createElement('td');
        td.textContent = `${i} x ${j}`;
        tr.appendChild(td);
        table.appendChild(tr);

    }
}
