$("#clickAway").hide()

// Resizes the contact window to accommodate smaller screens
function resizeHandler() {
  /* console.clear()
  console.log($(window).width()) */

  if ($(window).width() < 380) {
    $("#sidebar").hide()
    $("#menu").show()
    $("h2").css("padding-left","0.5em")
    $("#contactMain").css("left", "2%")
    $("#contactMain p").css({"font-size":"100%", "margin-top":"1%"})
    $("#sidebar").css({"position":"absolute", "left":"-240%", "top":"0%", "width":"4em", "z-index":"10000"})
    $("#sidebar a").css({"font-size":"24pt", "border":"1px solid black","width":"4em"})
    $("#sidebar a:hover").css({"width":"9em", "z-index":"10001"})

  } else {
    hideMenu()
    $("#menu").hide()
    $("h2").css("padding-left","1em")
    $("#contactMain").css("left", "8em")
    $("#contactMain p").css({"font-size":"120%", "margin-top":"0%"})
    $("#sidebar").css({"position":"relative", "left":"1.3%", "top":"250%", "width":"4em", "z-index":"9999"})
    $("#sidebar a").css({"font-size":"18pt", "border":"none","width":"4em"})
    $("#sidebar").show()
    $("#contactMain").before($("#sidebar"))
  }
}

// Moves the sidebar to the menu button when screen is small
function showMenu() {
  console.clear()
  console.log("Show")
  $("#menu").append($("#sidebar"))
  $("#sidebar").show()
  $("#clickAway").show()
}

function hideMenu() {
  console.log("Hide")
  $("#sidebar").hide()
  $("#sidebar").off("mouseout")
  $("#clickAway").hide()
}
