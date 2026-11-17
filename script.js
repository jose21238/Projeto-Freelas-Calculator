// 1. Função principal que faz o cálculo
function calcular() {
  // Pegamos os valores que o usuário digitou nos inputs usando os IDs
  let salario = Number(document.getElementById("salario").value);
  let horasDia = Number(document.getElementById("horasDia").value);
  let diasSemana = Number(document.getElementById("diasSemana").value);
  let custos = Number(document.getElementById("custos").value);

  // 2. Calculamos quantas horas são trabalhadas no mês (considerando 4 semanas)
  let horasMes = horasDia * diasSemana * 4;

  // 3. Calculamos o valor da hora (somando o salário desejado + os custos)
  let valorHora = (salario + custos) / horasMes;

  // 4. Calculamos um projeto de exemplo que leva 20 horas
  let valorProjeto = valorHora * 20;

  // 5. Mostramos o resultado na tela substituindo o texto do HTML
  document.getElementById("resultado-hora").innerText =
    "R$ " + valorHora.toFixed(2) + " /hora";
  document.getElementById("resultado-projeto").innerText =
    "R$ " + valorProjeto.toFixed(2);
}

// 6. Vinculamos a função ao botão de calcular
let botao = document.getElementById("btn-calcular");
botao.addEventListener("click", calcular);
