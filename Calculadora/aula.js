function insert(num){

      let texto= document.querySelector("#resultado").textContent
        texto.textContent= num
        document.querySelector('#resultado').textContent= texto + num
    
    
      

}

function clean(){
    document.querySelector('#resultado').textContent= ''
}

function apagar(){
    var resultado= document.querySelector('#resultado').textContent
    document.querySelector('#resultado').textContent= resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado= document.querySelector('#resultado').textContent
    if(resultado){
        document.querySelector('#resultado').textContent= eval(resultado)
    }
}