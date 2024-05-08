const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena) => {
    const cadenaInvertidad = cadena.split('').reverse().join('');
    console.log(`Cadena invertidad: ${cadenaInvertidad}`)
})