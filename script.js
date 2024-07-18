const container = document.querySelector(".container");

container.addEventListener("mousemove", (event) => {
  let xVal = event.clientX;
  let yVal = event.clientY;

  if (xVal % 2 == 0) {
    let image = document.createElement("img");
    image.src = "./assets/star.png";

    image.style.left = `${xVal}px`;
    image.style.top = `${yVal}px`;
    image.style.transform = "translate(-50%, -50%)";

    image.classList.add("stars-animation");

    container.appendChild(image);
  }
});
