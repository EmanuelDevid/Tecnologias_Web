const formataNumero = numero => {
     const arrayComNumeros = Array.from(numero, Number)
        
     let atual; let prox

     for(let i = 0; i < arrayComNumeros.length; i++){
        atual = i; prox = i + 1

        if(arrayComNumeros[atual] % 2 === 0  && arrayComNumeros[prox]){
            arrayComNumeros.splice(prox, 0, "-")
        }
     }

     let numFinal = []
     arrayComNumeros.forEach(elemento => numFinal += elemento)

     return numFinal
}

const num = '025468'

console.log(formataNumero(num))