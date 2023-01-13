import java.util.*;

class Program {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
    // Write your code here.
            int seqIndx = 0;
        int arrIndx = 0;
        while (seqIndx < sequence.size() && arrIndx < array.size()) {
            if (array.get(arrIndx) == sequence.get(seqIndx)) {
                seqIndx++;
            }
            arrIndx++;
        }
        if (sequence.size() == seqIndx) {
          return true;
        }
    return false;
  }
}
