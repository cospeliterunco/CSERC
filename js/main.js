athletes = ["azeru", "bbohling", "jtaylor", "jgockley", "jwatychowicz", "lalmasri", "lgreitzer", "mgraham", "mlaguera", "rheppenstall", "tstaines", "tnurme"]
image_index = Math.floor(Math.random() * athletes.length);
var interval = setInterval(athlete_gallery_next, 5000);

function athlete_gallery_previous(){
	if(image_index == 0){
		image_index = athletes.length - 1;
	}
	else{ 
		image_index--; 
	}
	image_path = "img/athletes/" + athletes[image_index] + ".png"
	document.getElementById("athlete-gallery").style.backgroundImage = "url(" + image_path + ")"; 
}

function athlete_gallery_next(){
	if(image_index == athletes.length - 1){
		image_index = 0;
	}
	else{ 
		image_index++; 
	}
	image_path = "img/athletes/" + athletes[image_index] + ".png"
	document.getElementById("athlete-gallery").style.backgroundImage = "url(" + image_path + ")"; 
}

function athlete_gallery_info(){
	window.location.href = "html/profiles/" + athletes[image_index] + ".html"
}

