let house = document.querySelector('body');
let table = document.createElement('table');
let x = prompt('Enter number of rows');
let y = prompt('Enter number of columns', x);
house.appendChild(table);

let tr;
let td;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];

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
        td.style.color = 'rgb(255, 255, 255)';
        td.style.color = 'rgb(255, 255, 255)';

        //td.style.borderColor = "black";
        //td.style.borderWidth = "10px";
        td.style.border = ' 1px solid black';
        td.style[border - collapse] = 'collapse';

        td.style.margin = '0';
        columnArray.push(td);
    }
    table.appendChild(tr);

    rowArray.push(columnArray);
}
console.log(rowArray[3]);

for (let k = 0; k < x; k++) {
    //let counter = 0;

    rowArray[k].forEach(item => {

        let counter = 0;
        //console.dir(element);
        let colorChange = function () {







            item.style.backgroundColor = colorHouse[counter];
            item.style.color = colorHouse[counter];
            //event.target.style.borderColor = colorHouse[7];
            counter++;



            //    rowArray[k][l].addEventListener('mouseover', colorChange);
        };
        item.addEventListener('mouseover', colorChange);
    });
    /*  let stopListen = (event) => {
 
         // rowArray[k][l].removeEventListener('mouseover', colorChange);
         //td.preventDefault();
     };
     //rowArray[k][l].addEventListener('mouseout', stopListen);
*/
}





