

//insert current date
var date = $("#currentDay")
.text(moment().format('dddd, MMMM Do YYYY'));

var currentHour = moment().format('h:mm:ss a');

//create variable for each hour associated with html 
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");

var hour = moment().hours();

//current hour background
function hourBackground () {

  $(".form-control").each(function () {
    var time = parseInt($(this).attr("id"));
    hour = parseInt(hour)

    //compart time vs hour
    if (hour > time) {
      $(this).addClass("past");
    } 
    else if ( hour < time) {
      $(this).addClass("future");
    }
    else {
      $(this).addClass("present");
    }
  });
};

var taskInput;




$(document).ready(function() {
  hourBackground()

  //save button add to localstorage
  $(".saveBtn").on("click", function() {
    taskInput = document.getElementsByClassName("form-control").val();
    console.log(taskInput);
    hourDiv = document.getElementsByClassName("hour").text().trim();
    localStorage.setItem(hourDiv, JSON.stringify(taskInput));
  });



});
