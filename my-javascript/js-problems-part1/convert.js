//12 inch 1 feet 
function inchToFeet(inch){
    const feet =inch/12;
    return feet;
}
//75
function inchToFeet2(inch){
    const feetFraction= inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining=inch %12;
    const result= feetNumber +'ft' +inchRemaining+'inch';
    return result;
}
const shuvoHight=inchToFeet(75);
// console.log(shuvohight);
const shuvoHight2=inchToFeet2(75);
console.log(shuvoHight2);


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const getkilo= mileToKilometer(17);
console.log(getkilo);


function kiloToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const getMile=kiloToMiles(12);
console.log(getMile);