const fs = require('fs');

// 1 leer archivo

function leer(ruta){
    fs.readFile(ruta, (err, data) =>{
        console.log(data.toString());
    })
}

leer(__dirname + '/archivo.txt');

// escribir en el txt
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.log('No se ha podido escribir', err);
        } else {
            console.log('se ha escrito correctamente');
        }
    })
}

// eliminar txt
function borrar(ruta,cb){
    fs.unlink(ruta, cb); 
}

borrar(`${__dirname}/archivo1.txt`, console.log)

// escribir(`${__dirname}/archivo1.txt`,'reescribir', console.log);

//leer(__dirname + '/archivo1.txt');