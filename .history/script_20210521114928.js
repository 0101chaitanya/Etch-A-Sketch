let house = document.querySelector('body');
let table = document.createElement('table');
let x = 4;//prompt('Enter number of rows');
let y = 4;//prompt('Enter number of columns');
house.appendChild(table);
let tr;
let counter = 0;
//let th = document.createElement('t4h');
let td;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
//console.log(colorHouse.length);
let rowArray = [];
let columnArray = [];

for (let i = 0; i < x; i++) {
    let tr = document.createElement('tr');
    //let a = tr;
    // rowArray.push(a);

    for (let j = 0; j < y; j++) {

        td = document.createElement('td');

        td.textContent = `${i} x ${j}`;
        tr.appendChild(td);
        //let b = td;
        //a.push(b);
        columnArray.push(td);
    }
    table.appendChild(tr);

    //console.log(tr);

    //console.log(columnArray);
    rowArray.push(columnArray);
}
console.log(rowArray[0][0].textContent);

//console.log(rowArray);
//console.log(table);
for (let k = 0; k < rowArray.length; k++) {
    for (let l = 0; l < columnArray.length; l++) {
        let colorChange = (event) => {
            //console.dir(element);
            {
                if (counter > 7) {
                    counter = 0;
                }

                rowArray[k][l].style.backgroundColor = colorHouse[counter];
                counter++;
            }
            rowArray[k][l].addEventListener('mouseover', colorChange);

        };
        let stopListen = (event) => {

            rowArray[k][l].removeEventListener('mouseover', colorChange);
            //td.preventDefault();
        };
        rowArray[k][l].addEventListener('mouseover', colorChange);
        rowArray[k][l].addEventListener('mouseout', stopListen);

    }
}
