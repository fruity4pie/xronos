var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

function animate(elem){
    var effect = elem.data("effect");
    if(!effect || elem.hasClass(effect)) return false;
    elem.addClass(effect);
    setTimeout( function(){
        elem.removeClass(effect);
    }, 1000);
}

$(document).ready(function(){
  $(".iframe").fancybox();


  $(".globula-slides-js").owlCarousel({
	  loop:true,
	  items: 6,
	  nav:true,
	  dots: true,
        animateIn: 'zoomIn',
        animateOut: 'zoomOut',
	  responsive : {
		  0: {
			  loop:false,
			  items:1
		  },
		  430 : {
			 loop:true,
			 items:1
		  },
		  750 : {
			 loop:true,
			 items:1
		  },
		  970 : {
			 items:1
		  }
	  }
  });
  $(".work-descrition__carousel").owlCarousel({
	  autoWidth:true,
	  center: true,
	  loop:true,
	  items:1,
	  margin:0,
	  nav:true,
	  dots: true,
	   responsive : {
		   0: {
			  autoWidth:false
		  },
		  768 : {
			  autoWidth:true
		  }
	   }
  });
  $(".team-carousel-js").owlCarousel({
	  loop:true,
	  items:5,
	  margin:30,
	  nav:true,
	  dots: false,
	  responsive : {
		  0: {
			  items:1
		  },
		  450: {
			  items:2
		  },
		  750 : {
			 items:2
		  },
		  970 : {
			 items:5
		  }
	  }
  });
  $(".parters-carousel-js").owlCarousel({
	  loop:true,
	  items:4,
	  margin:30,
	  nav:true,
	  dots: false,
	  responsive : {
		  0: {
			  loop:false,
			  items:1
		  },
		  430 : {
			 loop:true,
			 items:1
		  },
		  750 : {
			 loop:true,
			 items:2
		  },
		  970 : {
			 items:4
		  }
	  }
  });


	$(".animated").mouseenter(function() {
		animate($(this));
	});
	/*$('.header .btn-menu').on('click', function(){
		$('.nav').slideToggle();
		$(this).toggleClass('active');
	});*/
	$('.inner-menu .btn-menu').on('click', function(){
		$('.inner-menu__list').slideToggle();
		return false;
	});
	$('.btn-phone').on('click', function(){
		$('.header__phone').slideToggle();
		$(this).toggleClass('active');
	});
	$('.accordion-js [data-accordion]').accordion();
	$("a.btn-next-block").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
});
function initTabs()
{
	var sets = document.getElementsByTagName("ul");
	for (var i = 0; i < sets.length; i++)
	{
		if (sets[i].className.indexOf("tabset") != -1)
		{
			var tabs = [];
			var links = sets[i].getElementsByTagName("a");
			for (var j = 0; j < links.length; j++)
			{
				if (links[j].className.indexOf("tab") != -1)
				{
					tabs.push(links[j]);
					links[j].tabs = tabs;
					var c = document.getElementById(links[j].href.substr(links[j].href.indexOf("#") + 1));

					if (c) if (links[j].parentNode.className.indexOf("active") != -1) c.style.display = "block";
					else c.style.display = "none";

					links[j].onclick = function ()
					{
						var c = document.getElementById(this.href.substr(this.href.indexOf("#") + 1));
						if (c)
						{
							for (var i = 0; i < this.tabs.length; i++)
							{
								var tab = document.getElementById(this.tabs[i].href.substr(this.tabs[i].href.indexOf("#") + 1));
								if (tab)
								{
									tab.style.display = "none";
								}
								this.tabs[i].parentNode.className = this.tabs[i].parentNode.className.replace("active", "");
							}
							this.parentNode.className += " active";
							c.style.display = "block";
							return false;
						}
					}
				}
			}
		}
	}
}
if (window.addEventListener)
	window.addEventListener("load", initTabs, false);
else if (window.attachEvent && !window.opera)
	window.attachEvent("onload", initTabs);


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.about-xronos-first-col').css({
		'transform': 'translate(0px, -'+ wScroll /5 +'%)'
	});

	$('.about-xronos-second-col').css({
		'transform': 'translate(0px, -'+ wScroll /4 +'%)'
	});
})