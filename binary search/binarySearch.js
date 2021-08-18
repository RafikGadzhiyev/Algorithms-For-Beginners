function binarySearch(arr, target){
            let start = 0,
                end = arr.length - 1;
            
            while(start <= end){
                let middle = start + Math.floor((end - start) / 2);
                if(arr[middle] === target) return middle;
                else if(arr[middle] < target) start = middle + 1;
                else end = middle - 1;
            }

            return -1;
        }
