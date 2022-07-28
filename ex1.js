

function minSumNotPossible(coins) {
  
  // TODO not finished.
  const sum = coins.reduce((partial, acc) => partial + acc, 0);

  let minSum = 0;
  let possibleSums = [];

  // for(let i = 0; i < coins.length - 1; i++) { 
  //   console.log(coins[i] + coins[i] + 1)
  // }

  // for(let i = 0; i < coins.length; i++) {
  //   // let control = coins[i];
  //   for(let j = 0; j < coins.length; j++) {
  //     if(i !== j) {
  //       // console.log(coins[i] + coins[j]);
  //       // control += coins[j]
  //       possibleSums.push(coins[i] + coins[j]);
  //     }
  //   }
  // }

  // possibleSums = possibleSums.sort(function(a, b) { return a - b; });

  console.log(possibleSums);
  // console.log(sum);
}


// const items = [5, 7, 1, 1, 2, 3, 22]; // 20
const items = [1, 1, 1, 1, 1]; // 6

minSumNotPossible(items);
