function AddNewItem() {
	// call all functions
	addBirthDate();
	createEmailTextBox();
}

function addBirthDate() {
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("20-02-2003");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}
// Cod pentru adaugarea zilei de nastere
function birthToYears() {
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '20-03-2003';
	}
//Cod pentru vizualizarea varstei in momentul cand mouse-ul ajunge langa casuta.
function createEmailTextBox() {
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "Pop.Io.Radu@student.utcluj.ro";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}
//Cod pentru adaugarea unu email.
function validateEmail() {
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}
}
//Cod pentru validarea email.