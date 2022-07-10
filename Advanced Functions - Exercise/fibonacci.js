function getFibonator() {
    let first = 0;
    let second = 0;

    return () => {
        let result = first + second ||1;
        first = second;
        second = result;
        return result;
    }
}
let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
