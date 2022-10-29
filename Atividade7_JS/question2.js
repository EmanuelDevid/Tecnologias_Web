const clonaArray = array => {
    return [...array]
}

const numeros = [1, 2,3,4, 5]

const arrayClone = clonaArray(numeros)

console.log(arrayClone)