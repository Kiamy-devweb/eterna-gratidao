const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const introOverlay = document.getElementById("intro-overlay");
const enterButton = document.getElementById("enter-site");

enterButton.addEventListener("click", () => {
  introOverlay.style.display = "none";
});
