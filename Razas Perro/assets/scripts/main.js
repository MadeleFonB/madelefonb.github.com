document.addEventListener('DOMContentLoaded' , () =>  {
	const elementosCarrusel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 150
	});
});