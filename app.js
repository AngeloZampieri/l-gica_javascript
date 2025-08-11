alert('Boas vindas ao jogo do número secreto');

let quantidadeNumero = 1000;
let numeroSecreto = parseInt(Math.random() * quantidadeNumero + 1);
let numeroDigitado;
let tentativas = 1;

while (numeroDigitado != numeroSecreto) {
    //console.log(numeroSecreto);
    numeroDigitado = prompt('Digite o numero que estou imaginando entre 0 e ' + quantidadeNumero);
    
    if (numeroDigitado == numeroSecreto) {
        break;
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert('Numero Digitado foi maior que o numero secreto');
        } else {
            alert('O numero digitado é menor do que o numero secreto');
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert('Parabéns, você acertou com ' + tentativas + ' ' + palavraTentativa + '. O numero secreto é: ' + numeroSecreto);