(function(){

    "use strict";

    const stageRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    document.getElementById("left").innerHTML = "";
    document.getElementById("middle").innerHTML = "";
    document.getElementById("right").innerHTML = "";

    let counter =  1;
    stageRows.forEach(row => {
        document.getElementById("left").innerHTML +=  `<div class="label">${row}</div>`;
        for (let i = 0;i < 3; i++){
            document.getElementById("left").innerHTML += `<div id="${row}${counter}">${counter}</div>`
            counter++;
        }
        counter +=12;
    });


    counter =  4;
    stageRows.forEach(row => {
        //document.getElementById("middle").innerHTML +=  `<div class="label">${row}</div>`;
        for (let i = 0;i < 9; i++){
            document.getElementById("middle").innerHTML += `<div id="${row}${counter}">${counter}</div>`
            counter++;
        }
        counter +=6;
    });

    counter =  13;
    stageRows.forEach(row => {
        for (let i = 0;i < 3; i++){
            document.getElementById("right").innerHTML += `<div id="${row}${counter}">${counter}</div>`
            counter++;
        }
        counter +=12;
        document.getElementById("right").innerHTML +=  `<div class="label">${row}</div>`;

    });
}())