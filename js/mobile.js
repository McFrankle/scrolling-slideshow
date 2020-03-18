const vh = 4080;
var s, t, w, h;

function updateDisplay() {
  // refresh viewport info
  w = $(window).width();
  h = $(window).height();

  // center image
  t.top = 0.035 * vh + h/2 + "px";
  t.left = w/2 + "px";
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
      document.getElementById("target").style.opacity = 1;
    }, 250);
  }, 250);
});
