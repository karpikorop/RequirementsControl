//change header color on scroll
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("navigation").classList.add("onscroll");
    } else {
        document.getElementById("navigation").classList.remove("onscroll");
    }
}



function rand(){

    for(let i = 1; i <= getRowCount("t"); i++){
        let column = document.getElementsByClassName("t" + "r" + i);
        for(let j = 1; j <= 10; j++){
            let rand = Math.random().toFixed(2);
            if(rand == 0)
                rand += 0.05;
            column[j].value = rand;
        }
    }
    for(let i = 1; i <= getRowCount("c"); i++){
        let column = document.getElementsByClassName("c" + "r" + i);
        for(let j = 1; j <= 10; j++){
            let rand = Math.random().toFixed(2);
            if(rand == 0)
                rand += 0.05;
            column[j].value = rand;
        }
    }
    for(let i = 1; i <= getRowCount("r"); i++){
        let column = document.getElementsByClassName("r" + "r" + i);
        for(let j = 1; j <= 10; j++){
            let rand = Math.random().toFixed(2);
            if(rand == 0)
                rand += 0.05;
            column[j].value = rand;
        }
    }
    for(let i = 1; i <= getRowCount("p"); i++){
        let column = document.getElementsByClassName("p" + "r" + i);
        for(let j = 1; j <= 10; j++){
            let rand = Math.random().toFixed(2);
            if(rand == 0)
                rand += 0.05;
            column[j].value = rand;
        }
    }

    
}

let manageCounts = 0;
// count points and sum for certain row
function countSumRow(className) {
    //0-checkbox, (1-10)-experts, (11-20)-points, 21-Sum, 22-Start, 23-Add, 24-End
    let column = document.getElementsByClassName(className);

    let tableType = className.charAt(0);
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum, 22-Start, 23-Add, 24-End
    let header = document.getElementsByClassName(tableType + "Head");

    //check checkBOX
    if (column[0].checked == false) {
        for (let i = 11; i < column.length; i++) {
            column[i].value = (0).toFixed(2);
        }
        countSumTable(tableType);
        return;
    }

    let sum1 = 0;
    let sum2 = 0;
    let prioritySum = 0;
    //count points
    for (let i = 1; i <= 10; i++) {
        column[i + 10].value = (column[i].value * header[i].value).toFixed(2);
        sum1 += column[i].value * 1;
        sum2 += column[i].value * header[i].value;
        prioritySum += header[i].value * 1;
    }

    column[21].value = (sum2 / prioritySum).toFixed(2);

    column[23].value = ((sum2 / prioritySum) * column[22].value).toFixed(2);

    column[24].value = (column[22].value * 1 + column[23].value * 1).toFixed(2);

    countSumTable(tableType);
    countSumPrice();
}

//counts sums in header
function countSumTable(tableType) {
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum, 22-Start, 23-Add, 24-End
    let header = document.getElementsByClassName(tableType + "Head");

    let rowCount = getRowCount(tableType);

    //checks count
    let tempCount = 0;
    for (let i = 1; i <= rowCount; i++) {
        if (document.getElementsByClassName(tableType + "r" + i)[0].checked == true) tempCount++;
    }
    header[0].value = tempCount;

    for (let i = 11; i <= 24; i++) {
        let tempSum = 0;
        for (let j = 1; j <= rowCount; j++) {
            tempSum += document.getElementsByClassName(tableType + "r" + j)[i].value * 1;
        }
        if (i < 21) header[i].value = (tempSum / header[i - 10].value).toFixed(2);
        else if (i == 21) header[i].value = (tempSum / header[0].value).toFixed(2);
        else header[i].value = tempSum.toFixed(2);
    }
    countSumFromAllTables();
}
function countSumPrice() {
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum, 22-Start, 23-Add, 24-End
    let tHeader = document.getElementsByClassName("tHead");
    let cHeader = document.getElementsByClassName("cHead");
    let pHeader = document.getElementsByClassName("pHead");
    let rHeader = document.getElementsByClassName("rHead");

    let startCost = document.getElementsByClassName("startCost");

    startCost[1].value = tHeader[22].value;
    startCost[2].value = cHeader[22].value;
    startCost[3].value = pHeader[22].value;
    startCost[4].value = rHeader[22].value;

    startCost[0].value = (tHeader[22].value * 1 + cHeader[22].value * 1 + pHeader[22].value * 1 + rHeader[22].value * 1).toFixed(2);

    let endCost = document.getElementsByClassName("endCost");

    endCost[1].value = tHeader[24].value;
    endCost[2].value = cHeader[24].value;
    endCost[3].value = pHeader[24].value;
    endCost[4].value = rHeader[24].value;

    endCost[0].value = (tHeader[24].value * 1 + cHeader[24].value * 1 + pHeader[24].value * 1 + rHeader[24].value * 1).toFixed(2);
}

