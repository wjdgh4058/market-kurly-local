const swiper = new Swiper(".mySwiper", {
	slidesPerView: "4",
	slidesPerGroup: "4",
	pagination: {
		el: ".swiper-pagination",
		type: "fraction"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});
