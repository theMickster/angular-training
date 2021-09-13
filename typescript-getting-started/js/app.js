"use strict";
function startGame() {
    var playerNameObj = document.getElementById("playername");
    var playerName = playerNameObj.value;
    logPlayerNameToConsole(playerName);
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting a new game....';
}
document.getElementById('startGame').addEventListener('click', startGame);
function logPlayerNameToConsole(playerName) {
    if (playerName == null || playerName.trim() === '') {
        playerName = 'unknown';
    }
    console.log("The entered name is: " + playerName);
}
//# sourceMappingURL=app.js.map