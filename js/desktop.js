// "zoom" factor (NOT a simple scale factor, depends on window size)
const z = 3.5;

// image width and height (initial)
const iw = 5280, ih = 4080;

// image width and height (after zoom)
var zw, zh;

// viewport width and height
var vw, vh;

// styling for the splash overlay DOM element
var s;

// ScrollMagic controller
var c;

// styling for the controller's target DOM element
var t;

// scenes
var s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11,
	s12, s13, s14, s15, s16, s17, s18, s19, s20, s21;

// tweens
var t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11,
	t12, t13, t14, t15, t16, t17, t18, t19, t20, t21;

// property values for tweens
var v01F, v01T, v02, v03, v04, v05, v06, v07, v08, v09, v10,
	v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21;

function drawTrack() {

  // refresh viewport info
  vw = $(window).width();
  vh = $(window).height();

	// Set zoom
	zw = z * vw;
	zh = zw * (ih / iw);

	// Set property values (the destinations along your path)
	v20  = {y: vh/2, ease: Linear.easeInOut};
	v21  = {...v20, x: vw/2};
	v01F = {...v21, xPercent: -50, yPercent: -50};
	v01T = {width: zw,      y:  0.035 * zh + vh/2, ease: Linear.easeInOut};
	v02  = {x: -0.100 * zw, y:  0.500 * zh, ease: Linear.easeIn        };
	v03  = {x: -(3/14)* zw,                 ease: Linear.easeOut};
	v04  = {                y:  0.220 * zh + vh/2, ease: Linear.easeInOut};
	v05  = {x: -0.150 * zw, ease: Linear.easeIn                       };
	v06  = {x:  0.400 * zw, y:  0.500 * zh, ease: Linear.easeNone   };
	v07  = {x:  0.500 * zw,    ease: Linear.easeOut                 };
	v08  = {                    y: -0.030 * zh + vh/2, ease: Linear.easeInOut};
	v09  = {x:  0.450 * zw, ease: Linear.easeIn                        };
	v10  = {x: -0.080 * zw, y: -0.140 * zh + vh/2, ease: Linear.easeNone};
	v11  = {x: -0.185 * zw, ease: Linear.easeOut                      };
	v12  = {                    y: -0.500 * zh + vh, ease: Linear.easeInOut};
	v13  = {x: -0.100 * zw, ease: Linear.easeIn                      };
	v14  = {x:  0.450 * zw, y: -0.460 * zh + vh, ease: Linear.easeOut};
	v15  = {                    y: -0.305 * zh + vh/2, ease: Linear.easeInOut};
	v16  = {x:  0.370 * zw, ease: Linear.easeIn            };
	v17  = {x:  0.280 * zw, y:  0.250 * zh + vh/2, ease: Linear.easeOut};
	v18  = {x:  0.140 * zw, ease: Linear.easeInOut            };
	v19  = {x: -(3/14)* zw, y:  0.080 * zh + vh/2, ease: Linear.easeIn};

  // Ensure the image fills the whole window at the beginning and end
  if (vw / vh >= iw / ih) { // Landscape display mode
		v01F = {...v01F, width: "100%", height: "auto"};
		v21  = {...v21,  width: "100%"};
  } else { // Portrait display mode
		v01F = {...v01F, height: "100%", width: "auto"};
		v01T = {...v01T, height: "auto"};
		v21  = {...v21,  height: "100%", width: "auto"};
  }

	// Build tweens
	t01 = TweenMax.fromTo("#target", 2, v01F, v01T);

	t02 = TweenMax.to("#target", 1, v02);
	t03 = TweenMax.to("#target", 1, v03); // A BROKEN SEARCH
	t04 = TweenMax.to("#target", 1, v04);
	t05 = TweenMax.to("#target", 1, v05);
	t06 = TweenMax.to("#target", 1, v06);
	t07 = TweenMax.to("#target", 1, v07); // OUR APPROACH
	t08 = TweenMax.to("#target", 1, v08);
	t09 = TweenMax.to("#target", 1, v09);
	t10 = TweenMax.to("#target", 1, v10);
	t11 = TweenMax.to("#target", 1, v11); // JAKE
	t12 = TweenMax.to("#target", 1, v12);
	t13 = TweenMax.to("#target", 1, v13);
	t14 = TweenMax.to("#target", 1, v14);
	t15 = TweenMax.to("#target", 1, v15); // REFERENCE FILMS
	t16 = TweenMax.to("#target", 1, v16);
	t17 = TweenMax.to("#target", 1, v17);
	t18 = TweenMax.to("#target", 1, v18); // PROJECT TIMELINE
	t19 = TweenMax.to("#target", 1, v19);
	t20 = TweenMax.to("#target", 1, v20); // CONTACT
	t21 = TweenMax.to("#target", 1, v21);

	c.removeScene([
		s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11,
		s12, s13, s14, s15, s16, s17, s18, s19, s20, s21
	]);

	// set tweens to scenes and add scenes to the controller
	s01.setTween(t01).addIndicators().addTo(c);
	s02.setTween(t02).addIndicators().addTo(c);
	s03.setTween(t03).addIndicators().addTo(c);
	s04.setTween(t04).addIndicators().addTo(c);
	s05.setTween(t05).addIndicators().addTo(c);
	s06.setTween(t06).addIndicators().addTo(c);
	s07.setTween(t07).addIndicators().addTo(c);
	s08.setTween(t08).addIndicators().addTo(c);
	s09.setTween(t09).addIndicators().addTo(c);
	s10.setTween(t10).addIndicators().addTo(c);
	s11.setTween(t11).addIndicators().addTo(c);
	s12.setTween(t12).addIndicators().addTo(c);
	s13.setTween(t13).addIndicators().addTo(c);
	s14.setTween(t14).addIndicators().addTo(c);
	s15.setTween(t15).addIndicators().addTo(c);
	s16.setTween(t16).addIndicators().addTo(c);
	s17.setTween(t17).addIndicators().addTo(c);
	s18.setTween(t18).addIndicators().addTo(c);
	s19.setTween(t19).addIndicators().addTo(c);
	s20.setTween(t20).addIndicators().addTo(c);
	s21.setTween(t21).addIndicators().addTo(c);
}

