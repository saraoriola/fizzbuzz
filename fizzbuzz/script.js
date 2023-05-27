/* Imprime todos los números del 1 al 1000 por consola, 
múltiplos de 3 que en vez de imprimir el número, se imprimirá Fizz, 
en los números que sean múltiplos de 5 se imprimirá Buzz, 
y además en los números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz.*/

for (let number = 1; number <= 1000; number++) {
    if (number% 3 ===0 && number % 5 === 0) {
        console.log("FizzBuzz");
    }
    
    else if (number % 3 === 0) {
        console.log("Fizz");
    }

    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(number);
    }
}