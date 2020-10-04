

AOS.init({
    offset: 200,
    easing: 'ease-in-sine',
    delay: 100,
  });

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("[name=name]").value;
    const email = document.querySelector("[name=email]").value;
    const subject = document.querySelector("[name=subject]").value;
    const number = document.querySelector("[name=number]").value;
    const message = document.querySelector("[name=message]").value;
    window.open().location = `mailto:e-tronics@gmail.com/?from=${email}&subject=${subject}&message=${name} \n ${email} \n ${number} \n ${message}`;
});