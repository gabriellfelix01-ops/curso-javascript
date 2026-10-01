const produtos = [
    {id: 1, nome: "Iphone 7", preço: 1200.00, temDesconto: true, quantidade: 3},
    {id: 2, nome: "Iphone 8", preço: 1800.00, temDesconto: false, quantidade: 8},
    {id: 3, nome: "Iphone X", preço: 2000.00, temDesconto: true, quantidade: 12},
    {id: 4, nome: "Iphone XR", preço: 1900.00, temDesconto: false, quantidade: 4},
    {id: 5, nome: "Iphone 11", preço: 2200.00, temDesconto: true, quantidade: 10},
    {id: 6, nome: "Iphone 12", preço: 2500.00, temDesconto: false, quantidade: 6},
    {id: 7, nome: "Iphone 13", preço: 3000.00, temDesconto: true, quantidade: 14},
    {id: 8, nome: "Iphone 14", preço: 3700.00, temDesconto: false, quantidade: 17},
    {id: 9, nome: "Iphone 15", preço: 4900.00, temDesconto: false, quantidade: 22},
    {id: 10, nome: "Iphone 16", preço: 5700.00, temDesconto: true, quantidade: 26},
]

const produtosTotal = produtos.reduce((acumulador, produto) => {return acumulador + (produto.preço * produto.quantidade)},0)
// Formatar preço para R$XXXX.XX
// Quem tem desconto, vai receber 10% de desconto

const novosProdutos = produtos.map(indice => {
    let novopreco
    if (indice.temDesconto){
        novopreco = indice.preço * 0.9
    } else {
        novopreco = indice.preço
    }

    return { 
        id: indice.id,
        nome: indice.nome,
        preço: novopreco.toLocaleString("pt-br", {
            style: "currency", currency: 'BRL'
        }),
        quantidade: indice.quantidade
    }
})
console.log(novosProdutos)

// 
const numeros = [0,1,2,3,4]
const totnumeros = numeros.reduce((acumulador, atual) => {
    const total = acumulador + atual
    return total
})
console.log(numeros)
console.log(totnumeros)
console.log(
    produtosTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
);

const produtosgpt = [
    { nome: "iPhone", preco: 3000, quantidade: 2, ativo: true },
    { nome: "Samsung", preco: 2000, quantidade: 1, ativo: false },
    { nome: "Xiaomi", preco: 1500, quantidade: 3, ativo: true },
    { nome: "Motorola", preco: 1000, quantidade: 2, ativo: true }
];

const ativos = produtosgpt.filter((produtos) =>{
    return produtos.ativo == true
})

console.log(ativos)

const tempromoção = produtos.filter(produtos => {return produtos.temDesconto})
console.log(tempromoção)

