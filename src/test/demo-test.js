const assert = require('chai').assert
const demo = require('../demo-2/demo')

describe("Diferentes tipos de testes com Mocha e Chai", () => {
  it("Teste: Deve retornar a frase: 'Mocha e chai são legais'", () => {
    assert.equal(demo(), 'Mocha e Chai são legais')
  })
})
