$(document).ready(function() {

    const myQuestions = [
        { // 1
            question: "Who are House's three main employees?",
            answers: ["Chase, Vogler, Wilson", "Wilson, Cameron, Foreman", "Vogler, Wilson, Chase", "Cameron, Chase, Foreman"],
            correctAnswer: "Cameron, Chase, Foreman"
        },
        { // 2
            question: "What is House's first name?",
            answers: ["Gregory", "Johnathan", "Hugh", "Christopher"],
            correctAnswer: "Gregory"
        },
        { // 3
            question: "Cameron agrees to come back to work under the condition that House will...",
            answers: ["take her on a motorcycle ride", "take her on a date", "make her dinner", "set her up on a date with Chase"],
            correctAnswer: "take her on a date"
        },
        { // 4
            question: "Eric Foreman had a juvenile record including which two felonies?",
            answers: ["robbed banks and fraud", "burglarized homes and stolen cars", "stolen cars and robbed banks", "fraud and burglarized homes"],
            correctAnswer: "burglarized homes and stolen cars"
        },
        { // 5
            question: "Which country is Chase originally from?",
            answers: ["Austria", "England", "Australia", "France"],
            correctAnswer: "Australia"
        },
        { // 6
            question: "What is Thirteen's actual name?",
            answers: ["Lisa Cuddy", "Remy Hadley", "Rachel Chase", "Allison Cameron"],
            correctAnswer: "Remy Hadley"
        },
        { // 7
            question: "Masters always feels the importance in NOT ___ to patients.",
            answers: ["stealing", "telling the truth", "touching", "lying"],
            correctAnswer: "lying"
        },
        { // 8
            question: "Lisa Cuddy is the dean of...",
            answers: ["Medicine", "Diagnosticis", "Surgery", "Cancer"],
            correctAnswer: "Medicine"
        },
        { // 9
            question: "What medication does House take for his leg?",
            answers: ["Oxycodone", "Codeine", "Vicodin", "Morphine"],
            correctAnswer: "Vicodin"
        },
        { // 10
            question: "What brand are House's shoes?",
            answers: ["Addidas", "Nike", "New Balance", "Reebok"],
            correctAnswer: "Nike"
        }
    ];

    // const list = document.getElementById("questions");
    const submitButton = document.getElementById("submit");

    // var time = 0;
    // function countDown() {
    //     time = 120;
    //     --time;
    // }

    var answered = 0;
    var score= 0;
    var counter = 0;
    var time = 120;
    // var clockRunning = false;
    // var intervalID;

    // var radBtn = document.querySelector('input[type=radio]:checked').val();
    // above did not help my counter issue
    
    $("#start-button").on("click", function() {
        playTrivia(); 
    });
    
    function playTrivia() {
        $("#start-button").remove();
        $(".lead").remove();
         // this line is working...just need correct syntax to get the actual clock to appear...
        $("#submit").html(`<br><br><button type="button" id="start-button" class="btn btn-lg">Submit!</button>`);

        


        for (var i = 0; i < myQuestions.length; i++) {
            $("#quiz").append(`
            <br><p>${myQuestions[i].question}</p>
            <form id="formAnswers">
            <label><input type="radio" name="${myQuestions[i].answers[0]}" value="${myQuestions[i].answers[0]}">${myQuestions[i].answers[0]}</label>
            <label><input type="radio" name="${myQuestions[i].answers[1]}" value="${myQuestions[i].answers[1]}">${myQuestions[i].answers[1]}</label>
            <label><input type="radio" name="${myQuestions[i].answers[2]}" value="${myQuestions[i].answers[2]}">${myQuestions[i].answers[2]}</label>
            <label><input type="radio" name="${myQuestions[i].answers[3]}" value="${myQuestions[i].answers[3]}">${myQuestions[i].answers[3]}</label>
            <br>
            </form>`);
        }

        setTimeout (function() {
            for (var i = 120; i >= 0; i--) {
                // console.log(i);
                console.log(time);
                time = i;
                $("#clock").text("Time remaining: " + time);
            }
        }, 1000 * 120);
        

        console.log(time);

    }
    
    
    setTimeout(showResults, 1000 * 120); // 120 seconds / 2 minutes


    // FUNCTION BELOW IS BROKEN BECAUSE I CAN'T FIGURE OUT HOW TO CORRECTLY "GRAB" MY RADIO BUTTONS...I'VE TRIED MANY MANY DIFFERENT THINGS, SUCH AS TRYING TO GRAB DIFFERENT NAME ATTRIBUTES, CLASSES, WITH/WITHOUT THE .VAL(), AND EVEN JUST USING GETELEMENTBYID'S INSTEAD OF THE CODE BELOW. I EVEN CHANGED HOW I DISPLAYED MY QUIZ ABOVE DRAMATICALLY TO TRY TO REMEDY THIS (A WAY LESS DRY CODED WAY, BUT ONLY WAY I KNEW HOW TO TRY TO FIX THIS...) I REALLY WANT TO KNOW HOW TO FIX THIS AND CANNOT WAIT TO LEARN HOW TO REMEDY THIS HOT MESS! :)

    function scoreKeeper() {
        for (var m = 0; m < myQuestions.length; m++) {
            console.log(myQuestions.length); // 10
            console.log(myQuestions[m]); // yes, working, current object in the array in the for loop
            console.log(myQuestions[m].correctAnswer); // working as well
            for (var n = 0; n < myQuestions[m].answers.length; n++) {
                if ($(`input:radio[name="answers"]:checked`).val() === myQuestions[m].correctAnswer) {
                    console.log(score); // 0
                    console.log("Correct");
                    score++;
                } else if ($(`input:radio[name="answers"]:checked`).val() != myQuestions[m].correctAnswer) { // NOT GETTING PICKED UP AT ALL
                    console.log(answered); // 
                    console.log("Wrong");
                    answered++;
                }
            }
        }
        console.log(score); //  1
        console.log(answered);
    }

    // $(`input:radio:checked`).val() === myQuestions[m].correctAnswer


    // cleaner/dryer way I was coding my questions and answers, but ran into the major issues of being able to select multiple answer choices and not being able to grab the user input to check for correct answers vs. wrong answers and unanswered questions.

    
    function showResults() {
        console.log(score); // 0
        console.log(answered); // 0
        console.log(10-answered); // 10
        $("#start-button").remove();
        $(".lead").remove();
        $("#quiz").remove();
        $("#clock").remove();
        $("#submit").remove();
        $("#results").append(`<h3>Quiz Over!</h3>` + `<br>` + `<p>Correct Answers: ${score} </p>` + `<br>` + `<p>Wrong Answers: ${answered} </p>` + `<br>` + `<p>Unanswered: ${10 - answered} </p>` + `<br>` + `<p>Refresh the page to play again!</p>`)
        scoreKeeper();
    }

    submitButton.addEventListener("click", showResults);
});