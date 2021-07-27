function guessingGame() {
    const ranNum = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let gameOver = false

    return function guess(num) {

        if (gameOver) return "The game is over, you already won!";
        guessCount++;

        if (num === ranNum) {
            gameOver = true
            return `You win! You found ${num} in ${guessCount} guesses.`;
        };

        if (num<ranNum) return `${num} is too low!`
        if (num>ranNum) return `${num} is too high!`
    };
};


module.exports = { guessingGame };