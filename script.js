,alert("Welcome to Yatharth's QR code generator")

const wrapper = document.querySelector(".wrapper"),
  generateBtn = wrapper.querySelector(".form button"),
  qrInput = wrapper.querySelector(".form input"),
  qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  wrapper.classList.add("active");
});
