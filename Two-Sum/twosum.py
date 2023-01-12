##two Sum problem

arr = [2, 7, 11, 15]

target = 9

def twosum(arr, target):
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] + arr[j] == target:
                return [arr[i], arr[j]]
    
    return []
