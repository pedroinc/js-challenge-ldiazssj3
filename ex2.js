
function sortedSquareArray(items) { 

  if(items.length === 0) throw Error('Empty array!');
  
  let result = [];

  for(let i = 0; i < items.length; i++) {
    
    if (items[i] > items[i+1]) throw Error('Invalid array! Not sorted!');

    result.push(items[i] * items[i]);
  }
  
  return result.sort(function(a, b) { return a - b; });
}

// result = sortedSquareArray([]);
// result = sortedSquareArray([-2, -1]);
// result = sortedSquareArray([1, 2, 3, 5, 6, 8, 9]);
// result = sortedSquareArray([-10, -5, 0, 5, 10]);
// console.log(result);