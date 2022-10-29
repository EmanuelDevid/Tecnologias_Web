const retonaUltimosItens = (array, qtdElemt) => {
    const arrayInvertido = array.reverse()
    const ultimosElementos = arrayInvertido.slice(0, qtdElemt)
    return ultimosElementos
}

const numeros = [1, 2, 3, 4, 5 ,6]
const newArray = retonaUltimosItens(numeros, 3)

console.log(newArray)