/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;

// Initialize/reset game
resetGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // Get number
        let dice = Math.floor(Math.random() * 6) + 1;

        // Display result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // Update the round score IF the rolled number was not a 1
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            changeActivePlayer();
        }
    }
});

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