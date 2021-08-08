 // first variant via loop
        function factorial(n){
            let result = 1;
            for(let i = 1; i < n + 1; ++i){
                result *= i;
            }
            return result;    
        }

// Second variant  via recursion and ternary operator;
        function factorial(n){
            return n < 2 ? 1 : n * factorial(n - 1);
        }

// Third varsion via recusion 
        function factorial(n){
            if(n < 2) return 1;

            return n * factorial(n - 1);
        }
