
var texto =document.getElementById("textoInput").value.toLowerCase(); 

function criptografar() {
   document.getElementById("texto2").removeAttribute("disabled");
   document.getElementById("texto2").setAttribute("placeholder","Nenhuma Mensagem");
  
   
    let texto = document.getElementById("textoInput").value.toLowerCase(); 
    if(texto ==0){
        alert("nenhum texto foi digitado");
        return 0;
    }
    let textoCriptografado = [];
    textoCriptografado = texto.replace(/e/g,"enter");
    textoCriptografado = textoCriptografado.replace(/o/g,"ober");
    textoCriptografado = textoCriptografado.replace(/i/g,"imes");
    textoCriptografado = textoCriptografado.replace(/a/g,"ai");
    textoCriptografado = textoCriptografado.replace(/u/g,"ufat");
    
    document.getElementById("imgDireita").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("texto2").value = textoCriptografado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("texto2").style.display = "show";
    document.getElementById("texto2").style.backgroundColor ="#ffffff";
    let elemento = document.getElementById("texto2");
    elemento.style.display=" inherit";
    let back = document.getElementById("idDireita");
    back.style.background = "#ffffff";
    
    limpar();

    
}

function descriptografar() {
    
    let texto2 = document.getElementById("textoInput").value.toLowerCase(); 
    if(texto2 ==0){
        alert("nenhum texto foi digitado");
        return 0;
    }
    
    let textoDescriptografado = [];
    textoDescriptografado = texto2.replace(/enter/g,"e");
    textoDescriptografado = textoDescriptografado.replace(/ober/g,"o");
    textoDescriptografado = textoDescriptografado.replace(/imes/g,"i");
    textoDescriptografado = textoDescriptografado.replace(/ai/g,"a");
    textoDescriptografado = textoDescriptografado.replace(/ufat/g,"u");
    
    document.getElementById("imgDireita").style.display = "show";
    document.getElementById("texto2").value = textoDescriptografado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("texto2").style.display = "show";
    document.getElementById("img2").style.display = "none";
    document.getElementById("texto2").style.backgroundColor ="#ffffff";
    let elemento = document.getElementById("texto2");
    elemento = document.getElementById("texto2");
    elemento.style.display=" inherit";
    let back = document.getElementById("idDireita");
    back.style.background = "#ffffff";
    limpar();
    
}

function copiar(){
   let copiado = document.getElementById("texto2");
   copiado.select();
   copiado.setSelectionRange(0,99999)
   document.execCommand("copy");
   
   limparTextoArea()
   
}
function limpar(){
    texto = document.querySelector("#textoInput");
    texto.value="";
}
function limparTextoArea(){
    texto = document.querySelector("#texto2");
    texto.value="";
}