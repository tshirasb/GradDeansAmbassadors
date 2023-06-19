function respMenu() {
    var n = document.getElementById("ulbar");
    if (n.className === "ul") {
        n.className += " resp";
    }
    else {
        n.className = "ul";
    }
}