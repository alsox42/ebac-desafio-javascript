//Cálculo do M.D.C. pelo processo das divisões sucessivas

function MDC(num1, num2) {
    let resto
    let result
    let [dividendo, divisor] = menor_antes(num1, num2)
    while (true) {
        resto = dividendo % divisor
        dividendo = divisor
        divisor = resto
        if (divisor > 0) {
            result = divisor
        } else {
            break
      }     
    }
    return result
}

function menor_antes(a, b) {
    let aux
    if (b < a) {
        aux = b 
        b = a 
        a = aux 
    }
    return [a, b]
}

module.exports = { MDC }
