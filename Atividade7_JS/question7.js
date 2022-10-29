const itemMaisFrequente = array => {
    let idMaisFrequente = 0
    let aux = 0
    let maior = 0

    array.forEach((item, index) => {
        for(let i = 0; i < array.length; i++){
            if(item === array[i]){
                aux++
            }
            if(aux > maior){
                idMaisFrequente = index
                maior = aux
            }
        }
        aux = 0
    })
    return array[idMaisFrequente]
}

const numeros = [1, 2, 2, 2, 3, 3, 5, 5, 4]

const maisFrquente = itemMaisFrequente(numeros)

console.log(maisFrquente)