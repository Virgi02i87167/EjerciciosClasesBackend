const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const palabra = frase.split(' ');
    const fraseCapitalizada = palabra.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    console.log(`Frase capitalizada: ${fraseCapitalizada}`);
})