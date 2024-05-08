const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una frase: ', (frase) =>{
    rl.question('Ingrese la palabra que desea reemplazar: ', (palabraCambiar) =>{
        rl.question('Ingrese la palabra nueva ', (nuevapalabra) => {
            const frasemodificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevapalabra)
            console.log('Frase modificada: ', frasemodificada)
        })
    })
})