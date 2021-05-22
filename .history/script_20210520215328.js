let body = document.getElementsByTagName('body');
let x = prompt('Enter number of rows');
let y = prompt('Enter number of columns');
let tr;
let th = document.createElement('th');
let td = document.createElement('td');
for (let i = 0; i < x; i++) {
    tr = document.createElement('tr');
    body.appendChild(tr);
}
