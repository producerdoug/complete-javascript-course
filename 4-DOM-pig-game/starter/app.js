/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, previousRoll, winningScoreEl, winningScore;

// Select score setter
winningScoreEl = document.getElementById('winning-score');

// Initialize/reset game
resetGame();

// Roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // Debug, log previousRoll
        console.log(previousRoll);

        // Get numbers & sum
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let diceSum = dice1 + dice2;

        // Display result
        let diceDiv = document.querySelector('.dice');
        let firstDiceDOM = document.querySelector('.dice1');
        let secondDiceDOM = document.querySelector('.dice2');
        diceDiv.style.display = 'block';
        firstDiceDOM.style.display = 'block';
        firstDiceDOM.src = 'dice-' + dice1 + '.png';
        secondDiceDOM.style.display = 'block';
        secondDiceDOM.src = 'dice-' + dice2 + '.png';

        // Check for double sixes
        if (previousRoll === 6 && diceSum === 6) {
            // Lose entire score and next player's turn
            console.log('Two sixes in a row! for player ' + activePlayer);
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            changeActivePlayer();
        } else {
            // Log roll as previous
            previousRoll = diceSum;

            // Update the round score IF the rolled number was not a 1 and not a second 6 in a row
            if (dice1 !== 1 && dice2 !== 1) {
                roundScore += diceSum;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                // Next player
                console.log(`Player ${activePlayer} rolled a 1`);
                changeActivePlayer();
            }
        }
    }
});

// Hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to total score
        scores[activePlayer] += roundScore;

        // update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won
        if (scores[activePlayer] >= 100) {
            // Display name!
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('player-' + activePlayer + '-panel').classList.remove('active');

            // Reset
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
        
            document.querySelector('.btn-roll').disabled = true;
            document.querySelector('.btn-hold').disabled = true;

            //gamePlaying = false;

            // Escape
            return;
        }

        // Change Active Player
        changeActivePlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', resetGame);

// Watch for Winning Score change and reset the game
winningScoreEl.addEventListener('change', function() {
    if (winningScoreEl.value > 0) {
        if (winningScoreEl.value % 1 == 0) { 
            resetGame();
        } else {
            console.log('Winning Score must be a whole number');
            winningScoreEl.value = 100;
        }
    } else {
        console.log('Winning Score must be a positive number');
        winningScoreEl.value = 100;
    }
});

function changeActivePlayer() {
           // Next player
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           roundScore = 0;
   
           document.getElementById('current-0').textContent = '0';
           document.getElementById('current-1').textContent = '0';
   
           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
   
           //alert('Rolled a 1!');
           document.querySelector('.dice').style.display = 'none';
}

function resetGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousRoll = 0;

    // set winning score
    winningScore = parseInt(winningScoreEl.value, 10);

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('player-0-panel').classList.remove('active');
    document.getElementById('player-1-panel').classList.remove('active');
    document.getElementById('player-0-panel').classList.remove('winner');
    document.getElementById('player-1-panel').classList.remove('winner');
    document.getElementById('player-0-panel').classList.add('active');
    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none';
}