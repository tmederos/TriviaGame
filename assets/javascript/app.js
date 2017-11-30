  /* Global Variables */
  var correct = 0;
  var wrong = 0;
  var notAnswered = 0;
  var counter = 0;
  var timeLeft;

// The Start Button
  $("#start").on("click",function(){
    // The timer is set for 45 seconds
    timeLeft = 45;
    counter = setTimeout(function(){timeIsUp()},45000);
    //
    secondsInterval = setInterval( displayTime,1000);
  });
  // Function to display the time
  function displayTime (){
    if ( timeLeft > 0 ){
      timeLeft--;
      $(".timeDisplay").html(timeLeft + " Seconds Remaining.");
      }
    };

  function timeIsUp(){
    alert("time is up!");
    checkAnswers();
    displayResults();
  };

  // Check Questions
  function checkAnswers(){
    for( i = 1; i <= 10; i++ ){
      // Determine what the user checked.
      var userInput = document.querySelector('input[name="q'+ i +'"]:checked');
      // Make sure that the user has input a value.
      userInput = userInput && userInput.value;
      // var userInput = document.querySelector('input[name="q1"]:checked').value;
      if( userInput === "true" ){
        correct += 1;
      } else if ( userInput === "false" ){
        wrong += 1;
      }
    }
    notAnswered == 10 - wrong - correct;
  };
    // Displays the Results
    function displayResults(){
    clearInterval(counter);
    timeLeft = 0;
    // Display results on html.
    $(".Results").html("<p> You got " + correct + " right and " + wrong + " wrong. " + notAnswered + " questions not answered.</p>");
  };

  //
  $(".checkAnswers").on("click",function(){
    checkAnswers();
    displayResults();
  });

    // Reset button restores the default values.
  $(".reset").on("click",function(){
    correct = 0;
    wrong = 0;
    notAnswered = 0;
    clearInterval(counter);
    clearInterval(secondsInterval);
    timeRemaining = 0;
    $(".timeDisplay").html("");
    $(".Results").html("");
    $("input:checked").prop("checked", false);

  });


