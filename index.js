// // JavaScript File
/*global startButton*/
startButton.onclick = getNum;
var userNum;
function getNum() {
    userNum = prompt('Num:');
    fibcicle(userNum);
    fibrec(userNum);
}


function fibcicle(userNum) {
    var firctCicleNum = 0;
    var secondCicleNum = 1;
    var tempCicleNum;
    for (var i = 3; i <= userNum; i++) {
        tempCicleNum = firctCicleNum + secondCicleNum;
        firctCicleNum = secondCicleNum;
        secondCicleNum = tempCicleNum;
    }
    document.getElementById("cicleResult").innerHTML = "Cicle res: " +
        tempCicleNum;
}


var fibStartCount = 3;
var tempRecursionNum;
var firstRecursionNum = 0;
var secondRecursionNum = 1;
function fibrec(userNum) {

    tempRecursionNum = firstRecursionNum + secondRecursionNum;
    firstRecursionNum = secondRecursionNum;
    secondRecursionNum = tempRecursionNum;
    fibStartCount++;
    console.log(firstRecursionNum, secondRecursionNum, tempRecursionNum, fibStartCount, userNum);
    if (fibStartCount <= userNum) {
        fibrec(userNum);
    }

    document.getElementById("recursionResult").innerHTML = "Recursion res: " +
        tempRecursionNum;
}