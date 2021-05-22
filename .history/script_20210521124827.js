let house = document.querySelector('body');
let table = document.createElement('table');
let x = 4;//prompt('Enter number of rows');
let y = 4;//prompt('Enter number of columns');
house.appendChild(table);

let tr;
let td;

let rowArray = [];
for (let i = 0; i < x; i++) {
    let tr = document.createElement('tr');

    let columnArray = [];

    for (let j = 0; j < y; j++) {

        td = document.createElement('td');

        td.textContent = `${i} x ${j}`;
        tr.appendChild(td);
        //let b = td;
        //a.push(b);
        td.style.height = '40px';
        td.style.width = '40px';

        columnArray.push(td);
    }
    table.appendChild(tr);

    rowArray.push(columnArray);
}
console.log(rowArray[3][2].textContent);

for (let k = 0; k < x; k++) {
    //let counter = 0;

    for (let l = 0; l < y; l++) {
        let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];

        let counter = 0;
        //console.dir(element);
        let colorChange = function (event, counter) {







            event.target.style.backgroundColor = colorHouse[counter];
            event.target.style.color = colorHouse[counter];
            event.target.style.borderColor = colorHouse[7];
            //counter++;



            //    rowArray[k][l].addEventListener('mouseover', colorChange);
        };
        rowArray[k][l].addEventListener('mouseover', (event, counter) => {
            counter++;
            if (counter % 8 == 0) {
                counter = 0;
            }
            colorChange(event, counter);
        });
        /*  let stopListen = (event) => {
 
             // rowArray[k][l].removeEventListener('mouseover', colorChange);
             //td.preventDefault();
         };
         //rowArray[k][l].addEventListener('mouseout', stopListen);
 */
    }

}



