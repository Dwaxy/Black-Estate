$(function() {
 
  
  $(".hero-title").addClass('animated fadeInUp')
  $("#top-blurb").addClass('animated fadeInDown')

})


bottemBlurbTrigger = document.querySelector(".hero-title")
bottomBlurb = document.querySelector(".bottem-blurb")
console.log(bottomBlurb)
new Waypoint({
  element: bottemBlurbTrigger,
  handler: function(direction) {
    if (direction === "down") {
      console.log("down")
      bottomBlurb.classList.add("fadeInLeft ainimated")
    }
  }
})