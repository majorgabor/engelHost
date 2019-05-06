function toggleMenu() {
    var x = document.getElementById("res-nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function closeMenu() {
    var x = document.getElementById("res-nav");
    x.className = "topnav";
}