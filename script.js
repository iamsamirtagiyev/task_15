const sliderContainer = document.querySelector(".slider-container");
const menuIcon = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider");

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(() => {
        sliderContainer.style.transform = "skewY(10deg) translate(-50%)";
    }, 5000);
});

sliderContainer.addEventListener('transitionend', ()=>{
    sliderContainer.appendChild(sliderContainer.firstElementChild);
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = "skewY(10deg) translate(0)";

    setInterval(() => {
        sliderContainer.style.transition = "all 3s";
    });
});

menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle("active");
});

dots.forEach(dot =>{
    dot.addEventListener('click', ()=>{
        slider.style.transform = `translate(${(dot.id) * (-5)}%)`;
    });
});