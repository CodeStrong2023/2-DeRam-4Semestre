
console.log("Inicio del programa");

let i = 0;

setInterval(() => {
  console.log(i);
  i++;

  if (i === 5) {
    console.log("Forzamos error");
    let a = 3 + z;
  }
}, 1000);

console.log("Fin del programa");