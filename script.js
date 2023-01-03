const listaDeTeclas = document.querySelectorAll('.buttons_item');
const input = document.querySelector('.exib_calc') ;
for( let c = 0; c < listaDeTeclas.length; c++){
    const teclas = listaDeTeclas[c];
    teclas.onclick = function exibir(){
        input.value += teclas.value
    }
}
const listaDeOperadores = document.querySelectorAll('.operacao');
for( let o = 0 ; o < listaDeOperadores.length; o++){
    const operadores = listaDeOperadores[o]; 
    // 0 = divisão; 1 = multiplicacao ; 2 = menos ; 3 = adicao;
}
const limpar = document.getElementById('c').onclick = function limpar(){
    return input.value = '' 
}
const igual =  document.querySelector('.especial').onclick = function igual() {
    let conteudo = input.value
    if(conteudo)
    {
        input.value = eval(conteudo)
        console.log(eval(conteudo))
    }
}
let valorSalario = document.querySelector('.calculo_dizimo_input');
const mensagemdizimo = document.querySelector('.mensagem-dizimo');
const calcular = document.querySelector('.calcular').onclick = () => {
    const calculo = (valorSalario.value * 10/100) 
    return mensagemdizimo.innerHTML= `Seu dízimo é: R$ ${calculo}`
}
