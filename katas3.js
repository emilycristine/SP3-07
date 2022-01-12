const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let retorno = [];
    for (let n = 1; n <= 25; n++) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata1());


function kata2() {
    let retorno = [];
    for (let n = 25; n >= 1; n--) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata2());


function kata3() {
    let retorno = [];
    for (let n = -1; n >= -25; n--) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata3());


function kata4() {
    let retorno = [];
    for (let n = -25; n <= -1; n++) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata4());


function kata5() {
    let retorno = [];
    for (let n = 25; n >= -25; n -= 2) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata5());


function kata6() {
    let retorno = [];
    for (let n = 3; n <= 100; n += 3) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata6());


function kata7() {
    let retorno = [];
    for (let n = 7; n <= 100; n += 7) {
        retorno.push(n)
    }
    return retorno;
}
console.log(kata7());


function kata8() {
    let retorno = [];
    for (let n = 100; n >= 1; n--) {
        if (n % 7 === 0 || n % 3 === 0) {
            retorno.push(n)
        }
    }
    return retorno;
}
console.log(kata8());


function kata9() {
    let retorno = [];
    for (let n = 1; n <= 100; n++) {
        if (n % 5 === 0 && n % 2 !== 0) {
            retorno.push(n)
        }
    }
    return retorno;
}
console.log(kata9());


function kata10() {
    return sampleArray;
}
console.log(kata10());


function kata11() {
    let retorno = [];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] % 2 === 0) {
            retorno.push(sampleArray[n])
        }
    }
    return retorno;
}
console.log(kata11());


function kata12() {
    let retorno = [];
    for (let n = 0; n <= sampleArray.length; n++) {
        if (sampleArray[n] % 2 === 1) {
            retorno.push(sampleArray[n])
        }
    }
    return retorno;
}
console.log(kata12());

function kata13() {
    let retorno = [];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] % 8 === 0) {
            retorno.push(sampleArray[n])
        }
    }
    return retorno;
}
console.log(kata13());


function kata14() {
    let retorno = [];
    for (let n = 0; n < sampleArray.length; n++) {
        retorno.push(sampleArray[n] * sampleArray[n])
    }
    return retorno;
}
console.log(kata14());

function kata15() {
    let retorno = 0;
    for (let n = 1; n <= 20; n++) {
        retorno += n
    }
    return retorno;
}
console.log(kata15());

function kata16() {
    let retorno = 0;
    for (let n in sampleArray) {
        retorno += sampleArray[n]
    }
    return retorno;
}
console.log(kata16());

function kata17() {
    let retorno = sampleArray[0];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] < retorno) {
            retorno = sampleArray[n]
        }
    }
    return retorno;
}
console.log(kata17());

function kata18() {
    let retorno = sampleArray[0];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] > retorno) {
            retorno = sampleArray[n]
        }
    }
    return retorno;
}
console.log(kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
