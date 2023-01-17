function sortedSquaredArray(array) {
    // Write your code here.
    sortedSquaredArray = array.map((a)=>a*a);
    return sortedSquaredArray.sort((a,b)=>a-b);
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  