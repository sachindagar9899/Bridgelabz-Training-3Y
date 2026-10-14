// Q7. Smart Guessing Game (Number Range)
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value: change this to try other guesses.

console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber && userGuess <= 50) {
        console.log("Too high");
    } else if (userGuess < secretNumber && userGuess >= 1) {
        console.log("Too low");
    } else {
        console.log("Guess must be between 1 and 50.");
    }
}

console.log(`Secret number (for testing): ${secretNumber}`);
