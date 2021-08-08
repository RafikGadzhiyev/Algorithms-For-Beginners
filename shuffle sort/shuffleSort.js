// P.S. start and finish aren't important part. These variables contain information when algorithm started and finished
        function shuffleSort(arr) {
            let start = 0,
                end = arr.length - 1,
                startTime = Date.now();

            while (start < end) {
                for (let i = start; i <= end; ++i) {
                    if (arr[i] > arr[i + 1]) {
                        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    }
                }
                end--;
                for(let i = end; i >= start; --i){
                    if(arr[i] > arr[i + 1]){
                        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    }
                }
                start ++;
            }
            let endTime = Date.now();
            timer = endTime - startTime + 'ms';
        }
