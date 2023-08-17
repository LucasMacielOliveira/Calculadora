//INSERIR DADOS 
function insert  (number){  
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero + number;
}

//Excluir TODOS OS DADOS
clean = () => document.getElementById('resultado').innerHTML = "";


//EXCLUIR UM POR UM

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//CALCULANDO...

function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = 'insira dados!'
    }
}

//FIM :)