$(document).ready(function() {
      $("form").keypress(function(e) {
          if (e.which == 13) {
              return false;
          }
      });
  });

onkeydown = e => {
  let tecla = e.which || e.keyCode;
  
  // Evaluar si se ha presionado la tecla Ctrl:
  if ( e.ctrlKey ) {
    // Evitar el comportamiento por defecto del nevagador:
    e.preventDefault();
    e.stopPropagation();
    
    // Mostrar el resultado de la combinación de las teclas:
    if ( tecla === 85 )
      console.log("Ha presionado las teclas Ctrl + U");
    
    if ( tecla === 83 )
      console.log("Ha presionado las teclas Ctrl + S");
  }
}
document.onkeypress = function(event) {

    event = (event || window.event);
  
    if (event.keyCode == 123) {
  
      return false;
  
    }
  
    if (event.which == 123) {
  
      return false;
  
    }
  
  }
  
  document.onmousedown = function(event) {
  
    event = (event || window.event);
  
    if (event.keyCode == 123) {
  
      return false;
  
    }
  
    if (event.which == 123) {
  
      return false;
  
    }
  
  }
  
  document.onkeydown = function(event) {
  
    event = (event || window.event);
  
    if (event.keyCode == 123) {
  
      return false;
  
    }
  
    if (event.which == 123) {
  
      return false;
  
    }
  
  }