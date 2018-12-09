$(document).ready(function() {

    
    var hideQuiz = function() {
        $("#quiz").remove();
    };
    hideQuiz(true);

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

    const submitButton = document.getElementById("submit");

    var answered = 0;
    var score = 0;
    var counter = 0;
    var time = 5;

    $("#start-button").on("click", function() {
        playTrivia();
    });

    function playTrivia() {
        $("#start-button").remove();
        $(".lead").remove();
        $("#clock").text("Time remaining: " + time);
        hideQuiz = false;
        $("#submit").html(`<br><br><button type="button" id="start-button" class="btn btn-lg">Submit!</button>`);

        // Q1
        $("#question1").append(`<br>` + `<p>${myQuestions[0].question}</p>` + `<br>`);
        for (var a = 0; a < myQuestions[0].answers.length; a++) {
            $("#answer1").append(`<label> <input type="radio" value="${myQuestions[0].answers[a]}" class="btnLabel${counter++}" name="answers0"> ${myQuestions[0].answers[a]} </label>` + `<br>`);
        }
        // Q2
        $("#question2").append(`<br>` + `<p>${myQuestions[1].question}</p>` + `<br>`);
        for (var b = 0; b < myQuestions[1].answers.length; b++) {
            $("#answer2").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers1"> ${myQuestions[1].answers[b]} </label>` + `<br>`);
        }

        // Q3
        $("#question3").append(`<br>` + `<p>${myQuestions[2].question}</p>` + `<br>`);
        for (var c = 0; c < myQuestions[2].answers.length; c++) {
            $("#answer3").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers2"> ${myQuestions[2].answers[c]} </label>` + `<br>`);
        }

        // Q4
        $("#question4").append(`<br>` + `<p>${myQuestions[3].question}</p>` + `<br>`);
        for (var d = 0; d < myQuestions[3].answers.length; d++) {
            $("#answer4").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers3"> ${myQuestions[3].answers[d]} </label>` + `<br>`);
        }

        // Q5
        $("#question5").append(`<br>` + `<p>${myQuestions[4].question}</p>` + `<br>`);
        for (var e = 0; e < myQuestions[4].answers.length; e++) {
            $("#answer5").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers4"> ${myQuestions[4].answers[e]} </label>` + `<br>`);
        }

        // Q6
        $("#question6").append(`<br>` + `<p>${myQuestions[5].question}</p>` + `<br>`);
        for (var f = 0; f < myQuestions[5].answers.length; f++) {
            $("#answer6").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers5"> ${myQuestions[5].answers[f]} </label>` + `<br>`);
        }

        // Q7
        $("#question7").append(`<br>` + `<p>${myQuestions[6].question}</p>` + `<br>`);
        for (var g = 0; g < myQuestions[6].answers.length; g++) {
            $("#answer7").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers6"> ${myQuestions[6].answers[g]} </label>` + `<br>`);
        }

        // Q8
        $("#question8").append(`<br>` + `<p>${myQuestions[7].question}</p>` + `<br>`);
        for (var h = 0; h < myQuestions[7].answers.length; h++) {
            $("#answer8").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers7"> ${myQuestions[7].answers[h]} </label>` + `<br>`);
        }

        // Q9
        $("#question9").append(`<br>` + `<p>${myQuestions[8].question}</p>` + `<br>`);
        for (var j = 0; j < myQuestions[8].answers.length; j++) {
            $("#answer9").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers8"> ${myQuestions[8].answers[j]} </label>` + `<br>`);
        }

        // 10
        $("#question10").append(`<br>` + `<p>${myQuestions[9].question}</p>` + `<br>`);
        for (var k = 0; k < myQuestions[9].answers.length; k++) {
            $("#answer10").append(`<label> <input type="radio" class="btnLabel${counter++}" name="answers9"> ${myQuestions[9].answers[k]} </label>` + `<br>`);
        }
    }

    // Q1:3   Q2:    Q3:     Q4:     Q5:     Q6:     Q7:     Q8:     Q9:     Q10:

    function scoreKeeper() {
    
        console.log(myQuestions.length); // 10
        console.log(myQuestions[0]); // question object
        console.log(myQuestions[0].correctAnswer); // correct answer!
        console.log(myQuestions[0].answers); // answer array!
        console.log(myQuestions[0].answers.length); // 4!

        // for (var a = 0; a < myQuestions[0].answers.length; a++) {
            if ($(`input[name="answers0"]:checked`).val() === myQuestions[0].correctAnswer) {
                console.log(score); // broken/not showing up
                console.log("Correct");
                score++;
            } else if ($(`input[name="answers0"]:checked`).val() != myQuestions[0].correctAnswer) {
                console.log(answered); // this is incrementing
                console.log("Wrong");
                answered++;
            }
        // }
        console.log(score); // 
        console.log(answered); // 

    }

    function countDown() {
        time--;
    }
    setTimeout(countDown, 1000 * 5); // 5s
    // 
    // $(document.getElementsByClassName(`btnLabel3`))
    // $(document.getElementsByClassName(`btnLabel${counter}`)
    // 

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