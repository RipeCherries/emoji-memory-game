const sliderValue = document.querySelectorAll("span");
const inputSlider = document.querySelector("input");

inputSlider.oninput = function () {
    const value = inputSlider.value;
    sliderValue[0].textContent = value;
    sliderValue[1].textContent = value;
}

localStorage.setItem("size", 8);