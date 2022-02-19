const chai = require("chai")
const calculadora = require("../demo-1/calculadora")

const assert = chai.assert

describe("TDD de operações da calculadora", () => {
  it("Somar dois numeros", () => {
    assert.equal(calculadora.adicionar(5,5), 10)
  });
  it("subtrair dois numeros", () => {
    assert.equal(calculadora.subtrair(5,5), 0)
  });
  it("Multiplicar dois numeros", () => {
    assert.equal(calculadora.multiplicar(5,5), 25)
  });
  it("Dividir dois numeros", () => {
    assert.equal(calculadora.dividir(5,5), 1)
  });
})

describe('Outros tipos de testes com assertions - Chai', () => {
  it('Teste: Deve verificar se um determinado número é maior ou igual', () => {
    assert.isAtLeast(6, 2, '6 é maior do que 2');
    assert.isAtLeast(7, 7, '7 é igual a 7');
  });
});