function makeMagic() {
	// enterSite();

	// Replace default (mobile) styling with desktop styling
	// t.top = 0;
	// t.left = 0;
	// t.transform = "translate(0, 0)";

	c = new ScrollMagic.Controller();

	s01 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 19
	});

	s02 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 1019
	});

	s03 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 3019
	});

	s04 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 3519
	});

	s05 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 4519
	});

	s06 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 5019
	});

	s07 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 7019
	});

	s08 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 7519
	});

	s09 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 9519
	});

	s10 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 10019
	});

	s11 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 12019
	});

	s12 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 12519
	});

	s13 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 13519
	});

	s14 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 14019
	});

	s15 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 16019
	});

	s16 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 17019
	});

	s17 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 17519
	});

	s18 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 19519
	});

	s19 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 20519
	});

	s20 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 22519
	});

	s21 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 23519
	});
}

function enterSite() {
	t = document.getElementById("target").style;
  s = document.getElementById("splash").style;

	// wait 1/4 second, and then...
	setTimeout(function () {

		// hide splash overlay
		s.opacity = 0;
		s.visibility = "hidden";

		// wait again, then
		setTimeout(function () {

			// show main (target) element
			t.opacity = 1;
		}, 250);
	}, 250);
}

// Call a debounced version of our function on window resize
window.onresize = debounce(drawTrack, 500);

// Wait for all assets (including images) to be loaded
$(window).on("load", function(){

	makeMagic();

	drawTrack();

	enterSite();
});
