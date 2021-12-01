

//insert current date
var date = $("#currentDay")
.text(moment().format('dddd, MMMM Do YYYY'));

//create an event
var createEvent = function(taskText) {
  var eventLi = $("<li>").addClass("task");

  var eventP = $("<p>")
  .addClass("event")
  .text(taskText);


}