function dropdownMenu() {
	var x = document.getElementById("navbar");
	console.log(x.className);

	if (x.className === "navbar") {
		x.className += " responsive";
	}

	else {
		x.classList.remove("responsive");
	}

}
