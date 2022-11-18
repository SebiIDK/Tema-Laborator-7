function Profil() {
	// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "Inginer Software-Google";
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship";
	p1.innerHTML = "12.05.2026-28.09.2026";
	l1.innerHTML = "https://careers.google.com/students/engineering-and-technical-jobs/";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Cel mai bun proiect";
	p2.innerHTML = "15.04.2026";
	l2.innerHTML = "https://research.utcluj.ro/index.php/proiecte-de-cercetare-in-derulare.html";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat";
	p3.innerHTML = "01.06.2022-24.09.2026";
	l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
}

function oldToNewImage() {
	var img = document.getElementById("pozaprofil");
	img.src = "./inginer_programator.jpg";
	img.style.opacity = 0.85;
	img.style.borderWidth = '5px';
    img.style.borderStyle = 'dotted';
    img.style.borderColor = 'red';
	img.style.right='30px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor  = "green";
	body.style.fontFamily="Tahoma";
	
}