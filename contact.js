console.log($(window).width())

if ($(window).width() < 400) {
  $("#sidebar").css("display", "none")
  $("#contactMain").css("left", "2%")
}
