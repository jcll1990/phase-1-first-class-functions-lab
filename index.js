const returnFirstTwoDrivers = function (x) {
    return [x[0],x[1]]
}

const returnLastTwoDrivers = function (x) {
    return [x[x.length-2],x[x.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(a) {
    return function lados(b) {
        return a*b
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (x,y) {
   if (y === returnFirstTwoDrivers) {
return returnFirstTwoDrivers(x)
 } 
 else if (y === returnLastTwoDrivers) {
return returnLastTwoDrivers(x)
}
}
