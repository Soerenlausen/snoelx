const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector("header > nav").classList.toggle("show");
    bars.classList.toggle("fa-bars");
    bars.classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);
