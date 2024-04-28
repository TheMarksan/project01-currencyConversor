let dolar = 5.12;
let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () =>{
    convert("usd-to-brl");
})

brlInput.addEventListener("keyup", () =>{
    convert("brl-to-usd");
})

//formatar quando sair do campo de input (blur <-> onfocus)
usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value);
})

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value);
})

usdInput.value = "1000,00";
//brlInput.value = 1000.00*dolar;
convert("usd-to-brl");


function formatCurrency(value){
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false, //sem agrupar itens (sem pontos entre os numeros)
        minimumFractionDigits: 2, //no minimo duas casas decimais
    }
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value){
    let fixedValue = value.replace(",", "."); //trocando separador de decimal
    let floatValue = parseFloat(fixedValue); //string para float
    if(floatValue == NaN){ //valor dif. de number no input
        floatValue = 0;
    }
    return floatValue;
}

function convert(type){
    if(type == "usd-to-brl"){
        let fixedValue = fixValue(usdInput.value);
        let result = fixedValue*dolar;
        result = result.toFixed(2); //no maximo duas casas decimais

        brlInput.value = formatCurrency(result);
    }else if(type == "brl-to-usd"){
        let fixedValue = fixValue(brlInput.value);
        let result = fixedValue/dolar;
        result = result.toFixed(2);

        usdInput.value = formatCurrency(result);
    }
}


