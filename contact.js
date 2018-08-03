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
  } else {
    $("#sidebar").show()
    $("#menu").hide()
    $("h2").css("padding-left","1em")
    $("#contactMain").css("left", "8em")
    $("#contactMain p").css({"font-size":"120%", "margin-top":"0%"})
  }
}

// Moves the sidebar to the menu button when screen is small
function showMenu() {
  console.log("Show")
  $("#prettyName").after($("#sidebar"))
  $("#sidebar").show()
  $("#sidebar").css({"position":"absolute", "left":"63%", "top":"4%", "width":"9em"})
  $("#sidebar").on("mouseleave", hideMenu())
}

function hideMenu() {
  console.log("Hide")
  /*$("#prettyName").before($("#sidebar"))
  $("#sidebar").hide()
  $("#sidebar").css({"position":"relative", "left":"1.3%", "top":"250%", "width":"9em"})
  $("#sidebar").off("mouseout")*/
}
