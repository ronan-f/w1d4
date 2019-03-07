var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});




function map(array, functionInput){
  newArray = [];
  for (let i = 0; i < array.length; i ++){
    newArray.push(functionInput(array[i]));

  } console.log(newArray);
}

