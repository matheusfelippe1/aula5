const numero = parseInt(window.prompt("Digite um número"));
//pegar o valor que o usuario digita;

for (let i = 0; i <= 10; i++) {
  document.write(`${numero} x ${i} = ${numero * i} <br>`);
}
//for percorre os indices e retorna para o browser o valor * indice;