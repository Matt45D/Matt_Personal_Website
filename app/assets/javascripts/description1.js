// This function will make the description DIV for our magnetic project to appear and disappear

function magneticFunction() {
    var x = document.getElementById("magnetic_description");
    var y = document.getElementById("general_description");
       
    if (x.style.display === "none") {
        x.style.display = "block";
	y.style.display = "none";
    } else {
        x.style.display = "none";
	y.style.display = "block";
    }
}