function countSumFromAllTables() {
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum, 22-Start, 23-Add, 24-End
    let tHeader = document.getElementsByClassName("tHead");
    let cHeader = document.getElementsByClassName("cHead");
    let pHeader = document.getElementsByClassName("pHead");
    let rHeader = document.getElementsByClassName("rHead");

    let avg = ((tHeader[21].value * 1 + cHeader[21].value * 1 + pHeader[21].value * 1 + rHeader[21].value * 1) / 4).toFixed(2);

    let posibility = "";
    if (avg < 0.1) posibility = "дуже низькою";
    else if (avg < 0.25) posibility = "низькою";
    else if (avg < 0.5) posibility = "середньою";
    else if (avg < 0.75) posibility = "високою";
    else posibility = "дуже високою";

    document.getElementById("result1").innerText = "Ймовірність виникнення ризикової події є " + posibility + " (" + avg + ")";
}
//counts table after priority of expert changes
function countAllTable(tableType) {
    if (tableType != "t" && tableType != "c" && tableType != "p" && tableType != "r") return;

    let rowCount = getRowCount(tableType);

    for (let j = 1; j <= rowCount; j++) {
        countSumRow(tableType + "r" + j);
    }
}

function getRowCount(tableType) {
    if (tableType == "t") return 11;
    if (tableType == "c") return 7;
    if (tableType == "p") return 9;
    if (tableType == "r") return 14;
    return 0;
}

function changeManagment(className) {
    let testCount = 0;
    let column = document.getElementsByClassName(className);
    for (let i = 0; i < column.length; i++) {
        testCount += column[i].value * 1;
    }
    if (testCount != 1) {
        for (let i = 0; i < column.length; i++) {
            column[i].value = 0;
        }
        alert("Значення можуть бути лише або 1, або 0.\nДля кожного заходу може бути вибраний лише один напрямок.");
        return;
    }
    countManageCounts();
}
function countManageCounts() {
    let count = 0;
    for (let i = 1; i <= 19; i++) {
        let column = document.getElementsByClassName("er" + i);
        for (let i = 0; i < column.length; i++) {
            count += column[i].value * 1;
        }
    }
    manageCounts = count;
}
function countEtap4Table() {
    /*let header = document.getElementsByClassName(tableType + "Head");

    let rowCount = getRowCount(tableType);

    //checks count
    let tempCount = 0;
    for (let i = 1; i <= rowCount; i++) {
        if (document.getElementsByClassName(tableType + "r" + i)[0].checked == true) tempCount++;
    }
    header[0].value = tempCount;*/

    let tableTypes = ["t", "c", "p", "r"];

    for (let type = 0; type < tableTypes.length; type++) {
        //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum, 22-Start, 23-Add, 24-End
        let header = document.getElementsByClassName(tableTypes[type] + "Head");
        let header4 = document.getElementsByClassName("f" + tableTypes[type] + "Head");

        let rowCount = getRowCount(tableTypes[type]);

        let tempSum = 0;
        let array = [];
        for (let j = 1; j <= rowCount; j++) {
            array.push((document.getElementsByClassName(tableTypes[type] + "r" + j)[23].value * Math.pow(0.97, manageCounts)).toFixed(2));
            document.getElementsByClassName("f" + tableTypes[type] + "r" + j)[0].value = array[j - 1];
        }
        header4[0].value = (header[23].value * Math.pow(0.97, manageCounts)).toFixed(2);

        let max = Math.max(...array);
        let min = Math.min(...array);
        let mpr = ((max - min) / 3).toFixed(2);
        let mpr1 = min * 1 + mpr * 1;
        let mpr2 = mpr * 2;
        let mpr3 = mpr * 3;

        //document.getElementById("info").innerText = max + " " + min + " " + mpr + " " + mpr1 + " " + mpr2 + " " + mpr3;

        let str = "Низький";
        for (let j = 0; j < rowCount; j++) {
            if (array[j] < mpr1) {
                str = "Низький";
            } else if (array[j] < mpr2) {
                str = "Середній";
            } else if (array[j] < mpr3) {
                str = "Високий";
            }
            document.getElementsByClassName("f" + tableTypes[type] + "r" + (j + 1))[1].innerText = str;
        }
    }
}
