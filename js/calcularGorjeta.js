function calcularGorjeta(){

    var valorconta = document.getElementById("vconta").value;
    var taxa = document.getElementById("qservico").value;

    if(valorconta === "" || taxa == 0 || isNaN (valorconta)){

        alert("Digite um valor valido!");
        return;

    }
    
    var totalgorjeta = valorconta*taxa;
    var totalconta = parseFloat(valorconta)+parseFloat(totalgorjeta);

    totalconta = totalconta.toFixed(2);
    totalgorjeta = totalgorjeta.toFixed(2);

    document.getElementById("valorgorjeta").innerHTML = totalgorjeta;
    document.getElementById("valortotal").innerHTML = totalconta;
    console.log("botão clicado");
    
    console.log(valorconta);
    console.log(taxa);


}
