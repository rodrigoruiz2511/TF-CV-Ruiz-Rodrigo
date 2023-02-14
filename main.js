/*BOTONES*/
/*Le da funcionalidades de que sucede a los textos de lso botones cuando se pasa por el icono*/
/*Botón Descripción*/
document
  .getElementById("btn-descrip")
  .addEventListener("mousemove", function aparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-descrip").style.letterSpacing = "4px";
      document.getElementById("btn-text-descrip").style.fontStyle = "italic";
    }, 200);
  });
document
  .getElementById("btn-descrip")
  .addEventListener("mouseleave", function desaparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-descrip").style.letterSpacing = "0px";
      document.getElementById("btn-text-descrip").style.fontStyle = "normal";
    }, 200);
  });
/*Botón Datos*/
document
  .getElementById("btn-datos")
  .addEventListener("mousemove", function aparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-datos").style.letterSpacing = "2px";
      document.getElementById("btn-text-datos").style.fontStyle = "italic";
    }, 200);
  });
document
  .getElementById("btn-datos")
  .addEventListener("mouseleave", function desaparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-datos").style.letterSpacing = "0px";
      document.getElementById("btn-text-datos").style.fontStyle = "normal";
    }, 200);
  });
/*Botón Certificados*/
document
  .getElementById("btn-titulos")
  .addEventListener("mousemove", function aparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-titulos").style.letterSpacing = "4px";
      document.getElementById("btn-text-titulos").style.fontStyle = "italic";
    }, 200);
  });
document
  .getElementById("btn-titulos")
  .addEventListener("mouseleave", function desaparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-titulos").style.letterSpacing = "0px";
      document.getElementById("btn-text-titulos").style.fontStyle = "normal";
    }, 200);
  });
/*Botón Certificados*/
document
  .getElementById("btn-trabajos")
  .addEventListener("mousemove", function aparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-trabajos").style.letterSpacing = "2px";
      document.getElementById("btn-text-trabajos").style.fontStyle = "italic";
    }, 200);
  });
document
  .getElementById("btn-trabajos")
  .addEventListener("mouseleave", function desaparecer() {
    setTimeout(() => {
      document.getElementById("btn-text-trabajos").style.letterSpacing = "0px";
      document.getElementById("btn-text-trabajos").style.fontStyle = "normal";
    }, 200);
  });

/*Cuadros*/
/*Funones que se le da a lso cuadros de contenido par que aparezca sòlo el qeu esta seleccionado*/
/*Cuadro Descripción*/
document.getElementById("btn-descrip").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("descripción").style.display = "flex";
  }, 200);
  const listCuadro = document.getElementsByClassName("cuadro");
  for (const i of listCuadro) {
    if (i.getElementsById != "descripcion") {
      i.style.display = "none";
    }
  }
});

/*Cuadro Datos Personales*/
document.getElementById("btn-datos").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("datPerson").style.display = "flex";
  }, 200);
  const listCuadro = document.getElementsByClassName("cuadro");
  for (const i of listCuadro) {
    if (i.getElementsById != "datPerson") {
      i.style.display = "none";
    }
  }
});
/*Cuadro Certificados*/
document.getElementById("btn-titulos").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("titulos").style.display = "flex";
  }, 200);
  const listCuadro = document.getElementsByClassName("cuadro");
  for (const i of listCuadro) {
    if (i.getElementsById != "titulos") {
      i.style.display = "none";
    }
  }
});
/*Cuadro Trabajos*/
document.getElementById("btn-trabajos").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("trabajos").style.display = "flex";
  }, 200);
  const listCuadro = document.getElementsByClassName("cuadro");
  for (const i of listCuadro) {
    if (i.getElementsById != "trabajos") {
      i.style.display = "none";
    }
  }
});

/*Para que desaparezcan los cuadros cuando se hace chlik en cualquier parte*/
document.addEventListener("click", function () {
  const listCuadro = document.getElementsByClassName("cuadro");
  for (const i of listCuadro) {
    i.style.display = "none";
  }
});
