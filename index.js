$(document).ready(function() {
  var numOne = "";

  var numTwo = "";

  var flagNumber = 0;

  var operator = "";
  // Your code here...
  $(".number").click(function(){
    if (flagNumber === 0){
      $("#first-number").text(numOne += ($(this).attr('value')));
    }

    else {
      $("#second-number").text(numTwo += ($(this).attr('value')));
    }
  });



  $(".operator").click(function(){
    // if (flagNumber )
    flagNumber = 1;
    operator = $(this).val();
    $("#operator").text(operator);

    if (operator === "plus"){
      $("#operator").text('+');
    }
    if (operator === "minus"){
      $("#operator").text('-');
    }
    if (operator === "times"){
      $("#operator").text('x');
    }
    if (operator === "divide"){
      $("#operator").text('/');
    }
    if (operator === "power"){
      $("#operator").text('^');
    }

  });

  var mathItUp = {
    "add": function(numOne, numTwo){return parseInt(numOne) + parseInt(numTwo)},
    "deduct": function(numOne, numTwo) {return parseInt(numOne) - parseInt(numTwo)},
    "multiply": function(numOne, numTwo) {return parseInt(numOne) * parseInt(numTwo)},
    "divider": function(numOne, numTwo) {return parseInt(numOne) / parseInt(numTwo)},
    "addPower": function(numOne, numTwo) {return Math.pow(parseInt(numOne), parseInt(numTwo))},
  }

  $(".equal").click(function(){
    if (operator === "plus"){
      $("#result").text(mathItUp.add(numOne, numTwo));
    }
    if (operator === "minus"){
      $("#result").text(mathItUp.deduct(numOne, numTwo));
    }
    if (operator === "times"){
      $("#result").text(mathItUp.multiply(numOne, numTwo));
    }
    if (operator === "divide"){
      $("#result").text(mathItUp.divider(numOne, numTwo));
    }
    if (operator === "power"){
      $("#result").text(mathItUp.addPower(numOne, numTwo));
    }
  });

  $(".clear").on("click", function() {
    location.reload();
  });


  });
