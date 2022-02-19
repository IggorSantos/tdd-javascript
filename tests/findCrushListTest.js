const shoud = require("should")
const findCrushs = require('../findCrushs.js')

describe('find crushs', ()=> {
  it('soma crushs', () => {
    findCrushs.somaCrush(3,2).should.be.equal(5)
  })
  it('Deve retornar pessoa não encontrada', () => {
    findCrushs.encontrarCrush("Joselito Marques").should.be.equal("Crush não encontrado")
  })
  it('Retornar Campo nome é obrigatorio se não achar o nome', () => {
    findCrushs.encontrarCrush().should.be.equal("Campo nome é obrigatório")
  })
  it('Retornar um nome da lista', () => {
    findCrushs.encontrarCrush("Carlos Daniel").should.be.equal("Carlos Daniel")
  })
})
