let house = document.querySelector('body');
let table = document.createElement('table');
let heading = document.querySelector('h1');
heading.style.fontSize = '45px';
heading.style.marginTop = '20px';
heading.style.marginBottom = '0px';
let head = heading.children;
//console.log(head[9]);
div1 = document.createElement('div');
div2 = document.createElement('div');

let inputX = document.createElement('input');
inputX.style.width = '40px';
inputX.style.height = '30px';
inputX.type = 'number';
inputX.style.margin = '10px';
let inputY = document.createElement('input');
inputY.style.width = '40px';
inputY.style.height = '30px';
inputX.style.margin = '10px';

inputY.type = 'number';
//inputY.value = inputX.value;
let x;
let y;
let tr;
let td;
let elementWidth, elementHeight, fromTop;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];

let span = document.createElement('span');
let button1 = document.createElement('button');
button1.textContent = 'Go';
//button1.style.width = '10px';
let button2 = document.createElement('button');
button2.textContent = 'Reset';
let NumberX;
let NumberY;
div1.appendChild(inputX);
div1.appendChild(inputY);
div1.appendChild(button1);
div1.appendChild(button2);
house.appendChild(div1);
house.appendChild(div2);
//console.log(NumberX, NumberY);
NumberX = Number(inputX.value);
NumberY = Number(inputY.value);

let go = function () {


    if (NumberX <= 64 && NumberY <= 64) {
        return [NumberX, NumberY];
    }
    else return [4, 4];
};

x = go[0];
y = go[1];
console.log(go[0], go[1]);

button1.addEventListener('click', go, false, { once: true });

for (a = 0; a < head.length; a++) {
    let b;
    head[a].fontSize = '20px';
    if (a < colorHouse.length - 1) {
        b = a;
        head[a].style.color = colorHouse[a];
    } else {
        b = a - colorHouse.length + 1;
        head[a].style.color = colorHouse[b];
    }
}
console.log(heading);


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
    fromTop = '100px';
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
            // console.log(event.target);
            if (counter > 7) {
                counter = 0;
            }
            item.style.backgroundColor = colorHouse[counter];
            item.style.color = colorHouse[counter];

            counter++;
        };
        let stop = function (event) {
            item.removeEventListener('mouseover', colorChange);
            item.removeEventListener('mouseout', stop);
        };
        item.addEventListener('mouseover', colorChange);
        item.addEventListener('mouseout', stop);
    });
}
table.style.marginTop = fromTop;
house.appendChild(table);






