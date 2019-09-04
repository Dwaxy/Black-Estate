$(function() {
  $(".hero-title").addClass('animated fadeInUp')
  $("#top-blurb").addClass('animated fadeInDown')
})


const bottomBLurbWaypoint = new Waypoint({
  element: document.querySelector(".hero-title"),
  handler: function(direction) {
    if (direction === "down") {
      //bottomBlurb.classList.add("fadeInUp", "ainimated")
      $("#bottom-blurb").attr('class', 'animated fadeInDown hero-blurb slow')
      $("#top-blurb").attr('class', 'animated fadeOutDown hero-blurb slow')
      console.log("down")
    }
  }
})

const topBlurbWaypoint = new Waypoint({
  element: document.querySelector("#waypoint"),
  handler: function(direction) {
    if(direction === "up") {
      $("#top-blurb").attr('class', 'animated fadeInUp hero-blurb slow')
      $("#bottom-blurb").attr('class', "animated fadeOutUp hero-blurb slow")
      console.log("up")
    }
  }
})
