var slide_index = 1;
var currentDot; //Identifies Dot to Highlight

//Main load
displaySlides(slide_index);

//Navigates with arrows
function nextSlide(n) {
	//Thoeretical method to alter class and therefore transition direction
	/*
    var dirMove = document.getElementsByClassName('showSlide');
    
	if (n == -1) {
		dirMove[1].className.replace(' slidein-right', ' slidein-left');
	} else {
		dirMove[1].className.replace(' slidein-left', ' slidein-right');
    }*/

	displaySlides((slide_index += n)); //Add or sub input
	changeDot(currentDot); //Updates dot with every action
}

//Navigates with dots
function currentSlide(n) {
	displaySlides((slide_index = n)); //Direct to input
	changeDot(currentDot); //Updates dot with every action
}

//Main load
function displaySlides(n) {
	var i;
	var slides = document.getElementsByClassName('showSlide');

	//Check if slide_index extends beyond array
	if (n > slides.length) {
		slide_index = 1;
	}
	if (n < 1) {
		slide_index = slides.length;
	}

	//Hide unselected image
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	//Show selected image
	for (i = 0; i < slides.length; i++) {
		slides[slide_index - 1].style.display = 'block';
	}

	currentDot = slide_index; //Set current dot
}

//Loads dots
function showDots() {
	var slides = document.getElementsByClassName('showSlide');

	//Builds dot-box HTML
	for (i = 0; i < slides.length; i++) {
		//console.log('What' + i);
		document.getElementById('dot-box').innerHTML +=
			'<span class="dot" onclick="currentSlide(' + (i + 1) + ')"></span>';
	}
}

//Highlights current dot
function changeDot(currentDot) {
	var slides = document.getElementsByClassName('showSlide');
	var dots = document.getElementsByClassName('dot');
	//console.log(currentDot);

	//Deselects dots
	for (i = 0; i < slides.length; i++) {
		dots[i].className = dots[i].className.replace(' active', ' ');
	}

	//Selects current dot
	dots[currentDot - 1].className += ' active';
}

//Loads dots
showDots();
