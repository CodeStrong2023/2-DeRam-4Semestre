// this === global

// mostrar en consola
/*console.log();

// mostrar mensaje en forma de error
console.error();

// ejecutar un codigo despues de un intervalo de tiempo
setTimeout(() => {},);

// ejecutar un codigo cada intervalo e tiempo
setInterval(() =>{});

// da prioridad de ejecucion a una funcion asincronica
setImmediate(() =>{});

console.log(setInterval)*/

let i = 0;
let intervalo = setInterval(()=>{
    console.log('Hola');
    if(i===3){
        clearInterval(intervalo);
    }
    i++;
}, 1000); 

setImmediate(()=>{
    console.log('Saludo inmediato');
});

// require();

console.log(__filename);
globalThis.miVariable = 'mi variable global'
console.log(miVariable);
