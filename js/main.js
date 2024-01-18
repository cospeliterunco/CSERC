athletes = ["azeru", "bbohling", "jgockley", "jwatychowicz", "lalmasri", "lgreitzer", "mgraham", "mlaguera", "rheppenstall", "tstaines", "tnurme"]
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


function render_index_sponsors_div(){
	document.getElementsByTagName('body')[0].innerHTML += `
	
	<div class="sponsors_div">
			<a href="https://runnersroost.com/runners-roost-colorado-springs-2/"><img src="img/logos/runnersroost.png" alt="Runners Roost Logo" height="85px"></a>
			<a href="https://www.pikespeakathletics.com/training-center/"><img src="img/logos/ppatc.png" alt="PPATC Logo" height="85px"></a>
			<a href="https://www.bigleaguegraphics.com/"><img src="img/logos/bigleaguelogo.png" alt="Big League Graphics Logo" height="85px"></a>
			<a href="https://hyblcenter.org/"><img src="img/logos/hybllogo.png" alt="Hybl Logo" height="85px"></a>
			<img src="img/logos/totalbody.png" alt="Total Body Running" height="85px">
			<img src="img/logos/peakperformancecounseling.jpeg" alt="Peak Performance Counseling" height="105px">
	</div>
	`
}

function render_other_sponsors_div(){
	document.getElementsByTagName('body')[0].innerHTML += `
	
	<div class="sponsors_div">
			<a href="https://runnersroost.com/runners-roost-colorado-springs-2/"><img src="../img/logos/runnersroost.png" alt="Runners Roost Logo" height="75px"></a>
			<a href="https://www.pikespeakathletics.com/training-center/"><img src="../img/logos/ppatc.png" alt="PPATC Logo" height="75px"></a>
			<a href="https://www.bigleaguegraphics.com/"><img src="../img/logos/bigleaguelogo.png" alt="Big League Graphics Logo" height="75px"></a>
			<a href="https://hyblcenter.org/"><img src="../img/logos/hybllogo.png" alt="Hybl Logo" height="75px"></a>
			<img src="../img/logos/totalbody.png" alt="Total Body Running" height="85px">
			<img src="../img/logos/peakperformancecounseling.jpeg" alt="Peak Performance Counseling" height="105px">
	</div>
	`
}


function render_profile_sponsors_div(){
	document.getElementsByTagName('body')[0].innerHTML += `
	
		<div class="sponsors_div">
			<a href="https://runnersroost.com/runners-roost-colorado-springs-2/"><img src="../../img/logos/runnersroost.png" alt="Runners Roost Logo" height="75px"></a>
			<a href="https://www.pikespeakathletics.com/training-center/"><img src="../../img/logos/ppatc.png" alt="PPATC Logo" height="75px"></a>
			<a href="https://www.bigleaguegraphics.com/"><img src="../../img/logos/bigleaguelogo.png" alt="Big League Graphics Logo" height="75px"></a>
			<a href="https://hyblcenter.org/"><img src="../../img/logos/hybllogo.png" alt="Hybl Logo" height="75px"></a>
			<img src="../../img/logos/totalbody.png" alt="Total Body Running" height="85px">
			<img src="../../img/logos/peakperformancecounseling.jpeg" alt="Peak Performance Counseling" height="105px">
		</div>
	`
}
		

function index_init(){
	athlete_gallery_next()
	render_index_sponsors_div()
}

function profile_init(){
	render_profile_sponsors_div()
}

function other_init(){
	render_other_sponsors_div()
}