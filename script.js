//bem vindo
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");//letra por span
anime.timeline({loop: true})//biblioteca, animação em loop
  .add({
    targets: '.ml10 .letter', //os alvos da animação, no caso o h1 e o span
    rotateY: [-90, 0], //gira as letras de -90 graus para 0 grau
    duration: 2000, //duração da animação em milissegundos
    delay: (el, i) => 100 * i //atraso para cada elemento
  });
  
//menu
function myFunction() {
  document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}