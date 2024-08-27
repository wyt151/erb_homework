const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

function testing(icon,text) {
            
    if (document.getElementById(text).style.display !== "block"){
        document.getElementById(text).style.display = "block";
        document.getElementById(icon).style.transform = "rotate(180deg)";
    } else {
        document.getElementById(text).style.display = "none";
        document.getElementById(icon).style.transform = "rotate(0)";
    }
};

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-menu");
navBtn.addEventListener("click", ()=>{
    links.classList.toggle("show-links");
});