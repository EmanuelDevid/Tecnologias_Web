const arrayToString = (array) => {
    let string = []
    array.forEach(item => string += item)
    return string
}

const pessoas = ['B', 'r', 'a', 's', 'i', 'l']

const minhaString = arrayToString(pessoas)

console.log(minhaString)