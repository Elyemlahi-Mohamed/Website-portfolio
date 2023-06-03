
let openNav = document.getElementById("open-nav");
let closeNav = document.getElementById("close-nav");
let navbar = document.querySelector(".active");


openNav.onclick = function () {
    navbar.classList.remove('active');
    openNav.style.display = "none";
    closeNav.style.display = "block";
};

closeNav.onclick = function () {
    navbar.classList.add('active');
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
}
