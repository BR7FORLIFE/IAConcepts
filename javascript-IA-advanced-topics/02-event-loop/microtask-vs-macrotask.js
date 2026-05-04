// 1. ejercicio
let count = 0; // inicializamos en 0

console.log("A:", count);

setTimeout(() => {
  count++;
  console.log("B:", count);
}, 0);

async function increment() {
  count += 2;
  await Promise.resolve();
  count += 3;
  console.log("C:", count);
}

increment();

count += 1;
console.log("D:", count);

//pasos de ejecucion

// 1. imprimer 0 -> por el primer console log (A: 0)
// 2. entra a la funcion suma 2 y se fragmenta el codigo en el await y despues se ejecuta en las microtask
// 3. suma 1 mas al final del archivo y imprimer (D: 3)
// 4. entra a las microtask y ejecuta el counter += 3 (C: 6)
// 5. y por ultimo entra a las macrotask ejecutando el timer sumando uno mas al contador teniendo (B: 7)

// 2 ejercicio
async function pingPong(n) {
  if (n === 0) return;
  console.log("Ping:", n);
  await Promise.resolve();
  console.log("Pong:", n);
  pingPong(n - 1);
}

console.log("Inicio");
pingPong(2);
setTimeout(() => console.log("Timer"), 0);
console.log("Fin");

//paso de ejecucion

// 1. imprimer el console.log("Inicio") -> call stack prioridad
// 2. entra a la funcion con el valor del parametro = 2 y valida si n  === 0 return  que no aplica en este caso
// 3. como pasa la validacion imprimer console.log("Ping", n) -> Ping : 2 -> callstack
// 4. ejecuta el console.log("Fin") -> callstack
// 5. se fragmenta el codigo y pasamos a las microtask donde imprimimos console.log("pong", n) -> pong: 2
// 6. se referencia a si misma y ejecuta la funcion con el valor de pingPong(1) pasa las validaciones e imprime Ping: 1 callstack
//7. entramos de nuevo a las microtasks e imprimos el valor console.log("pong", n) -> pong: 1
// 8. se referencia asi mismo de nuevo con el valor de 0 y entra al callstack donde entra al condicional y no termina ejecucion
// 9. ejecuta el setTimeout -> macrotask con console.log("timer")

//ejercicio 3

function block() {
  const start = Date.now();
  while (Date.now() - start < 2000) {} // Bloqueo de 2 segundos
  console.log("Bloqueo terminado");
}

console.log("1");
setTimeout(() => console.log("2 (Timer)"), 500);
Promise.resolve().then(() => {
  console.log("3 (Micro)");
  block();
});
console.log("4");

// pasos de ejecucion

// 1. 