import emailjs from "@emailjs/browser";
import * as bootstrap from "bootstrap";
import tadaWav from "../src/tada.wav";
import criticalStopWav from "../src/Windows Critical Stop.wav";

export const submitEmail = () => {
  emailjs.init("--7_HFP2uQbIg0B-K");

  const succesSound = new Audio(tadaWav);
  const failSound = new Audio(criticalStopWav);

  let form = document.getElementById("contact-form");
  let submitBtn = document.getElementById("submit-button");
  //se iteran toast's
  const liveToastSuccess = document.getElementById("liveToastSuccess");
  const liveToastFail = document.getElementById("liveToastFail");
  //se inicializa un nuevo Toast
  const toastSuccess = new bootstrap.Toast(liveToastSuccess);
  const toastFail = new bootstrap.Toast(liveToastFail);

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitBtn.textContent = " Enviando...";
      submitBtn.disabled = true;

      emailjs
        .sendForm("service_69cez0u", "template_guqq14j", form)
        .then(() => {
          succesSound.play();
          toastSuccess.show();

          submitBtn.textContent = "Enviar";
          submitBtn.disabled = false;
          form.reset();
        })
        .catch((error) => {
          failSound.play();
          toastFail.show();

          submitBtn.textContent = "Enviar";
          submitBtn.disabled = false;
        });
    });
  }
};
