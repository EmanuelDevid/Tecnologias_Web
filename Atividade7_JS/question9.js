const somaPares = (array1, array2) => {
    const arrayCopia = array1
    return arrayCopia.map(((_, index) => array1[index] + array2[index]))
}

const array1 = [1, 3, 5, 7, 9]
const array2 = [2, 4, 6, 8, 10]

const meuArray = somaPares(array1, array2)
console.log('Array 1:', array1)
console.log('Array 2:', array2)
console.log('Array soma', meuArray)
