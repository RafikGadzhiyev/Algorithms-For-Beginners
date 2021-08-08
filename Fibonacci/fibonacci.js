        // Bad version via double recursion
        function fibonacci(n){
            if(n < 2) return n;

            return fibonacci(n - 1) + fibonacci(n - 2);
        }

        // Optimal version

        function fibonacci(n){
            let a = 0, b = 1;
            for(let i = 0; i < n; ++i){
                [a, b] = [b, a + b];
            }

            return a;
        }
