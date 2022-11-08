let mult_5 = 0
let mult_7 = 0

for (n=1; n < 1000; n++) {
    
    if (n%5 === 0) {
        mult_5 += n
    }

    if (n%7 === 0) {
        mult_7 += n
    } 
    
}

console.log(`A soma dos multiplos de 5 e 7 menores que 1000 é ${mult_5 + mult_7} `)
