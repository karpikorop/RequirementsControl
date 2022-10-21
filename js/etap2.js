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
// count points and sum for certain row
function countSumRow(className) {
    //0-checkbox, (1-10)-experts, (11-20)-points, 21-Sum
    let column = document.getElementsByClassName(className);

    let tableType = className.charAt(0);
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum
    let header = document.getElementsByClassName(tableType + "Head");

    

    //check checkBOX
    if (column[0].checked == false) {
        for (let i = 11; i < column.length; i++) {
            column[i].value = (0).toFixed(2);
        }
        countSumTable(tableType);
        return;
    }

    let sum = 0;
    let prioritySum = 0;
    //count points
    for (let i = 1; i <= 10; i++) {
        column[i + 10].value = (column[i].value * header[i].value).toFixed(2);
        sum = sum + column[i].value * header[i].value;
        prioritySum += header[i].value * 1;
    }
    //document.getElementById("info").innerText = sum;
    column[21].value = (sum / prioritySum).toFixed(2);

    countSumTable(tableType);
}
//counts sums in header
function countSumTable(tableType) {
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum
    let header = document.getElementsByClassName(tableType + "Head");

    let rowCount = getRowCount(tableType);

   
    //checks count
    let tempCount = 0;
    for (let i = 1; i <= rowCount; i++) {
        if (document.getElementsByClassName(tableType + "r" + i)[0].checked == true) tempCount++;
    }
    header[0].value = tempCount;

    for (let i = 11; i <= 21; i++) {
        let tempSum = 0;
        for (let j = 1; j <= rowCount; j++) {
            tempSum += document.getElementsByClassName(tableType + "r" + j)[i].value * 1;
        }
        if(i < 21)
            header[i].value = (tempSum / header[i-10].value).toFixed(2);
        else 
            header[i].value = tempSum.toFixed(2);
    }
    countSum();
}
function countSum(){
    //0-count, (1-10)-priority, (11-20)-prirotyPoints, 21-sum
    let tHeader = document.getElementsByClassName("tHead");
    let cHeader = document.getElementsByClassName("cHead");
    let pHeader = document.getElementsByClassName("pHead");
    let rHeader = document.getElementsByClassName("rHead");

    let sum = (((tHeader[21].value * 1) + (cHeader[21].value * 1) + (pHeader[21].value * 1) + (rHeader[21].value * 1))/4).toFixed(2);
    
        
    document.getElementById("result1").innerText = "Сума зі всіх таблиць - " + sum;

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
