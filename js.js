// link https://www.youtube.com/watch?v=sxcrrD6XsT4&t=88s  

var elementos = document.querySelectorAll('.segment-text.style-scope.ytd-transcript-segment-renderer');

for (var i = 0; i < elementos.length; i++) {
  var elemento = elementos[i];
  var texto = elemento.textContent;
  console.log(texto);
}

//  al parecer funciona pero se debe abrir el trnscriptot para que existan los elementos de clase segment-text.style-scope.ytd-transcript-segment-renderer

