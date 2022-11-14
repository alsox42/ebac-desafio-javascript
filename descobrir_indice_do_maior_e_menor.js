
function indice_do_maior_e_menor(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    return `Menor valor ${min} seu indice ${array.indexOf(min)} - Maior valor ${max} seu indice ${array.indexOf(max)}`

}

module.exports = { indice_do_maior_e_menor }
