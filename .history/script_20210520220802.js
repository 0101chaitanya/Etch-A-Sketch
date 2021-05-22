let body = document.getElementsByTagName('body');
let x = prompt('Enter number of rows');
//let y = prompt('Enter number of columns');
let tr;
//let th = document.createElement('th');
let td;
for (let i = 0; i < x; i++) {
    tr = document.createElement('tr');
    for (let j = 0; j < y; j++) {
        td = document.createElement('td');
        td.textContent = `${i} x ${j}`;
        tr.appendChild(td);
        body.appendChild(tr);

    }
}
