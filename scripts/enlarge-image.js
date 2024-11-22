// Event listener to handle image enlargement and text exposure on click
function handleImageClick(event) {
  const images = document.querySelectorAll(".flex-container .enlargeable");
  const texts = document.querySelectorAll(".flex-container .image-text");

  images.forEach((img, index) => {
    const text = texts[index];
    if (img === event.target) {
      img.classList.toggle("enlarged");

      text.style.opacity = img.classList.contains("enlarged") ? "1" : "0";
      text.style.visibility = img.classList.contains("enlarged")
        ? "visible"
        : "hidden";
    } else {
      img.classList.remove("enlarged");
      text.style.opacity = "0";
      text.style.visibility = "hidden";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", handleImageClick);
});
