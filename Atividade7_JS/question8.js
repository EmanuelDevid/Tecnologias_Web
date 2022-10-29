const eliminaDuplicados = (array) => {
    let vetorDeIndices = []

    let newArray = array.map(item => item.toUpperCase())

    newArray.forEach((item, index) => {
        for(let i = 0; i < newArray.length; i++){
            if(item === newArray[i] && index){
                newArray.splice(index, 1)
            }
        }
    })

    
    return newArray
}

const numeros = ['maria', 'Maria', 'MARIA', 'joao', 'pedro', 'PEDRO', '2', '2', '3', '3', '40', '40']
const numerosUnicos = eliminaDuplicados(numeros)

console.log(numerosUnicos)