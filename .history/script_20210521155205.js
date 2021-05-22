let house = document.querySelector('body');
let table = document.createElement('table');
let x = prompt('Enter number of rows');
let y = prompt('Enter number of columns', x);

let tr;
let td;
let colorHouse = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 102, 0)', 'rgb(0, 255, 0)', 'rgb(102, 0, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];

let rowArray = [];
for (let i = 0; i < x; i++) {
    let tr = document.createElement('tr');
    //  tr.style.border = ' 0px solid black';
    // tr.style.borderCollapse = "collapse";

    let columnArray = [];

    for (let j = 0; j < y; j++) {
        td = document.createElement('td');

        td.innerHTML = `<span></span>`;
        tr.appendChild(td);
        //let b = td;
        //a.push(b);
        td.style.height = '10px';
        td.style.width = '10px';
        td.style.color = colorHouse[5];
        td.style.backgroundColor = colorHouse[5];

        //td.style.margin = '20px'
        //td.style.borderColor = "black";
        //td.style.borderWidth = "10px";
        //  td.style.border = ' 1px solid black';
        // td.style.borderCollapse = "collapse";
        columnArray.push(td);
    }

    table.appendChild(tr);

    rowArray.push(columnArray);
}

//console.log(rowArray[3]);

for (let k = 0; k < x; k++) {

    rowArray[k].forEach(item => {

        let counter = 0;
        let colorChange = function (event) {


            console.log(event.target);

            if (counter > 7) {
                counter = 0;
            }




            item.style.backgroundColor = colorHouse[counter];
            item.style.color = colorHouse[counter];
            counter++;



        };
        item.addEventListener('mouseover', colorChange);
    });

}
//table.style.position = 'fixed';
table.style.marginTop = '25vh';
//table.style.left = '50%';
//table.style.right = '50%';
house.appendChild(table);






