var countTech = 7;
var countCost = 3;
var countPlan = 3;
var countReal = 5;

function techChange() {
    let tech = document.getElementsByClassName("tech");

    countTech = 0;
    document.getElementById("techText").innerText = "";
    for (let i = 0; i < tech.length; i++) {
        if (tech[i].checked == true) {
            countTech++;
        }
    }

    let percentage = ((1 / 18) * countTech * 100).toFixed(2);
    document.getElementById("techText").innerText = percentage + "% " + "Кількість - " + countTech;
    countResult1();
}
function costChange() {
    let cost = document.getElementsByClassName("cost");

    countCost = 0;
    document.getElementById("costText").innerText = "";
    for (let i = 0; i < cost.length; i++) {
        if (cost[i].checked == true) {
            countCost++;
        }
    }

    let percentage = ((1 / 18) * countCost * 100).toFixed(2);
    document.getElementById("costText").innerText = percentage + "% " + "Кількість - " + countCost;
    countResult1();
}
function planChange() {
    let plan = document.getElementsByClassName("plan");
    countPlan = 0;
    document.getElementById("planText").innerText = "";
    for (let i = 0; i < plan.length; i++) {
        if (plan[i].checked == true) {
            countPlan++;
        }
    }

    let percentage = ((1 / 18) * countPlan * 100).toFixed(2);
    document.getElementById("planText").innerText = percentage + "% " + "Кількість - " + countPlan;
    countResult1();
}
function realChange() {
    let real = document.getElementsByClassName("real");

    countReal = 0;
    document.getElementById("realText").innerText = "";
    for (let i = 0; i < real.length; i++) {
        if (real[i].checked == true) {
            countReal++;
        }
    }

    let percentage = ((1 / 18) * countReal * 100).toFixed(2);
    document.getElementById("realText").innerText = percentage + "% " + "Кількість - " + countReal;
    countResult1();
}

function countResult1() {
    let countSum = countTech + countCost + countPlan + countReal;
    let percentage = ((1 / 18) * countSum * 100).toFixed(2);
    document.getElementById("result1").innerText = percentage + "% Кількість - " + countSum;
}
function tableChange(className) {
    var table = document.getElementsByClassName(className);

    count = 0;
    for (let i = 0; i < table.length; i++) {
        if (table[i].checked == true) {
            count++;
        }
    }

    let percentage = ((1 / 18) * count * 100).toFixed(2);
    document.getElementById(className + "Text").innerText = percentage + "% " + "Кількість - " + count;

    const re = new RegExp("2$");
    if (re.test(className)) countResultUniversal(2);
    else countResultUniversal(1);
}
function countResultUniversal(section) {
    let countSum = 0;

    let str = "";
    if (section == 2) str = 2;

    let table = document.getElementsByClassName("tech" + str);
    for (let i = 0; i < table.length; i++) {
        if (table[i].checked == true) {
            countSum++;
        }
    }

    table = document.getElementsByClassName("cost" + str);
    for (let i = 0; i < table.length; i++) {
        if (table[i].checked == true) {
            countSum++;
        }
    }

    table = document.getElementsByClassName("plan" + str);
    for (let i = 0; i < table.length; i++) {
        if (table[i].checked == true) {
            countSum++;
        }
    }

    table = document.getElementsByClassName("real" + str);
    for (let i = 0; i < table.length; i++) {
        if (table[i].checked == true) {
            countSum++;
        }
    }

    if (section == 2) var percentage = ((1 / 41) * countSum * 100).toFixed(2);
    else var percentage = ((1 / 18) * countSum * 100).toFixed(2);

    document.getElementById("result" + section).innerText = percentage + "% Кількість - " + countSum;
}
