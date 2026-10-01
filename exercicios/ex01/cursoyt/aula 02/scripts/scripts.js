document.getElementById("paragrafo1").innerHTML="Meu primeiro getElementById innerHTML";

// alert("Oi, isso é um alerta.")
console.log("Oi, esse é o meu console.log")

// 

// let nome = "Gabriell"

// if (nome){
//     console.log(`Meu nome é: ${nome}`)
// } else{
//     console.log("Nome não encontrado")
// }
// 
// let nome2 = undefined

// if (nome){
//     console.log(`Meu nome é: ${nome2}`)
// } else{
//     console.log("Nome não encontrado")
// }

// 

// const testeTxt = "hello world"
// const testeNumber = 10

// const newTxt = Number(testeTxt)
// console.log(newTxt, typeof newTxt)

// const newNumber = String(testeNumber)
// console.log(newNumber, typeof newNumber)

// const idade = Number(prompt("Idade: "))
// if (idade>=18){
//     console.log("maior de idade")
// } else{
//     console.log("menor de idade")
// }
// 

// let total = 0
// let lista = []
// let i = Number(prompt("Digite o valor: [999 para parar]"))

// while (i != 999){
//     total += i
//     lista.push(i)
//     i = Number(prompt("Digite o valor: [999 para parar]"))
//     console.log("999 para parar")
// }
// console.log(total)
// console.log(lista)

for(let i = 1; i < 4; i++){
    var nome = "gabriell"
    console.log(i)
}
console.log(nome)


let teste = 2007
const testeStr = String(teste)
console.log(teste, typeof teste)
console.log(testeStr, typeof testeStr)
console.log("igual a 50")

const pagamento = "nulo"

switch(pagamento){
    case "pago":
        console.log("Pagamento realizado")
        break
    case "pendente":
        console.log("Pagamento pendente")
        break
    default:
        console.log("Não indentificado...")
}

function somar (a, b){
    console.log(a + b)
}
somar(2, 4)

function maior (a, b){
    var maiorNum = 0
    if (a > b){maiorNum = a}
    else {maiorNum = b}
    console.log(maiorNum)
}
maior(4,8)

function parOuImpar (num){
    if (num % 2 == 0){
        console.log("par")
    } else {
        console.log("impar")
    }
}
parOuImpar(1)

function situação (a, b, c){
    var media = (a + b + c)/3 
    if (media>=7){
        console.log("aprovado")
    }
    else if (media > 3 && media < 7){
        console.log("recuperação")
    }
    else{
        console.log("reprovado")
    }
    console.log(media.toFixed(1))
}
situação(1,1,10)


 


