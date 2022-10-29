const retonaNElementos = (array, qtdElemt) => {
    const nElementos = array.slice(0, qtdElemt)
    return nElementos
}

const alunos = new Array('Emanuel', 'Dêvid', 'Paulino', 'Felix', 'Marcos', 'Maria', 'José')

const newArrayAlunos = retonaNElementos(alunos, 3)

console.log(newArrayAlunos)