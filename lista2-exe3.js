chefe()
function chefe(){
    // não mais vamos declarar um várial usando VAR
    // a partir de hoje vamos declarar usando let
    let vetor = [] // esse vetor vai existir somente dentro da função chefe 
    do{
        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Calcular média \n [3]. Maior idade \n [4]. Quantidade \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor) // passando uma referencia na memoria do vetor 
            break
            case 2: calculaMedia(vetor)
            break
            case 3: calculaMaiorIdade(vetor)
            break
            case 4: calculaQtde(vetor)
            break
            case 5: calculaPercentual(vetor) 
            break
            case 6: console.log(`Obrigado por utilizar nosso software! \n Feito por João Bijos`)
            break
            default: console.log(`OPÇÃO INVÁLIDA`)
        }
    } while(opcao != 6)
}


function entrada(vet){
    console.log(`Entrou na função entrada`)
    // cria o objeto 
    let objeto = new Object()
    objeto.sexo = prompt(`Infomre o sexo: F/M`).toUpperCase // DEIXA MAIUSCULO
    objeto.altura = Number(prompt(`Infomre a altura: `))
    objeto.idade = Number(prompt(`Informe a idade: `))
    objeto.olhos = prompt(`Informe a cor dos olhos: A-(AZUL) \N V-(VERDE) \N C-(CASTANHO)`).toUpperCase 
    vet.push(objeto)
    console.log(`Habitante inserido com sucesso!`)
}

function calculaMedia(vet){
    console.log(`Entrou na função calcular média`)
    let soma = 0 // soma as idades
    let qtde = 0 // conta as pessoas que se encaixam no que é pedido 
    for(let i = 0; i < vet.length; i++){
        if((vet[i].olhos == `C`) && (vet[i].altura > 1.60)){
        soma = soma + vet[i].idade
        qtde ++
        }
    }
    console.log(`A média da idade é ${soma/qtde}`)
}

function calculaMaiorIdade(vet){
    console.log(`Entrou na função calcula maior idade`)
    let maiorIdade = vet[0].idade
    for(let i = 1; i < vet.length; i++){
        if(vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade // autaliza a maior idade
        }
    }
}

function calculaQtde(vet){
    console.log(`Entrou na função calcula quantidade`)
}

function calculaPercentual(vet){
    console.log(`Entrou na função calcula percentual`)
}



