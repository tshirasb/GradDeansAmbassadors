function save(){
    var checkboxes = document.getElementsByClassName("checkbox");
    var checkboxlength = checkboxes.length;
    for (i = 1; i <= checkboxlength; i++) {
        var checkedbox = document.getElementById(String(i));
        localStorage.setItem("checkbox" + String(i), checkedbox.checked);
    }
    storage();
    checkdone();
}
function storage(){
    for (i = 1; i <= checkboxlength; i++) {
        if (localStorage.length > 0){
            var checked = 
            JSON.parse(localStorage.getItem("checkbox" + String(i)));
            document.getElementById(String(i)).checked = checked;
        }
    }
}
    

function checkdone() {
    var hiddentext = document.getElementById("hiddentext");
    var progressbardiv = document.getElementById("progress-bar");
    var donetext = document.getElementById("donetext");

    var checklength = document.querySelectorAll('input[type="checkbox"]').length;
    var truechecklength = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    if (truechecklength == checklength){
        hiddentext.style.display = "block";
        progressbardiv.innerHTML = truechecklength.toString() + "/" + checklength.toString();
        donetext.style.display = "block";
    } else if (truechecklength < checklength && truechecklength > 0){
        hiddentext.style.display = "block";
        donetext.style.display = "hidden";
        progressbardiv.innerHTML = truechecklength.toString() + "/" + checklength.toString();
    }
    else {
        hiddentext.style.display = "hidden";
        donetext.style.display = "hidden";
    }    
    
}
