// // JavaScript File
/*global startButton*/
var userNum;

var getNum = function() {
    userNum = prompt('Num:');
    fibcicle(userNum);
    fibrec(userNum, "recursionResult");
}

var fibcicle = function (userNum) {
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

var fibrec = function (userNum, id) {
    var fibStartCount = 3;
    var tempRecursionNum;
    var firstRecursionNum = 0;
    var secondRecursionNum = 1;
    var _fibrec = function (userNum, id) {
    
        tempRecursionNum = firstRecursionNum + secondRecursionNum;
        firstRecursionNum = secondRecursionNum;
        secondRecursionNum = tempRecursionNum;
        fibStartCount++;
        if (fibStartCount <= userNum) {
            _fibrec(userNum, id);
        }
    
        document.getElementById(id).innerHTML = "Recursion res: " +
            tempRecursionNum;
    }
    _fibrec(userNum, id);
}

startButton.onclick = getNum;