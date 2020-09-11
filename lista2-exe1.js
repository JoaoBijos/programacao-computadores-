chefe()

function chefe(){
    let vendedores = []
    let vendas = []
    let opcao = []
    do{
        let opcao = Number(prompt(`Cadastros: \n [1]. Cadastra Vendedor \n [2]. Cadastra Venda \n [3]. Venda por mês do vendedor \n [4]. Somas da venda de um vendedor \n [5]. Vendedor que mais vendeu em certo mês \n [6].Mês com mais vendas \n [7]. Sair`))
        switch(opcao){
             case 1 : cadastraVendedores(vendedores) // passagem por referência e torna o vetor de escopo global 
                break
            case 2 : cadastraVenda(vendas, vendedores)
                break
            case 3 : consultaVendasFuncionarioMes(vendas)
                break
            case 4 : consultaVendasFuncionario(vendas)
                break 
            case 5 : consultaVendedorMes(vendas)
                break
            case 6 : consultaMes(vendas)
                break
            case 7 : console.log(`FINALIZANDO`) 
            default: console.log(`Feito por João Bijos`)
        }
    } while(opcao != 7)
}

function cadastraVendedores(vended){ // vended representa o vetor vendedores 
    let vendedor = new Object()
    vendedor.codigo = Number(prompt(`Informe o código: `))
    vendedor.nome =  prompt(`Informe o nome do vendedor: `)
    //verificar se o código já existe
    for(let i = 0; i < vended.length; i ++){
        if(vended[i].codigo == vendedor.codigo){
            console.log(`Cadastro negado, pois o código já está sendo usado!`)
            return 0 // sai da função porque não precisa cadastrar por já existir o código 
        }
    }
    vended.push(vendedor)
}

function cadastraVenda(vdas, vdes){ // vdas representa vendas e vdes representa vendedores 
    let vendas = new Object()
    vendas.codigo = Number(prompt(`Informe o código da venda: `))
    vendas.vendedor - Number(prompt(`Informe o código do vendedor: `))
    vendas.mes = Number(prompt(`Informe o mês da venda: `))
    vendas.valor = Number(prompt(`Informe o valor da venda: `))
    // verificar se o vendedor existe
    for(let i = 0; i < vdes.length; i++){
        if(vdes[i].codigo == vendas.vendedor){ // acha o vendedor
            // verifica se existe venda para este vendedor no mes digitado, se existir não podemos registrar a venda 
            for(let j = 0; j < vdas.length; j++){
                if((vendas.mes == vdas[i].mes) && (vendas.vendedor == vdes[i].vendedor)){
                    console.log(`Não podemos registrar a venda \n pois o vendedor já tem uma venda no mês digitado`)
                    return 0 // sai da função
                }
            }
            // verificou e não existe um venda para o vendedor no mês desejado
            vdas.push(vendas)
            console.log(`Venda registrada`)
            return 0 // sai da função
        }
        console.log(`Vendedor não existe`)
    }

    function consultaVendasFuncionarioMes(vdas){
        let vendedor = Number(prompt(`Informe o código do vendedor: `))
        let mes = Number(prompt(`Informe o mês da venda: `))
        for(let i = 0; i < vdas.length; i ++){
            if((vdas[i].vendedor == vendedor) && (vdas[i].mes.getMonth() == mes)){ // encontra a venda do vendedor naquele mês
                console.log(`Valor da venda ${vdas[i].valor}`)
                return 0 // sai da função
            }
        }
        console.log(`O vendedor não fez nenhuma venda neste mês!`)
    }

    function consultaVendasFuncionario(vdas){
        let vendedor = Number(prompt(`Informe o código do vendedor: `))
        let soma = 0
        for(let i = 0; i < vdas.length; i ++){
            if(vdas[i].vendedor == vendedor){ 
               soma = soma + vdas[i].valor
            }
        }
        console.log(`A soma das vendas é ${soma}`)
    }

    function consultaVendedorMes(vdas){
        let mes = Number(prompt(`Informe o mês: `))
        let maisVendeu = 0
        let maiorVenda = 0 
        for(let i = 0; i < vdas.length; i++){
            if(vdas[i].mes == mes){
                if(vdas[i].valor > maiorVenda){
                    maiorVenda = vdas[i].valor
                    maisVendeu = vdas[i].vendedor
                }
            }
        }
        console.log(`Vendedor com mais vendas ${maisVendeu}, ele vendeu R$${maiorVenda} !`)
    }

    function consultaMes(vdas){
        // preenche o vetor
        let meses = [0,0,0,0,0,0,0,0,0,0,0,0] 
        for(let i = 0; i < vdas.length; i++){
            let posicao = vdas[i].mes -1 // descubro a posição para colocar
            meses[posicao] = meses[posicao] + vdas[i].valor // acumula o valor 
        }
        // encontra o maior valor vendido
        let maiorValor = meses[0]
        for(let i = 0; i < meses.length; i++){
            if(meses[i] > maiorValor){
                maiorValor = meses[i]
            }
        }
        // encontrar a posição do maior valor vendido
        let posicao = meses.indexOf(maiorValor)
        console.log(`Mês mais lucrativo : ${posicao+1}`)
    }
}