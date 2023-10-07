export default function maiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value)
  validaId(dataNascimento)

  console.log(validaId(dataNascimento))
}
function validaId(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  )
  return dataAtual >= dataMais18
}
