$("#clickAway").hide()
windowSize = "Large"
resizeHandler()

// Resizes the writing window to accommodate smaller screens
function resizeHandler() {
  /* console.clear()
  console.log($(window).width()) */

  if ($(window).width() < 380) {
    if (windowSize == "Large") {
      $("#sidebar").hide()
      $("#menu").show()
      $("#sidebar a").css({"font-size":"24pt", "border":"1px solid black","width":"4em"})
      $("#sidebar a:hover").css({"width":"9em", "z-index":"10001"})
      $("h2").css("width","70vw")
      windowSize = "Small"
    }
    $("#writingMain").css("left", "2%")
    $("#writingContent").css({"font-size":"100%", "margin-top":"1%"})
    $("#sidebar").css({"position":"absolute", "left":"-220%", "top":"0%", "width":"4em", "z-index":"10000"})
  } else {
    if (windowSize = "Small") {
      hideMenu()
      $("#menu").hide()
      $("#writingMain").css("left", "8em")
      $("#sidebar a").css({"font-size":"18pt", "border":"none","width":"4em"})
      $("#sidebar").show()
      $("#writingMain").before($("#sidebar"))
      windowSize = "Large"
    }
    $("#writingContent").css({"font-size":"120%", "margin-top":"0%"})
    screenWidth = $(window).width()/parseFloat($("#writingMain").css("font-size"));
    mainWidth = (0.8 * (screenWidth - 12)).toString() + "em";
    h2Width = (0.4 * (screenWidth - 6)).toString() + "em";
    $("#writingContent").css("width", mainWidth)
    $("#tuftsDaily").css("width", h2Width)
    $("h2").css("width", h2Width)
    $("#sidebar").css({"position":"relative", "left":"1em", "top":"250%", "width":"4em", "z-index":"9999"})
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
