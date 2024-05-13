function armazenarValor(){


    
    var userInput=document.getElementById("userInput").value;//armazena o valor q o usuario digitou

    console.log("o valor da variavel e: "+userInput);//exibe o valor armazenado
    
    document.getElementById("valorInserido").innerText= "valor inserido: "+userInput;
}