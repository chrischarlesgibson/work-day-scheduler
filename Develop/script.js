// setting current day header with moment.js
// $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Here we want to use setInterval to constantly update the time with moment js

function timeRightNow() {
  var time = moment().format("Do-MMM-GGGG");
  $(".lead").text(time);
}
timeRightNow();
setInterval(timeRightNow, 1000);

//pulling time bloack ids and putting them into a variable we can use for the check time fuctino
var nineAM = $("#nineAM");
var tenAM = $("#tenAM");
var elevenAM = $("#elevenAM");
var twelvePM = $("#twelvePM");
var onePM = $("#onePM");
var twoPM = $("#twoPM");
var threePM = $("#threePM");
var fourPM = $("#fourPM");
var fivePM = $("#fivePM");

function timeBlockColors() {
  var now = moment().format("H");
  if (now > 9) {
    nineAM.addClass("past");
  } else if (now >= 9 && now < 10) {
    nineAM.addClass("present");
  } else if (now < 9) {
    nineAM.addClass("future");
  }
  if (now > 10) {
    tenAM.addClass("past");
  } else if (now >= 10 && now < 11) {
    tenAM.addClass("present");
  } else if (now < 10) {
    tenAM.addClass("future");
  }
  if (now > 11) {
    elevenAM.addClass("past");
  } else if (now >= 11 && now < 12) {
    elevenAM.addClass("present");
  } else if (now < 11) {
    elevenAM.addClass("future");
  }
  if (now > 12) {
    twelvePM.addClass("past");
  } else if (now >= 12 && now < 13) {
    twelvePM.addClass("present");
  } else if (now < 12) {
    twelvePM.addClass("future");
  }
  if (now > 13) {
    onePM.addClass("past");
  } else if (now >= 13 && now < 14) {
    onePM.addClass("present");
  } else if (now < 13) {
    onePM.addClass("future");
  }
  if (now > 14) {
    twoPM.addClass("past");
  } else if (now >= 14 && now < 15) {
    twoPM.addClass("present");
  } else if (now < 14) {
    twoPM.addClass("future");
  }
  if (now > 15) {
    threePM.addClass("past");
  } else if (now >= 15 && now < 16) {
    threePM.addClass("present");
  } else if (now < 15) {
    threePM.addClass("future");
  }
  if (now > 16) {
    fourPM.addClass("past");
  } else if (now >= 16 && now < 17) {
    fourPM.addClass("present");
  } else if (now < 16) {
    fourPM.addClass("future");
  }
  if (now > 17) {
    fivePM.addClass("past");
  } else if (now >= 17 && now < 18) {
    fivePM.addClass("present");
  } else if (now < 17) {
    fivePM.addClass("future");
  }
}
timeBlockColors();
setInterval(timeBlockColors, 1000);

// moment js, you should create moment object that represents spefic times for 9, 10, 11 and so on. and then comapre that moment object to another and if one is more then other then add class. research parse, manipulate and query in moment js, may need these to do.// can also make the grid layout with js and jquery. can create a function to make the each nine rows and columns. since your already made the grid with bootstrap, just replace your css file with the starter one. then after your done you can always go back and redo with jquery and js to make rows. shouldnt change anything bout css or html

//function to check if current time block is greater than or less than cuurent time and then add class of green , red or gray depending on what time it is
