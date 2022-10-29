const juntaVetores = (array1, array2)=> {
    array2.forEach((item) => {
        array1.push(item)
    });
    return array1
}

const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10, 11, 12]


const newVetor = juntaVetores(vetorPilha, vetorAdiciona)
console.log(newVetor)