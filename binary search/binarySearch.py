from math import floor

def binarySearch(arr, target):
  left = 0
  right = len(arr) - 1
  while left <= right:
    middle = int(floor((right - left)) / 2 + left)
    if arr[middle] == target: return middle
    elif arr[middle] < target: left = middle + 1
    else: right = middle - 1

  return -1
  
