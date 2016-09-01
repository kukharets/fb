// // JavaScript File
/*global startButton*/
startButton.onclick = getNum;
var userNum;
function getNum() {
    userNum = prompt('Num:');
    fibcicle(userNum);
    fibrec(userNum);
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


var fibrec = function (userNum){
    var fibStartCount = 3;
    var tempRecursionNum;
    var firstRecursionNum = 0;
    var secondRecursionNum = 1;
    function _fibrec(userNum) {
    
        tempRecursionNum = firstRecursionNum + secondRecursionNum;
        firstRecursionNum = secondRecursionNum;
        secondRecursionNum = tempRecursionNum;
        fibStartCount++;
        if (fibStartCount <= userNum) {
            _fibrec(userNum);
        }
    
        document.getElementById("recursionResult").innerHTML = "Recursion res: " +
            tempRecursionNum;
    }
    _fibrec(userNum);
}