//var secret = 7;
var secret = Math.floor(Math.random() * 11) + 1;

function askQuestion() {
    var answer = parseInt(prompt("Please guess the secret number (1-10)"));
    checkAnswer(answer);
}


function checkAnswer(yourAnswer) {

    if (yourAnswer < secret) {
        alert("Incorrect, too low");
        askQuestion();
    } else if (yourAnswer > secret) {
        alert("Incorrect, too high");
        askQuestion();
    } else if (yourAnswer === secret) {
        alert("Correct!!")
    } else {
        alert("Invalid Input!")
        askQuestion();
    }

}
/*Expand the program to do this in a while loop, only exiting when the guess was correct
While the guess is incorrect, test also if it is too low or too high and
 display the message “Incorrect, too low” or “Incorrect, too high”
*/