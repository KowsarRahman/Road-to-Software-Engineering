#include<vector>
#include<iostream>
using namespace std;

bool isValidSubsequence(vector<int> array, vector<int> sequence) {
  // Write your code here.
  int seqIndx = 0;
  int arrIndx = 0;
  while (seqIndx < sequence.size() and arrIndx < array.size()) {
    if (array[arrIndx] == sequence[seqIndx]) {
    seqIndx+=1;
    }
  arrIndx +=1;
  }

  if (seqIndx == sequence.size()) {
    return true;
  }
  
  return false;
}
