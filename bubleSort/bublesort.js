function bubbleSort(arr){
  let start = Date.now();
  for(let i = 0; i < arr.length; ++i){
    for(let j = 0; j < arr.length; ++j){
      if(arr[j] > arr[i]){
          let tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
      }
    }
  }
  let finish = Date.now();
  timeResult = finish - start + 'ms'; // start and finish aren't important part. These variables contain information when algorithm started and finished
  return arr;
}
