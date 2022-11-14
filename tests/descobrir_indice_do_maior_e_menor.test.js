const { indice_do_maior_e_menor } = require('../descobrir_indice_do_maior_e_menor')

describe('Descobrir qual o indice do maior e menor valor da lista', ()=> {
    it('testa a função que verifica o indice',()=> {
        expect(indice_do_maior_e_menor([5000, 200, 30, 8000, 1]))
        .toBe("Menor valor 1 seu indice 4 - Maior valor 8000 seu indice 3")

        expect(indice_do_maior_e_menor([400, 250, 2, 20, 241, 188]))
        .toBe("Menor valor 2 seu indice 2 - Maior valor 400 seu indice 0")

        expect(indice_do_maior_e_menor([14, 23, 100, 21, 58, 8 , 26]))
        .toBe("Menor valor 8 seu indice 5 - Maior valor 100 seu indice 2")
    } )
})