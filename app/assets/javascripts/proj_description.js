//This JQuery code will operate all the animations and css changes that are needed for my project descriptions of each project.

$(document).ready(function(){
    $("#MAGNETIC").click(function(){
        $("#projects").hide(500).animate({
		opacity: '0.5',
	});
    });
});
