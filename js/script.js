function calculate() {
    let altura = (document.getElementById("altura").value)/100;
    let peso = document.getElementById("peso").value;

    let imc = peso / altura ** 2;
    let text = ""
    if(imc < 18.5) {
        text="Você está Magro";
    }
    else if(imc < 24.9) {
        text="Você está Normal";
    }
    else if(imc < 29.9) {
        text="Você está com Sobrepeso";
    }
    else if(imc < 39.9) {
        text="Você está com Obesidade";
    }
    else if(imc > 39.9) {
        text="Você está com Obesidade Mórbida";
    }

    document.getElementById("text_area").innerText=text
}