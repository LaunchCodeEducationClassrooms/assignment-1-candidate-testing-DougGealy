const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", 
"True or false: 5000 meters == 5 kilometers? ",
 "(5 + 3)/2 * 10 = ? ", 
 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
 "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName(name) {
  // TODO 1.1b: Ask for candidate's name //
name = input.question("What is your name?: ");
candidateName = name;

}
function askQuestion(answer) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < questions.length; i++) {
  answer = input.question(questions[i]);
  candidateAnswers.push(answer);
}

}


function gradeQuiz() {
let totalPoints = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log("\nCandidate Name: " + candidateName);
for (let i = 0; i < correctAnswers.length; i++) {
  console.log(i+1 + ") " + questions[i] + "\n" + "Your Answer: " + candidateAnswers[i] + "\n" + "Correct Answer: " + correctAnswers[i] + "\n");
}
for (let i = 0; i < candidateAnswers.length; i++) {
  
  if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
    totalPoints = totalPoints +1;
  }
  

} 


  let grade = totalPoints / questions.length * 100; 
  console.log(">>> Overall Grade: " + grade + "% " + "(" + totalPoints + " of 5 responses correct) <<<");
  if (totalPoints >= 3) {
    console.log(">>> Status: PASSED <<<")
  } else {
    console.log(">>> Status: FAILED <<<")
  }

  return grade; 
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello,", candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};