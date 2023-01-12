function twoNumberSum(array, targetSum) {
    // Write your code here.
    let indexes = []
    for(let i =0; i < array.length; i++) {
      for(let j=i+1; j < array.length; j++) {
        if(array[i] + array[j] == targetSum) {
          indexes.push(array[i]);
          indexes.push(array[j]);
        }
      }
    }
    return indexes;
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  