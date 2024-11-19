var slider_img = document.querySelector('.slider-img');

//Images I'm using//
var images = [ 'Godzillaimg.png', 'Twisterimg.png',
 'Minecraftimg.png',
 'Bigbangtheoryimg.png', 'Topgunimg.png'];

var i = 0;

//To go to previous Image//
function prevImage(){
	if (i <= 0) i = images.length;
	i--;
	return setImg();
}
//To go to next Image//
function nextImage(){
	if (i >= images.length - 1) i = -1;
	i++;
	return setImg();
}

function setImg() {
	return slider_img.setAttribute('src', 'Project1images/' + images[i]);
}

//Function for Autoplaying the slideshow//
var enableAutoplay = true;
var autoplayInterval = 3000;

if (enableAutoplay) {
   setInterval(function() {
      nextImage();
   }, autoplayInterval);
}