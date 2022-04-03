//insert current date
var date = $("#currentDay")
.text(moment().format('dddd, MMMM Do YYYY'));


$(document).ready(function() {
  hourBackground()

  //save button add to localstorage
  $(".saveBtn").on("click", function() {
    var taskText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set text to local storage
    localStorage.setItem(time, taskText);
  });
});

//load tasks from localStorage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//current hour background
function hourBackground () {

  //get current hour
  var hour = moment().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(hour, blockHour);
  

    //compart hour block vs hour
    if (hour > blockHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } 
    else if (hour < blockHour) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
    else {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }
  })
  };




