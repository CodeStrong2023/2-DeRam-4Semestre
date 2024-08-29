console.log('Inicio del programa'); // 1

setTimeout(() => {
  console.log('Primer Timeout'); // 5
}, 3000);

setTimeout(() => {
  console.log('Segundo Timeout'); // 3
}, 0);

setTimeout(() => {
  console.log('Tercer Timeout'); // 4
}, 0);

console.log('Fin del programa'); // 2

// Output:  Inicio del programa, Fin del programa, Segundo Timeout, Tercer Timeout, Primer Timeout
// Explanation: The first two console.log() statements are executed first, then the setTimeout() functions are executed.
// The setTimeout() functions with a delay of 0 milliseconds are executed after the first two console.log() statements.
