const users = [
    {name: "Gabriell", idade: 19, profissão: "Dev"},
    {name: "Adrielly", idade: 18, profissão: "Lash Designer"},
    {name: "Dalisson", idade: 39, profissão: "Barbeiro"},
    {name: "Josi", idade: 12, profissão: "Nail Designer"}
]

users.forEach(function(item, index, array){
    if (item.idade>=18){
        console.log(`${item.name} tem ${item.idade}, portanto é MAIOR de idade.`)
        
    }
    else{
        console.log(`${item.name} tem ${item.idade}, portanto é MENOR de idade.`)
    }
})