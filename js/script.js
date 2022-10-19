var countTech = 7;
var countCost = 3;
var countPlan = 3;
var countReal = 5;

function techChange() {
    let tech = document.getElementsByClassName("tech1");

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
    let cost = document.getElementsByClassName("cost2");

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
    let plan = document.getElementsByClassName("plan3");
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
    let real = document.getElementsByClassName("real4");

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
