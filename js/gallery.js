/*
	Fotograf galerisi
*/

//	Calistiginda onizlemeli gorunumu acar. Yani myModal id sine sahip bolmeleri goruntuler
function openModal() {
	document.getElementById("myModal").style.display = "block";
}

//	Calistiginda onizlemeli gorunumu kapatir. Yani myModal id sine sahip bolmeleri gizler
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1; // fotograf indisi
showSlides(slideIndex); // gosterilen fotonun indisi

// indisi artirir ve gosterir
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// indisi dogrudan gosterir (tiklanilan)
function currentSlide(n) {
	showSlides(slideIndex = n);
}

// gosterme algoritmasi
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}