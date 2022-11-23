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
    pn=0;
    nn=0;
    dn=0;
    qn=0;
    tn=0;
    pv=0;
    nv=0;
    dv=0;
    qv=0;
    tv=0;
}

function addPenny() {
    tn += 1;
    tv += 0.01;
    pn += 1;
    pv += 0.01;
    display();
}

function minusPenny() {
    if (pn>0) {
        tn -= 1;
        tv -= 0.01;
        pn -= 1;
        pv -= 0.01;
    }
    display();
}

function addNickel() {
    tn += 1;
    tv += 0.05;
    nn = + 1;
    nv = + 0.05;
    display();
}

function minusNickel() {
    if (nn>0) {
        tn -= 1;
        tv -= 0.05;
        nn = - 1;
        nv = - 0.05;
    }
    display();
}

function addDime() {
    tn += 1;
    tv += 0.10;
    dn = 1;
    dv = 0.10;
    display();

}

function minusDime() {
    if (dn>0) {
        tn -= 1;
        tv -= 0.10;
        dn = 1;
        dv = 0.10;
    }
    display();
}

function addQuarter() {
    tn += 1;
    tv += 0.25;
    qn += 1;
    qv += 0.25;
    display();
}

function minusQuarter() {
    if (qn>0) {
        tn -= 1;
        tv -= 0.25;
        qn -= 1;
        qv -= 0.25;
    }
    display();
}

function display() {
    pennyNum.innerHTML = Math.floor(pn);
    nickelNum.innerHTML = Math.floor(nn);
    dimeNum.innerHTML = Math.floor(dn);
    quarterNum.innerHTML = Math.floor(qn);
    totalNum.innerHTML = Math.floor(tn);
    pennyValue.innerHTML = Math.floor(pv);
    nickelValue.innerHTeValue = nv;
    dimeValue.innerHTML = Math.floor(dv);
    quarterValue.innerHTML = Math.floor(qv);  
    totalValue.innerHTML = Math.floor(tv);
}