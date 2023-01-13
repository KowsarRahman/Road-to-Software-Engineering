function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqIndx = 0;
    let arrIndx = 0;
    while (seqIndx < sequence.length && arrIndx < array.length) {
        if (array[arrIndx] == sequence[seqIndx]) {
          seqIndx+=1;
        }
      arrIndx+=1;
    }
    if(sequence.length == seqIndx) {
      return true;
    } else {
      return false;
    }
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  