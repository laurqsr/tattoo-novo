//bem vindo
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 2000,
    delay: (el, i) => 100 * i
  });
  

  function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }