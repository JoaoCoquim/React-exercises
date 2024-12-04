const numeros = [-5, 0, 100, 4, 40, 200, 100]

// quero todos os numeros a partir do quarto numero
const novosNumeros = numeros.filter(('numero', index) => index >= 3)


const hello = numeros.map(a => a * 2).filter(a => a > 3 )
console.log(hello)