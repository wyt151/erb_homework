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