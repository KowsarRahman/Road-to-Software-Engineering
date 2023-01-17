def sortedSquaredArray(array):
    # Write your code here.
    
    sorted = []
    for i in range(len(array)):
        squared = array[i] * array[i]
        sorted.append(squared)

    return sorted