function startGame(){
    
    let playerNameObj = <HTMLInputElement>document.getElementById("playername");    
    let playerName: string = playerNameObj.value;

    logPlayerNameToConsole(playerName);

    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Welcome to MultiMath! Starting a new game....'
}

document.getElementById('startGame')!.addEventListener('click', startGame);

function logPlayerNameToConsole(playerName: string) {
    if(playerName == null || playerName.trim() === '')
    {
        playerName = 'unknown';
    }
    console.log(`The entered name is: ${playerName}`);
}
