// Code your solution in this file!
const driversGlobal = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(driversLocal){
    let firstTwo = driversLocal.slice(0,2);
    return firstTwo;
}

function returnLastTwoDrivers(driversLocal){
    let lastTwo = driversLocal.slice(-2);
    return lastTwo;
}

//can put functions in an array...
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers[0](driversGlobal));


function createFareMultiplier(fareMult){
    return function(){
        return fareMult*fareMult;
    };
}

//how to run this function.
const createMultiplier = createFareMultiplier(5);
console.log(createMultiplier());

function fareDoubler(amount){
        return amount*2;
}

function fareTripler(amount){
    return amount*3;
}

//generalizes the code this way I guess...
function selectDifferentDrivers(arrayOfDrivers, functionName){
    return functionName(arrayOfDrivers);
}
