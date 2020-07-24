const gopara = document.querySelectorAll(".goPara");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  gopara.forEach((para) => {
    doPara(para, y, para.dataset["go"]);
  });
});
function doPara(para, distance, paraSpeed = 1) {
  const paraY = distance * (1 - paraSpeed);
  para.style.transform = `translateY(${paraY}px)`;
}
