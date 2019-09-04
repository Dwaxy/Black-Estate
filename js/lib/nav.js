


var navOn = true
$("#mobile-toggle").click( function() {
  if(navOn) {
    $(".nav-holder").fadeOut("fast")
    navOn = false
  } else if(!navOn) {
    $(".nav-holder").fadeIn("fast")
    navOn = true
  }
})

// code from https://stackoverflow.com/questions/8189840/get-mouse-wheel-events-in-jquery

var navShowOnScroll
const checkNavIsMobile = function() {
  if($(window).width() < 1030) {
    navShowOnScroll = false
  } else {
    navShowOnScroll = true
  }
}

$( window ).resize(function() {
  checkNavIsMobile()
  navOn = false
})

$(function() {
  checkNavIsMobile()
})

$(window).on('wheel', function(event){
  // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
  if(event.originalEvent.deltaY < 0 && navShowOnScroll){
    // wheeled up
    $(".nav-holder").fadeIn("fast")
  } else {
    // wheeled down
    $(".nav-holder").fadeOut("fast")
  }
})
