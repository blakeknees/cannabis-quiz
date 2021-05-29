// DOCUMENT READY:
$(function () {
  // 1) Welcome to my cannabis quiz box immediately displayed - CLICK next
  $("#startQuiz").on("click", function () {
    $(".questionCard").toggle("slow");
    //first questionCard appears underneath welcome box
  });

  // 2) Function for selected radio buttons
  let valueOfQuestion1 = 0;
  let valueOfQuestion2 = 0;
  let valueOfQuestion3 = 0;
  let valueOfQuestion4 = 0;
  let valueOfQuestion5 = 0;
  let valueOfQuestion6 = 0;
  let valueOfQuestion7 = 0;
  let valueOfQuestion8 = 0;
  let valueOfQuestion9 = 0;
  let valueOfQuestion10 = 0;

  $("input[type=radio]").on("click", function (event) {
    console.log(event);
    const questionNumber = event.target.name;
    const valueOfSelection = parseInt(event.target.value);
    console.log(questionNumber);
    console.log(valueOfSelection);

    if (questionNumber === "question1") {
      valueOfQuestion1 = valueOfSelection;
    } else if (questionNumber === "question2") {
      valueOfQuestion2 = valueOfSelection;
    } else if (questionNumber === "question3") {
      valueOfQuestion3 = valueOfSelection;
    } else if (questionNumber === "question4") {
      valueOfQuestion4 = valueOfSelection;
    } else if (questionNumber === "question5") {
      valueOfQuestion5 = valueOfSelection;
    } else if (questionNumber === "question6") {
      valueOfQuestion6 = valueOfSelection;
    } else if (questionNumber === "question7") {
      valueOfQuestion7 = valueOfSelection;
    } else if (questionNumber === "question8") {
      valueOfQuestion8 = valueOfSelection;
    } else if (questionNumber === "question9") {
      valueOfQuestion9 = valueOfSelection;
    } else {
      valueOfQuestion10 = valueOfSelection;
      $(".getResults").toggle("slow");
    }
  });

  $(".getResults").on("click", function () {
    const total =
      valueOfQuestion1 +
      valueOfQuestion2 +
      valueOfQuestion3 +
      valueOfQuestion4 +
      valueOfQuestion5 +
      valueOfQuestion6 +
      valueOfQuestion7 +
      valueOfQuestion8 +
      valueOfQuestion9 +
      valueOfQuestion10;
    console.log(total);

    if (total >= 8) {
      $(".expertCard").toggle("slow");
      $(".expertCard .result").text(total);
    } else if (total <= 7 && total >= 5) {
      $(".intermediateCard").toggle("slow");
      $(".intermediateCard .result").text(total);
    } else {
      $(".newbieCard").toggle("slow");
      $(".newbieCard .result").text(total);
    }
  });

  $("button.getAnswer").on("click", function (event) {
    console.log("event", event);
    console.log("name", event.target.name);
    $(`div[name="${event.target.name}"]`).toggle("slow");
  });
});
