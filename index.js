let number, attempts, gameOver;

const easyBtn = document.getElementById('easyBtn');
const hardBtn = document.getElementById('hardBtn');
const gameArea = document.getElementById('gameArea');
const attemptsLeft = document.getElementById('attemptsLeft');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');

function startGame(difficulty) {
    number = Math.floor(Math.random() * 100) + 1;
    attempts = difficulty === 'easy' ? 10 : 5;
    gameOver = false;
    
    easyBtn.style.display = 'none';
    hardBtn.style.display = 'none';
    gameArea.style.display = 'block';
    updateAttemptsLeft();
    message.textContent = '';
    guessInput.value = '';
}

function updateAttemptsLeft() {
    attemptsLeft.textContent = `You have ${attempts} attempts remaining to guess the number.`;
}

function checkGuess() {
    if (gameOver) return;

    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts--;
    updateAttemptsLeft();

    if (guess < number) {
        message.textContent = 'Too low!';
    } else if (guess > number) {
        message.textContent = 'Too high!';
    } else {
        message.textContent = 'You got it!! You Win!';
        gameOver = true;
    }

    if (attempts === 0 && !gameOver) {
        message.textContent = `Game Over. The number was ${number}.`;
        gameOver = true;
    }

    if (gameOver) {
        guessBtn.textContent = 'Play Again';
        guessBtn.onclick = resetGame;
    }
}

function resetGame() {
    easyBtn.style.display = 'inline-block';
    hardBtn.style.display = 'inline-block';
    gameArea.style.display = 'none';
    guessBtn.textContent = 'Guess';
    guessBtn.onclick = checkGuess;
}

easyBtn.addEventListener('click', () => startGame('easy'));
hardBtn.addEventListener('click', () => startGame('hard'));
guessBtn.addEventListener('click', checkGuess);