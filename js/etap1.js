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

function tableChange(className) {
    var table = document.getElementsByClassName(className);

    count = 0;
    for (let i = 0; i < table.length; i++) {
        if (table[i].checked == true) {
            count++;
        }
    }

    const re = new RegExp("2$");
    if (re.test(className)) {
        document.getElementById(className + "Text").innerText = ((1 / 41) * count * 100).toFixed(2) + "% " + "Кількість - " + count;
        countResultUniversal(2);
    } else {
        document.getElementById(className + "Text").innerText = ((1 / 18) * count * 100).toFixed(2) + "% " + "Кількість - " + count;
        countResultUniversal(1);
    }
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
