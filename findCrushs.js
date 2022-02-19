const listaCrush = [
  "Tom Cruise",
  "Carlos Daniel",
  "Zezinho"
]

const somaCrush = (a,b) => {
  return a+b
}

const encontrarCrush = (nome) => {
  try{
    validacao(nome)
    const crushEncontrado = listaCrush.find(crush => crush === nome)
    return crushEncontrado ? crushEncontrado : "Crush não encontrado"
  }catch(erro){
    return erro
  }
}

const validacao = (nome) => {
  if(!nome) throw "Campo nome é obrigatório"
}

module.exports = {
  somaCrush,
  encontrarCrush
}
