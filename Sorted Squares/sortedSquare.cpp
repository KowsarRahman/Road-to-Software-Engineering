#include <vector>
using namespace std;

vector<int> sortedSquaredArray(vector<int> array) {
  // Write your code here.
  vector<int> result(array.size(), 0);
  for (int idx =0; idx < array.size(); idx++) {
    int square = array[idx] * array[idx];
    result[idx] = square;
  }

  sort(result.begin(), result.end());
  return result;
}
