function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
};

function limpar() {
    document.getElementById('resultado').innerHTML = '';
};

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval (resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Vazio..."
    }

}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// function soma(n1,n2) {
//     var resultado = n1 + n2;
//     document.getElementById('resultado').innerHTML = resultado;
// }

// function subtracao(n1,n2) {
//     var resultado = n1 - n2;
//     document.getElementById('resultado').innerHTML = resultado;
// }

// function divisao(n1,n2) {
//     var resultado = n1 / n2;
//     document.getElementById('resultado').innerHTML = resultado;
// }

// function multiplicacao(n1,n2) {
//     var resultado = n1 * n2;
//     document.getElementById('resultado').innerHTML = resultado;
// }
