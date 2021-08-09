var agregarElementos = false;
var borrarElementos = false;
var eh = cy.edgehandles();
eh.disable();


$("#agregarElementos").click(function() {
  if (agregarElementos) {
    agregarElementos = false;
    $("#agregarElementos i").removeClass("activo");
    eh.disableDrawMode();
    eh.disable();
  } else {
    agregarElementos = true;
    $("#agregarElementos i").addClass("activo");
    eh.enable();
    eh.enableDrawMode();
    borrarElementos = false;
    $("#borrarElementos i").removeClass("activo");
  }
});

tippy("#agregarElementos", {
  content: "Agregar elementos",
});


$("#borrarElementos").click(function() {
  if (borrarElementos) {
    borrarElementos = false;
    $("#borrarElementos i").removeClass("activo");
  } else {
    borrarElementos = true;
    $("#borrarElementos i").addClass("activo");
    agregarElementos = false;
    $("#agregarElementos i").removeClass("activo");
    eh.disableDrawMode();
    eh.disable();
  }
});

tippy("#borrarElementos", {
  content: "Borrar elementos",
});


$("#mostrarTexto").click(function() {
  $("#texto").slideToggle();
  if ($("#mostrarTexto i").hasClass("activo")) {
    $("#mostrarTexto i").removeClass("activo");
  } else {
    $("#mostrarTexto i").addClass("activo");
  }
});

tippy("#mostrarTexto", {
  content: "Mostrar el texto redactado",
});