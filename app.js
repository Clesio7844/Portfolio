const image = document.getElementById("pic");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    if(image.style.display == "none") {
    image.style.display = "block";
    button.textContent = "hide";
    } else {
    image.style.display = "none";
    button.textContent = "show";


    }
})
console.log(image.style);