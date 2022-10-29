const isArray = entrada => {
    if(Array.isArray(entrada)){
        return true
    } else{
        return false
    }
}

const array1 = [2,4,5]
const array2 = ['Emanuel', 'Dêvid', 'Felix']
const num = 100

console.log(isArray(array1))
console.log(isArray(array2))
console.log(isArray(num))
