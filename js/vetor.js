window.onload = function(){
    
    adicionaConteudo()
}
let contador = 0;
let vetor = []

function adicionaConteudo(){
    let clike = document.querySelector(".clicke")
    let produto = document.querySelector(".produtos")
    let dados = document.querySelector(".vetor")

   clike.onclick = function(){
        if(produto.value){
        vetor[contador] = produto.value
        
        dados.innerHTML += vetor[contador] + "\n"
        contador++
        produto.value = ""
        console.log(vetor)
        }
        
   }
    
}