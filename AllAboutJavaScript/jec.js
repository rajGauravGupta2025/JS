/* 
1. JEC -> Javascript Execution Context
2. GEC -> Global Execution Context
3. EEC -> Eval Execution Context

Javascript code running phase: [{}]   -> This curly braces are the JS code...
1. Memory creation phase -> Whatever the variable is created is allocated to memory
2. Execution Phase 

Example with code file:
                        let val1 = 10
                        let val2 = 5
                        function addNum(num1,num2){
                            let total = num1 + num2
                            return total
                        }
                        let result1 = addNum(val1,val2)
                        let result2 = addNum(10,2)

What's the first thing happen is:
1. Global execution(GLobal Environment) which is allocated inside the "this" keyword

2. Memory creation phase(Creation phase)
   i> val1 -> undefined
   ii> val2 -> undefined
   iii> addNum -> definition
   iv> result1 -> undefined
   v> result2 -> undefined

3. Execution Phase: 
   i> val1 <- 10
   ii> val2 <- 5
   iii> addNum -> [
                    New variable environment + execution thread            // this function if of result1
                  ]              
                    Note: Whenever the function call happen, then always new box will create and it calles as New Executional context and under this context again the Execution phase will be created

                    -> Memory Phase:
                    a. val1 -> undefined
                    b. val2 -> undefined
                    c. total -> undefined
                    
                    -> Execution Phase:
                    a. num1 -> 10
                    b. num2 -> 5
                    c. total -> 15   //Here the total will return into Global executional context(GEC)
                    Note: All the execution done, the context will be "Deleted" and back to remaining execution flow

    iv> result1 -> 15       
    v> result2 -> 12   // this will happen same as above
    
    

    CallStack:- LIFO(Last In First Out)
    1. Global Execution
    2. And all the function and methods are pushed into the call stack and as the function completed it get removed from thr call stack
*/