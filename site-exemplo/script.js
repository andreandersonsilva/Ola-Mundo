/*Manipulando o resultado dos botões do CONFIRM*/ 

let result = confirm("Olá Mundo!")
while(result == false){
    result = confirm("Clique em OK!")
}if (result == true){
    result=alert("Bem Vindo")
}

//prompt("Ola Mundo", "Olá")

function numeroAleatorio(a,b){

    let ntotal = b-a+1;
    let resultado = Math.floor(Math.random()*ntotal + a);
    
    res.innerHTML = resultado    

    //alert('Número gerado: ' + resultado);


}