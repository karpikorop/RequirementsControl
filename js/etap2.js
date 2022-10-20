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
function countSumRow(className, id) {
    //0-checkbox, (1-10)-experts, (11-20)-points, 21-Sum
    let column = document.getElementsByClassName(className);
    let tableType = column[1].id.charAt(0);
    //0-count, (1-10)-priority, (11-20)-prirotyPoints
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
    //count points
    for (let i = 1; i <= 10; i++) {
        column[i + 10].value = (column[i].value * header[i].value).toFixed(2);
        sum = sum + column[i].value * header[i].value;
    }
    //document.getElementById("info").innerText = sum;
    column[21].value = sum.toFixed(2);

    countSumTable(tableType);
}
//counts sums in header
function countSumTable(tableType) {
    //0-count, (1-10)-priority, (11-20)-prirotyPoints
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
        header[i].value = tempSum.toFixed(2);
    }
}
//counts table after priority of expert changes
function countAllTable(tableType) {
    if (tableType != "t" && tableType != "c" && tableType != "p" && tableType != "r") return;

    let rowCount = getRowCount(tableType);

    for (let j = 1; j <= rowCount; j++) {
        countSumRow(tableType + "r" + j, "countAllTables");
    }
}

function getRowCount(tableType) {
    if (tableType == "t") return 11;
    if (tableType == "c") return 7;
    if (tableType == "p") return 9;
    if (tableType == "r") return 14;
    return 0;
}
