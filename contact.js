// Resizes the contact window to accommodate smaller screens
function resizeHandler() {
  console.clear()
  console.log($(window).width())

  if ($(window).width() < 380) {
    $("#sidebar").hide()
    $("#menu").show()
    $("#contactMain").css("left", "2%")
    $("#contactMain p").css({"font-size":"100%", "margin-top":"1%"})
  } else {
    $("#sidebar").show()
    $("#menu").hide()
    $("#contactMain").css("left", "8em")
    $("#contactMain p").css({"font-size":"120%", "margin-top":"0%"})
  }
}
