// function to display current date at top of page using moment js

function timeRightNow() {
  var time = moment().format("Do-MMM-GGGG");
  $(".lead").text(time);
}
timeRightNow();
setInterval(timeRightNow, 1000);

//pulling time block ids and putting them into a variable
var nineAM = $("#nineAM");
var tenAM = $("#tenAM");
var elevenAM = $("#elevenAM");
var twelvePM = $("#twelvePM");
var onePM = $("#onePM");
var twoPM = $("#twoPM");
var threePM = $("#threePM");
var fourPM = $("#fourPM");
var fivePM = $("#fivePM");

//selecting text area elements in html using jquery and putting them into variable
var textArea9A = $("#textArea9AM");
var textArea10A = $("#textArea10AM");
var textArea11A = $("#textArea11AM");
var textArea12P = $("#textArea12PM");
var textArea1P = $("#textArea1PM");
var textArea2P = $("#textArea2PM");
var textArea3P = $("#textArea3PM");
var textArea4P = $("#textArea4PM");
var textArea5P = $("#textArea5PM");

//selecting save button elements in html using jquery and putting them into variable
var Btn9 = $("#Btn9AM");
var Btn10 = $("#Btn10AM");
var Btn11 = $("#Btn11AM");
var Btn12 = $("#Btn12PM");
var Btn1 = $("#Btn1PM");
var Btn2 = $("#Btn2PM");
var Btn3 = $("#Btn3PM");
var Btn4 = $("#Btn4PM");
var Btn5 = $("#Btn5PM");

//event listners for all the save buttons along with the corresponding function to save textarea into local storage

Btn9.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("9AM schedule", JSON.stringify(textArea9A.val()));
});

function renderTextInput() {
  var lastInput = JSON.parse(localStorage.getItem("9AM schedule"));
  if (lastInput !== null) {
    textArea9A.value = lastInput;
  }
}

//function to check if current time block is greater than, less than or equal to curent time and then add class of past. future or present with their associated coloring. either grey for past, red for present and green for future

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
