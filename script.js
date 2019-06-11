function dropdownMenu() {
	var x = document.getElementById("navbar");

	if (x.className === "navbar") {
		x.className += " responsive";
	}

	else {
		x.classList.remove("responsive");
	}

}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top="0";
	}
	else {
		document.getElementById("navbar").style.top="-70px";
	}
	prevScrollpos=currentScrollPos;
}
