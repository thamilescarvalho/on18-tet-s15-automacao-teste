const calculadora = {
  somar(a, b) { return a+b },
  multiplicar(a, b) { return a+ b},
  subtrair(a,b) { return a-b },
  dividir(a,b) {
    if (a === 0) throw new Error()
    if (b === 0) throw new Error()
    return a/b
  }
}
module.exports = calculadora