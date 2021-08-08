// P.S. start and finish aren't important part. These variables contain information when algorithm started and finished
function quickSort(arr, start, finish){
            let startTime = Date.now();
            if(start < finish){                
                let  p = partition(arr, start, finish);
                quickSort(arr, start, p)
                quickSort(arr, p + 1,finish);
            }
            let endTime = Date.now();
            timer = endTime - startTime + 'ms';
        }

        function partition(arr, start, finish){
            let pivot = (arr[start] + arr[finish]) / 2;
            let i = start,
                j = finish;

            while (true){
                while(arr[i] < pivot){
                    i++
                }
                while(arr[j] > pivot){
                    j--;
                }
            
                if(i >= j){  
                    return j
                }
                [arr[i++], arr[j--]] = [arr[j], arr[i]];
		}

	}
