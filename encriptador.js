document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.getElementById("textBox");
  const btnEncriptr = document.querySelector(".encriptar");
  const btnDesencriptr = document.querySelector(".desencriptar");
  const textResultado = document.querySelector(".textoResultado");
  const btnCopy = document.getElementById("btnCopy");
  const container = document.getElementById("container");
  const imgNotext = document.querySelector(".imgNotext");
  const paragraph = document.querySelector(".paragraph");

  console.log("hola");

  const encriptarTexto = (mensaje) => {
    let texto = mensaje.toLowerCase();
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
        textoFinal += "ai";
      } else if (texto[i] == "e") {
        textoFinal += "enter";
      } else if (texto[i] == "i") {
        textoFinal += "imes";
      } else if (texto[i] == "o") {
        textoFinal += "ober";
      } else if (texto[i] == "u") {
        textoFinal += "ufat";
      } else {
        textoFinal += texto[i];
      }
    }
    return textoFinal;
  };

  const desencriptarTexto = (mensaje) => {
    let texto = mensaje.toLowerCase();
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
        textoFinal += "a";
        i += 1;
      } else if (texto[i] == "e") {
        textoFinal += "e";
        i += 4;
      } else if (texto[i] == "i") {
        textoFinal += "i";
        i += 3;
      } else if (texto[i] == "o") {
        textoFinal += "o";
        i += 3;
      } else if (texto[i] == "u") {
        textoFinal += "u";
        i += 3;
      } else {
        textoFinal += texto[i];
      }
    }
    return textoFinal;
  };

  const copiar = () => {
    let contenido = textResultado.textContent;
    navigator.clipboard
      .writeText(contenido)
      .then(() => {
        alert("Copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  btnEncriptr.addEventListener("click", () => {
    let texto = textBox.value;
    if (texto.trim() !== "") {
      textResultado.textContent = encriptarTexto(texto);
      container.style.display = "block";
      imgNotext.style.display = "none";
      paragraph.style.display = "none";
    }
  });

  btnDesencriptr.addEventListener("click", () => {
    let texto = textBox.value;
    if (texto.trim() !== "") {
      textResultado.textContent = desencriptarTexto(texto);
      container.style.display = "block";
      imgNotext.style.display = "none";
      paragraph.style.display = "none";
    }
  });

  btnCopy.addEventListener("click", copiar);
});
