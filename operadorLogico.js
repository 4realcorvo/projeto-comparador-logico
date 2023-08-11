function operacaoLogica(){
  //Entrada
  const valor1 = Number(document.getElementById('valor1').value)
  const valor2 = Number(document.getElementById('valor2').value)

  //Processamento
  const operadorLogico = document.getElementById('operadoresLogicos').value

  let operacao;

  switch(operadorLogico){
    case 'maior':
      operacao = valor1 > valor2
    break;
    case 'menor':
      operacao = valor1 < valor2
    break;
    case 'maiorigual':
      operacao = valor1 >= valor2
    break;
    case 'menorigual':
      operacao = valor1 <= valor2
    break;
    case 'igual':
      operacao = valor1 == valor2
    break;
    case 'diferente':
      operacao = valor1 != valor2
    break;

    default:
      false
      break;
  }

  //Saída
  document.getElementById('resultado').value = operacao
}