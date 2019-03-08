var wrapLog = function (callback, name) {


  return function(){

    let finalString = name + ' (';



    let argumentsObject = arguments;  // object with index as key and arguments from logArea as values
    let totals = callback.apply(null, arguments); // total area/volume as integers



    for(args of arguments){
      finalString += args + ', ';
    } finalString += ') => ' + totals;

    console.log(finalString);
  }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6



var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24




// Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that internally invokes (calls) callback during its execution and also logs the name, input parameters, and return value of the callback function. Following is a template with example usage.


