console.log('Inicio de programa'); //1

setTimeout(()=>{
    console.log('Primer timeout'); //5
}, 3000);

setTimeout(()=>{
    console.log('Segundo timeout'); //2
}, 0);

setTimeout(()=>{
    console.log('Tercer timeout'); //3
}, 0);

console.log('Fin de programa'); //4
