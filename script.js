function insert(num){
    let numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('visor').innerHTML = ""
}

function del(){
    let deletar = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = deletar.substring(0, deletar.length -1)
}

function calcular(){
    let resultado = document.getElementById('visor').innerHTML;
    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado)

    }else{

        document.getElementById('visor').innerHTML = ""
    }
}