const { MDC } = require('../calculando_mdc')

describe('Calculando Minimo Divisor Comum entre dois numeros', ()=> {
    it('testa a função MDC com dois valores', ()=> {
        expect(MDC(90, 36)).toBe(18)
        expect(MDC(200, 20)).toBe(20)
        expect(MDC(56, 12)).toBe(4)
        expect(MDC(25, 5)).toBe(5)
        expect(MDC(255, 78)).toBe(3)

    })
})