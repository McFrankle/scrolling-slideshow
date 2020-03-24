var ih, iw;
var s, t, w, h;

function updateDisplay() {
  // refresh viewport info
  w = $(window).width();
  h = $(window).height();

  iw = 5.5 * w;

  t.width = iw + "px";
  ih = document.getElementById("target").offsetHeight;

  // center image
  document.documentElement.scrollTop = 0.46 * ih - h/2;
  document.documentElement.scrollLeft = iw/2 - w/2;
      document.body.scrollTop        = 0.46 * ih - h/2;
      document.body.scrollLeft       = ih/2 - h/2;
}

window.onresize = debounce(updateDisplay, 500);

// Wait for all assets (including images) to be loaded
$(window).on("load", function(){
  t = document.getElementById("target").style;
  s = document.getElementById("splash").style;

  updateDisplay();

  // wait 1/4 second, and then...
  setTimeout(function () {

    // hide the splash overlay
    s.opacity = 0;
    s.visibility = "hidden";

    // wait again, then
    setTimeout(function () {

      // show the main image
      t.opacity = 1;

    }, 250);
  }, 250);
});
