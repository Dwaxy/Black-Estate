$(function() {
 
  
  $(".hero-title").addClass('animated fadeInUp')
  $("#top-blurb").addClass('animated fadeInDown')

})


bottemBlurbTrigger = document.querySelector(".hero-title")
new Waypoint({
  element: bottemBlurbTrigger,
  handler: function(direction) {
    if (direction === "down") {
      //bottomBlurb.classList.add("fadeInUp", "ainimated")
      $("#bottom-blurb").addClass('animated fadeInUp')
    }
  }
})