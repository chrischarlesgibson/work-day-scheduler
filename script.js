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

//event listners for all the save buttons along with the corresponding function to save value that is entered in text area into local storage

Btn9.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("9AM schedule", JSON.stringify(textArea9A.val()));
});

Btn10.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("10AM schedule", JSON.stringify(textArea10A.val()));
});

Btn11.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("11AM schedule", JSON.stringify(textArea11A.val()));
});

Btn12.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("12PM schedule", JSON.stringify(textArea12P.val()));
});

Btn1.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("1PM schedule", JSON.stringify(textArea1P.val()));
});

Btn2.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("2PM schedule", JSON.stringify(textArea2P.val()));
});

Btn3.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("3PM schedule", JSON.stringify(textArea3P.val()));
});

Btn4.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("4PM schedule", JSON.stringify(textArea4P.val()));
});

Btn5.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("5PM schedule", JSON.stringify(textArea5P.val()));
});


//function for all 9 text hour blocks so that user last entry upon clicking save will still appear in the text area when the user refreshes the page


function renderTextInput9() {
  var lastInput9 = JSON.parse(localStorage.getItem("9AM schedule"));
  if (lastInput9 !== null) {
    $("#textArea9AM").val(lastInput9);
  }
}

function renderTextInput10() {
  var lastInput10 = JSON.parse(localStorage.getItem("10AM schedule"));
  if (lastInput10 !== null) {
    $("#textArea10AM").val(lastInput10);
  }
}
function renderTextInput11() {
  var lastInput11 = JSON.parse(localStorage.getItem("11AM schedule"));
  if (lastInput11 !== null) {
    $("#textArea11AM").val(lastInput11);
  }
}
function renderTextInput12() {
  var lastInput12 = JSON.parse(localStorage.getItem("12PM schedule"));
  if (lastInput12 !== null) {
    $("#textArea12PM").val(lastInput12);
  }
}
function renderTextInput1() {
  var lastInput1 = JSON.parse(localStorage.getItem("1PM schedule"));
  if (lastInput1 !== null) {
    $("#textArea1PM").val(lastInput1);
  }
}
function renderTextInput2() {
  var lastInput2 = JSON.parse(localStorage.getItem("2PM schedule"));
  if (lastInput2 !== null) {
    $("#textArea2PM").val(lastInput2);
  }
}
function renderTextInput3() {
  var lastInput3 = JSON.parse(localStorage.getItem("3PM schedule"));
  if (lastInput3 !== null) {
    $("#textArea3PM").val(lastInput3);
  }
}
function renderTextInput4() {
  var lastInput4 = JSON.parse(localStorage.getItem("4PM schedule"));
  if (lastInput4 !== null) {
    $("#textArea4PM").val(lastInput4);
  }
}
function renderTextInput5() {
  var lastInput5 = JSON.parse(localStorage.getItem("5PM schedule"));
  if (lastInput5 !== null) {
    $("#textArea5PM").val(lastInput5);
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


//calling on render text area function 
$(document).ready(function () {
  renderTextInput9();
  renderTextInput10();
  renderTextInput11();
  renderTextInput12();
  renderTextInput1();
  renderTextInput2();
  renderTextInput3();
  renderTextInput4();
  renderTextInput5();
});
