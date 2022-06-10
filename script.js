// Quiz By Malek with js
let percentEl = document.getElementById("result");

// event listener button
document.getElementById("BTN").addEventListener("click", Btn);

// Event function
function Btn() {
  let Answer = 0;
  //quesiton1 
  let question1 = document.getElementById("Question1").value
    question1 = question1.toLowerCase();
  if (question1 === "Ultimatum") {
    Answer++
    document.getElementById("1").innerHTML = "Correct";
  } else {
    document.getElementById("1").innerHTML = "Incorrect";
  }
  //question2
  let question2 = document.getElementById("Question2");

  if (question2 === "Compton && compton") {
    document.getElementById("2").innerHTML = "Correct"
  } else {
    document.getElementById("2").innerHTML = "Incorrect"
  }

  //question3
  let question3 = document.getElementById("Question3");
  if (question3 === "Section_80 && section_80") {
    document.getElementById("3").innerHTML = "Correct"
  } else {
    document.getElementById("3").innerHTML = "Incorrect"
  }

  //question4
  let question4 = document.getElementById("Question4");
  if (question4 === "2022") {
    document.getElementById("4").innerHTML = "Correct"
  } else {
    document.getElementById("4").innerHTML = "Incorrect"
  }
}
