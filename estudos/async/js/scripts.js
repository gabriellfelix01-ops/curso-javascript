console.log("Hello World")
setTimeout(function(){
    console.log("Teste de setTimeout")
}, 2000)
console.log("Hello World 2")

// console.log("Imprimindo primeiro texto")
//     setInterval(function(){
//         console.log("Intervalo Assíncrono")
//     }, 2000)

console.log("Imprimindo segundo texto")

const nome = 8;
try{
    console.log(nome)
}
catch{
    console.log("Nome não encontrado")
}

function carregarDados(){
    return new Promise((resolve, reject) => {
        console.log("Estamos carregando os dados...")

        setTimeout(() => {
            const deucerto = false;
            if(deucerto){
                resolve("Dados processados")
            }else{
                reject("Deu erro no carregamento")
            }
        }, 3000)
    })
}
carregarDados().then((resposta) => console.log(resposta)).catch((resposta) => console.log(resposta))


fetch()