$("#clickAway").hide()
windowSize = "Large"

// Resizes the about window to accommodate smaller screens
function resizeHandler() {
  /* console.clear()
  console.log($(window).width()) */

  if ($(window).width() < 380) {
    if (windowSize == "Large") {
      $("#sidebar").hide()
      $("#menu").show()
      $("#sidebar a").css({"font-size":"24pt", "border":"1px solid black","width":"4em"})
      $("#sidebar a:hover").css({"width":"4em", "z-index":"10001"})
      $("h2").css("width","70vw")
      windowSize = "Small"
    }
    $("#aboutMain").css("left", "2%")
    $("#aboutContent").css({"font-size":"100%", "margin-top":"1%"})
    $("#sidebar").css({"position":"absolute", "left":"-220%", "top":"0%", "width":"4em", "z-index":"10000"})
  } else {
    if (windowSize = "Small") {
      hideMenu()
      $("#menu").hide()
      $("#aboutMain").css("left", "8em")
      $("#sidebar a").css({"font-size":"18pt", "border":"none","width":"4em"})
      $("#sidebar").show()
      $("#aboutMain").before($("#sidebar"))
      windowSize = "Large"
    }
    $("#aboutContent").css({"font-size":"120%", "margin-top":"0%"})
    screenWidth = $(window).width()/parseFloat($("#aboutMain").css("font-size"));
    mainWidthNum = 0.9 * (screenWidth - 35);
    mainWidth = (mainWidthNum).toString() + "em";
    h2Width = (0.4 * (screenWidth - 6)).toString() + "em";
    console.clear()
    console.log(mainWidthNum)
    //photoLeft = (mainWidthNum).toString() + "em";
    //$("#aboutPhoto").css("left", photoLeft)
    console.log(photoLeft)
    $("#aboutContent").css("width", mainWidth)
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
