let names = ["Alice", "Bob", "Waldo", "Winston"]

let counter = 0;

names.forEach(function(name){

  if(name === 'Waldo'){
  console.log('Found at index: ' + counter );
 } counter += 1;
})