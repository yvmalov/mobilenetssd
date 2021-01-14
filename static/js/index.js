var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function uploadFile() {
	$('#loading-time').css({display: "block"});
}

