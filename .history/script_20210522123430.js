let house = document.querySelector('body');
let table = document.createElement('table');
let heading = document.querySelector('h1');
heading.style.fontSize = '45px';
heading.style.marginTop = '10px';
heading.style.marginBottom = '0px';
let head = heading.children;
//console.log(head[9]);
div1 = document.createElement('div');
div1.style.display = 'flex';
div1.style.justifyContent = 'space-between';
let inputX = document.createElement('button');
inputX.style.width = 'fit-content';
inputX.textContent = 'Set rows';
inputX.style.height = '40px';
//inputX.type = 'number';
inputX.style.margin = '10px 5px 0px 0px';
let inputY = document.createElement('button');
inputY.style.width = 'fit-content';
inputY.textContent = 'Set columns';
inputY.style.height = '40px';
inputY.style.margin = '10px 5px 0px 0px';
//inputY.type = 'number';
let tr;
let td;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
let span = document.createElement('span');
let button1 = document.createElement('button');
button1.textContent = 'Go';
button1.style.margin = '10px 10px 0px 10px';
let button2 = document.createElement('button');
button2.style.margin = '10px 10px 0px 10px';
button2.textContent = 'Reset';
inputX.focus();

let NumberX = 0;
let NumberY = 0;

function getX(e) {
    NumberX = Number(prompt('Rows ?'));
    inputX.textContent = NumberX;
    inputY.focus();

    return NumberX;
}
inputX.addEventListener('click' || 'keydown', function (e) {
    getX(e);
});

function getY(e) {
    NumberY = Number(prompt('Columns ?'));
    inputY.textContent = NumberY;
    button1.focus();

    return NumberY;
}

inputY.addEventListener('click' || 'keydown', function (e) {
    getY(e);
});

div1.appendChild(inputX);
div1.appendChild(inputY);
div1.appendChild(button1);
div1.appendChild(button2);
house.appendChild(div1);
//console.log(NumberX, NumberY);
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
//let num;
let x;
let y;
let toggle;
//console.log(inputX.value, inputY.value);
let go = function (NumberX, NumberY, toggle) {
    let elementWidth, elementHeight, fromTop;
    console.log(NumberX, NumberY);

    /*  NumberX = Number(inputX.value);
     NumberY = Number(inputY.value);
     ///button1.removeEventListener('click', go(NumberX, NumberY), false, { once: true });
 */
    if (toggle === true) {
        button1.disabled = true;
        button2.focus();
        if (NumberX <= 64 && NumberY <= 64) {
            x = NumberX;
            y = NumberY;
        }
        else {
            x = 4;
            y = 4;
        }

        console.log(x, y);




        if (x <= 8 && y <= 8) {
            elementWidth = '40px';
            elementHeight = '40px';
            fromTop = '60px';
        } else if (x > 8 && y > 8 && x <= 16 && y <= 16) {
            elementWidth = '30px';
            elementHeight = '30px';
            fromTop = '40px';
        } else if (x > 16 && y > 16 && x <= 32 && y <= 32) {
            elementWidth = '15px';
            elementHeight = '15px';
            fromTop = '25px';
        } else if (x > 32 && y > 32 && x <= 64 && y <= 64) {
            elementWidth = '8px';
            elementHeight = '8px';
            fromTop = '30px';
        }
        table.style.marginTop = fromTop;

        let rowArray = [];
        for (let i = 0; i < x; i++) {
            let tr = document.createElement('tr');
            let columnArray = [];
            for (let j = 0; j < y; j++) {
                td = document.createElement('td');
                td.innerHTML = `<span></span>`;
                td.style.height = elementHeight;
                td.style.width = elementWidth;
                td.style.color = colorHouse[0];
                td.style.backgroundColor = colorHouse[0];
                tr.appendChild(td);

                columnArray.push(td);
            }
            table.appendChild(tr);
            rowArray.push(columnArray);
        }
        console.log(rowArray);

        for (let k = 0; k < x; k++) {

            rowArray[k].forEach(item => {
                let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];

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
                item.addEventListener('mouseover', colorChange);

                //            item.addEventListener('mouseout', stop);
            });
        }
    }
    else {
        x = 0;
        y = 0;

        table.innerHTML = '<div></div>';

        inputX.textContent = 'Set rows';

        inputY.textContent = 'Set columns';
        inputX.focus();
        button1.disabled = false;

    }

};
let plug = 0;
button1.addEventListener('click' || 'keydown', e => {
    go(NumberX, NumberY, true);
    plug++;
}, false, { once: true });
button2.addEventListener('click' || 'keydown', e => {
    go(NumberX, NumberY, false);
}, false, { once: true });

house.appendChild(table);






