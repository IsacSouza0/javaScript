/*function NOME (argumento, argumento, argumento, argumento) {
    execução
} */

function SomaElevadaAoQuadrado(a = 2, b = 2) {// assinatura da função   
    return (a + b) ** 2
};
console.log(SomaElevadaAoQuadrado(10, 10));

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) +
    min;
}

/*
min 0
max 10

Math.floor(0.5 *(110))

 */
