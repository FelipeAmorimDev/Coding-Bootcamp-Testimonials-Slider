const Testemonials = document.getElementsByClassName("testimonial-content");
const botaoVoltar = document.getElementById("voltar");
const botaoAvancar = document.getElementById("avancar");
var testimonialAtual = 0

function avancar(){
if(testimonialAtual === Testemonials.length-1){
  Testemonials[testimonialAtual].style.display = "none"
  testimonialAtual = 0
  Testemonials[testimonialAtual].style.display = "grid"
}
else{
  Testemonials[testimonialAtual].style.display = "none"
  testimonialAtual++
  Testemonials[testimonialAtual].style.display = "grid"
}
}

function voltar(){
  if(testimonialAtual === 0){
    Testemonials[testimonialAtual].style.display = "none"
    testimonialAtual = Testemonials.length-1;
    Testemonials[testimonialAtual].style.display = "grid"
  }
  else{
    Testemonials[testimonialAtual].style.display = "none"
    testimonialAtual--;
    Testemonials[testimonialAtual].style.display = "grid"
  }
}
botaoAvancar.addEventListener("click",avancar)
botaoVoltar.addEventListener("click",voltar)
