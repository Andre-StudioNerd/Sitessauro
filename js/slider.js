/*
    Pega todos os elementos li da lista não ordenada
    retornando um objeto NodeList
*/
var sliders = document.querySelectorAll("#sliders li");

// Só executa o código se realmente encontrar os elementos na página
if (sliders.length > 0) {
  var current = 0;
  var total = sliders.length - 1;

  window.setInterval(function () {
    var index = current ? current - 1 : total;

    // Garante que os elementos existem antes de mexer nas classes
    if (sliders[index] && sliders[current]) {
      sliders[index].className = "";
      sliders[current].className = "slider-active";
    }

    current = current >= total ? 0 : current + 1;
  }, 2000);
}
