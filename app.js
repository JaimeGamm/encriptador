function encrypt(text) {
  const rules = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
  return text.replace(/[eioua]/g, (match) => rules[match]);
}

function decrypt(text) {
  const rules = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };
  return text.replace(/enter|imes|ai|ober|ufat/g, (match) => rules[match]);
}

document.getElementById("encrypt").addEventListener("click", function () {
  const inputText = document.getElementById("input-text").value.toLowerCase();
  if (inputText.trim() === "") {
    alert("Tienes que ingresar un texto para ser encriptado.");
  } else {
    const encryptedText = encrypt(inputText);
    displayOutput(encryptedText);
  }
});

document.getElementById("decrypt").addEventListener("click", function () {
  const inputText = document.getElementById("input-text").value;
  const decryptedText = decrypt(inputText);
  displayOutput(decryptedText);
});

function displayOutput(message) {
  const image = document.getElementById("img-output");
  image.style.display = "none";
  const spanOutput = document.getElementById("span-output");
  spanOutput.style.display = "none";

  const inputElement = document.getElementById("input-text");
  inputElement.value = "";

  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;

  const buttonCopia = document.getElementById("button-copia");
  buttonCopia.style.display = "inline-block";
}

function copyToClipboard() {
  const outputMessageElement = document.getElementById("output-message");
  const outputMessage = outputMessageElement.textContent;

  navigator.clipboard.writeText(outputMessage).then(
    function () {
      // Añadir la clase highlight
      outputMessageElement.classList.add("highlight");

      // Eliminar la clase highlight después de 1 segundo (1000 ms)
      setTimeout(function () {
        outputMessageElement.classList.remove("highlight");
      }, 10000);
    },
    function (err) {
      console.error("Error al copiar el texto: ", err);
    }
  );
}

document
  .getElementById("button-copia")
  .addEventListener("click", copyToClipboard);
