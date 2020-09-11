function principal(){

    mensagem1()
    mensagem2()

}

function mensagem1(){ 

    console.log("ATENÇÃO") 

}

function mensagem2(){

    console.log("ATENÇÃO É NECESSÁRIA PARA SE OBTER O SUCESSO")

}




function principal(){
    mensagemDia("Pedro")
    mensagemNoite("Carlos")
}

function mensagemDia(nome){
    console.log(`Muito bom dia ${nome}`)
}

function mensagemNoite(nome){
    console.log(`Muito boa noite ${nome}`)
}



function principal(){
    var nro = Number(prompt("Informe um número: "))
    parImpar(nro)
}

function parImpar(numero){

    if(numero % 2 == 0){
        console.log(`Par`)
    } else{
        console.log(`Impar`)
    }
}


function principal(){
    var nro1 = Number(prompt("Informe um número: "))
    var nro2 = Number(prompt("Informe outro número: "))
    soma(nro1, nro2)
}

function soma(numero1, numero2){
    console.log(`Soma dos números: ${numero1 + numero2}`)
}




function principal(){
    var nro1 = Number(prompt("Informe um número: "))
    var nro2 = Number(prompt("Informe outro número: "))

    var resultado = soma(nro1, nro2)

    console.log(resultado)
}

function soma(numero1, numero2){
    return numero1 + numero2
}


// fazer uma função que receba dois número e verifique se um número é divisível pelo outro
function principal(){
    var nro1 = Number(prompt("Informe um número: "))
    var nro2 = Number(prompt("Informe outro número: "))

    var resultado = numeros(nro1, nro2)
    console.log(resultado)
}

function numeros(numero1, numero2){

    if(numero1 % numero2 == 0){
          return `Divisivel`
    } else {
        return `Não divisivel`
    }
}



































