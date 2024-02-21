import {} from "./module/facturacion.js"
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//open|close menu functionality
menuBtn.addEventListener("click", ()=> {
    menu.classList.toggle("nav-toggle");
})