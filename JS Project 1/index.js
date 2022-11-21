function initialize() {
    pennyNum = document.getElementById("sumP");
    nickelNum = document.getElementById("sumN");
    dimeNum = document.getElementById("sumD");
    quarterNum = document.getElementById("sumQ");
    totalNum = document.getElementById("sumA");
    pennyValue = document.getElementById("valueP");
    nickelValue = document.getElementById("valueN");
    dimeValue = document.getElementById("valueD");
    quarterValue = document.getElementById("valueQ");
    totalValue = document.getElementById("valueA");
}

function addPenny() {
    tn == totalNum + 1;
    tv = totalValue + 0.01;
    n = pennyNum + 1;
    v = pennyValue + 0.01;
    display();
}

function minusPenny() {
    if (pennyValue >= 0.01) {
        tn = totalNum - 1;
        tv = totalValue - 0.01;
        n = pennyNum - 1;
        v = pennyValue - 0.01;
    }
}

function addNickel() {
    tn == totalNum + 1;
    tv = totalValue + 0.05;
    n = nickelNum + 1;
    v = nickelValue + 0.05;
    display();
}

function minusNickel() {
    if (nickelValue >= 0.05) {
        tn = totalNum - 1;
        tv = totalValue - 0.05;
        n = nickelNum - 1;
        v = nickelValue - 0.05;
    }
}

function addDime() {
    tn == totalNum + 1;
    tv = totalValue + 0.10;
    n = dimeNum + 1;
    v = dimeValue + 0.10;
    display();
}

function minusDime() {
    if (dimeValue >= 0.10) {
        tn = totalNum - 1;
        tv = totalValue - 0.10;
        n = dimeNum - 1;
        v = dimeValue - 0.10;
    }
}

function addQuarter() {
    tn == totalNum + 1;
    tv = totalValue + 0.25;
    n = quarterNum + 1;
    v = quarterValue + 0.25;
    display();
}

function minusQuarter() {
    if (quarterValue >= 0.25) {
        tn = totalNum - 1;
        tv = totalValue - 0.25;
        n = quarterNum - 1;
        v = quarterValue - 0.25;
    }
}

function display() {
    pennyNum.innerHTML = n;
    nickelNum.innerHTML = n;
    dimeNum.innerHTML = n;
    quarterNum.innerHTML = n;
    totalNum.innerHTML = tn;
    pennyValue.innerHTML = v;
    nickelValue.innerHTML = v;
    dimeValue.innerHTML = v;
    quarterValue.innerHTML = v;
    totalValue.innerHTML = tv;
}