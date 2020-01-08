$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});





function myFunction() {
	  	var x = document.getElementById("sidebar");
	  	if (x.className === "navigation") {
	    x.className += " responsive";
	    document.getElementById("navicon").style.display = "none";
	    document.getElementById("crossicon").style.display = "block";

	  	} 
	  	else {
	    x.className = "navigation";
	    document.getElementById("navicon").style.display = "block";
	    document.getElementById("crossicon").style.display = "none";
	  	}
	}





