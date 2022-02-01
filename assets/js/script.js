$(document).ready(function () {

	// filters
	$(document).on("click", ".rarity__nav-filter button", function() {
		
		// $(this).closest(".rarity__nav-filter").find("[data-filter]").removeClass("is-active");
		$(".rarity__nav-filter .is-active").removeClass("is-active");
		$(this).addClass("is-active");

		let item_filter = $(this).data("filter");
		// $('.rarityJs .is-active').removeClass('is-active'); 
		$(".rarityJs [data-item]").removeClass("is-active");
		$(".rarityJs [data-item=" + item_filter + "]").addClass("is-active");

		// console.log(item_filter)
	});

	// scroll to
	$(document).on( 'click', ".jsScrollTo", function (e) {
		e.preventDefault();
		let id  = $(this).attr('href');
		let top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 500);

		$(".showMenu").removeClass("opened");
		$(".toggleMenu").removeClass("menu-open");
	});

	//mobile menu
	$(document).on("click", ".showMenu", function(){
		$(this).toggleClass("opened");
		$(".toggleMenu").toggleClass("menu-open");
		$("body").toggleClass("active-menu");
		$("html").toggleClass("overflow");
	});

	// Helper function for add element box list in WOW
	WOW.prototype.addBox = function(element) {
		this.boxes.push(element);
	};
	// Init WOW.js and get instance
	// var wow = new WOW();
	var wow = new WOW({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	})
	wow.init();

	// timer
	(function () {
	const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;
	
	let endDay = "Oct 8, 2021 10:00:00",
		countDown = new Date(endDay).getTime(),
		x = setInterval(function() {    
	
			let now = new Date().getTime(),
				distance = countDown - now;
	
			document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
	
			//do something later when date is reached
			if (distance < 0) {
				console.log(distance)
				let headline = $(".headline"),
					timer = $(".timer");
				
					timer.addClass("is-hide");
					headline.removeClass("is-hide");
		
				clearInterval(x);
			}
		}, 0)
	}());
	  
});