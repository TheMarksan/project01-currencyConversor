//let, var ou const
//funcao = input, process, output
//arrowFunction
//loops
//gerenciar eventos (click, mouseover, onclick e document/id/class.)
//gerenciar campos de digitacao (keyup)

/*function convFar(cel){
    let result = ((cel*9)/5)+32;
    return result;
}


let convCel = (far) => {
    let result = ((far-32)*5)/9;
    return result;
}

let lista = [10, 2, 3, 23, 4]
let sumT = 0;a

for(let item of lista){
    sumT += item;
}

console.log(sum);*/

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () =>{
    console.log(usdInput.value);
})

brlInput.addEventListener("keyup", () =>{
    alert("aqui é o dolar, coleguinha!")
})


