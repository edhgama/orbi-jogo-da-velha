
let jogador = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado')


function escolherQuadrado(id){
    
    const quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '.') 
        return
    
    quadrado.innerHTML = jogador;
    quadrado.style.backgroundColor = '#faa';

    if (jogador === 'X'){
        escolheJogador('O')
    } else {
        escolheJogador('X')
    }

}

function escolheJogador(valor){

    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;


}

function checaVencedor(){
    
}

escolheJogador('X');