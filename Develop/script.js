$(document).ready(function () {
  //setting up the current Day
  var timeNow = moment().format("MMMM Do YYYY");
  let timeel = document.getElementById("currentDay");
  timeel.innerHTML = timeNow;

  //clearButton functionality
  var timeBlock = moment().format("HH");
  $("#clearBtn").click(function (hourel) {
    hourel.preventDefault, $("textarea").val(""), localStorage.clear();
  }),
    // Applying classes to the past, present and future time
    $(".time-div").each(function () {
      var hourel = $(this).attr("id").split("-")[1];
      if (timeBlock == hourel) {
        $(this).addClass("present"),
          $(this).children(".description").addClass("present");
      } else if (timeBlock < hourel) {
        $(this).removeClass("present"), $(this).addClass("future");
      } else {
        $(this).removeClass("future"), $(this).addClass("past");
      }
    }),
    // save button functionality
    $(".saveBtn").click(function (hourel) {
      hourel.preventDefault();
      var el = $(this).siblings(".time-block").val(),
        hourel = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(hourel, el);
    }),
    $("#hour-09 .time-block").val(localStorage.getItem("09")),
    $("#hour-10 .time-block").val(localStorage.getItem("10")),
    $("#hour-11 .time-block").val(localStorage.getItem("11")),
    $("#hour-12 .time-block").val(localStorage.getItem("12")),
    $("#hour-13 .time-block").val(localStorage.getItem("13")),
    $("#hour-14 .time-block").val(localStorage.getItem("14")),
    $("#hour-15 .time-block").val(localStorage.getItem("15")),
    $("#hour-16 .time-block").val(localStorage.getItem("16")),
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
});
