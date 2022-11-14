const { mult_5_7_abaixo_de_1000 } = require('../multiplos_5_7_abaixo _de_1000')

describe('Calcular multiplos de 5 e 7 abaixo de 1000', ()=> {
    it('testa a função mult_5_7_abaixo_de_1000',()=> {
        expect(mult_5_7_abaixo_de_1000())
        .toBe("A soma dos multiplos de 5 e 7 menores que 1000 é 170571")
    } )
})