
function indice_do_maior_e_menor(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    return `Menor valor ${min} seu indice ${array.indexOf(min)} - Maior valor ${max} seu indice ${array.indexOf(max)}`

}

numeros = [10, 22, 5, 4, 5000, 31,1]
console.log(indice_do_maior_e_menor(numeros))