var troca = false;
var estado = false;
var numero = false;

function inserir(valor){
    visor_baixo.innerHTML+=valor;
    numero = true;
    troca = true
}

function aplicar(valor){
    if(numero == true){
    if(estado == false){
    visor_baixo.innerHTML+=valor;
    trocar();
   } else{
    visor_cima.innerHTML=visor_baixo.innerHTML+valor;
    visor_baixo.innerHTML="";
    estado = false;
   }
}
}

function plusMinus(){
    if(visor_baixo.textContent){
        visor_baixo.innerHTML=visor_baixo.innerHTML*-1;
    }

}

const percent = ()=>{
    if(visor_cima.textContent){
        const alterado = eval(visor_cima.innerHTML.slice(0, -1));
        visor_cima.innerHTML+=alterado*visor_baixo.innerHTML/100;
        console.log(alterado);
        visor_baixo.innerHTML ='';
    }
    
    
}

function trocar(){
    if(visor_baixo.textContent){
    visor_cima.innerHTML+=visor_baixo.innerHTML;
    }
    visor_baixo.innerHTML ='';
    troca = true;
}

function deletar(){
    if(visor_baixo.textContent){
        let resultado = document.getElementById('visor_baixo').innerHTML;
        visor_baixo.innerHTML= resultado.substring(0,resultado.length -1);
    } else {
        let resultado = document.getElementById('visor_cima').innerHTML;
        visor_cima.innerHTML= resultado.substring(0,resultado.length -1);
    }
}

function limpar(){
    if (visor_baixo.textContent){
    visor_baixo.innerHTML = '';
  }else{
    visor_cima.innerHTML = '';
  }
  troca = false
  estado = false
  numero = false

}

function igual(){
        if(troca===true){
        visor_cima.innerHTML+=visor_baixo.innerHTML;
        document.getElementById('visor_baixo').innerHTML = eval(visor_cima.innerHTML); 
        troca=false
        estado=true
     } else if (visor_cima.textContent){
        document.getElementById('visor_baixo').innerHTML = eval(visor_cima.innerHTML); 

     }
    }