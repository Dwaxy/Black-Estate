

// code from https://stackoverflow.com/questions/8189840/get-mouse-wheel-events-in-jquery
$(window).on('wheel', function(event){
  // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
  if(event.originalEvent.deltaY < 0){
    // wheeled up
    $("#nav-comp").fadeIn("fast")
  } else {
    // wheeled down
    $("#nav-comp").fadeOut("fast")
  }
})