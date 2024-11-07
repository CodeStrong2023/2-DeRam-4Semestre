async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

async function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve();
            // reject('Hay un error');
        }, 1000);
    })
}

 async function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function (){
            console.log('bla bla bla bla')
            resolve(nombre);
        }, 1000);
    })
}

// await hola('Ariel');

async function main(){
    let nombre = await hola('ariel');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminar el proceso')
}

console.log('Empezar el proceso..')
main();
console.log('Esta va a ser la segunda instrucción')