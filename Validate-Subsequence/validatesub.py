def isValidSubsequence(array, sequence):

    
    # Write your code here.
    arrIndx = 0
    seqIndx = 0
    while arrIndx < len(array) and seqIndx < len(sequence):
        if array[arrIndx] == sequence[seqIndx]:
            seqIndx+=1
        arrIndx+=1
    return len(sequence) == seqIndx
    pass
