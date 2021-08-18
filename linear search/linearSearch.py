def linearSearch(arr, target):
  for i in range(len(arr)):
    if arr[i] == target: return i
    
  return -1
