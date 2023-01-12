#include <vector>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  // Write your code here.
  vector<int> result;
  for(int i =0; i < array.size(); i++) {
    for (int j=i+1; j < array.size(); j++) {
      if(array[i] + array[j] == targetSum) {
        result.push_back(array[i]);
        result.push_back(array[j]);
      }
    
    }
  }
  return result;
}
