// 1. Crea un array de nombres y muestra el tercer nombre en la consola.
let nombres = ["Jesus", "Sarai", "Fernanda", "Patricio"];
console.log(nombres[2]); 

// 2. Añade un nombre al inicio y otro al final del array de nombres.
nombres.unshift("Sofia"); //añade inicio
nombres.push("Karla");    //anñade al final
console.log(nombres);

// 3. Crea un array de números e imprime solo los números impares.
let numeros = [14, 15, 55, 1, 15, 85, 28, 13, 33, 85];
let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares); 

// 4. Combina dos arrays de frutas y elimina las frutas duplicadas.
let frutas1 = ["manzana", "fresa", "sandia", "platano", "mora"];
let frutas2 = ["mandarina", "cereza", "piña", "naranja", "tejocote"];
let frutasCombinadas = [...new Set([...frutas1, ...frutas2])];
console.log(frutasCombinadas); 

// 5. Ordena un array de números de mayor a menor.
let nums = [14, 12, 10, 9, 8, 29, 11, 25, 54, 66];
nums.sort((a, b) => b - a);
console.log(nums); 

// 6. Usa map para duplicar los valores en un array de números.
let dobles = numeros.map(num => num * 2);
console.log(dobles); 

// 7. Crea un array de edades y usa filter para encontrar las mayores de 18.
let edades = [19, 26, 32, 45, 85, 23];
let mayoresDe18 = edades.filter(edad => edad > 18);
console.log(mayoresDe18); 

// 8. Usa reduce para encontrar el total de puntos en un array de puntajes.
let puntajes = [23, 12, 28, 29];
let totalPuntos = puntajes.reduce((total, puntos) => total + puntos, 0);
console.log(totalPuntos); 

// 9. Remueve el primer y último elemento de un array de colores.
let colores = ["azul", "negro", "amarillo", "morado"];
colores.shift(); 
colores.pop();
console.log(colores); 

// 10. Verifica si el array de números contiene el número 10.
let contiene10 = numeros.includes(10);
console.log(contiene10);