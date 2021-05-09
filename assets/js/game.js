var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and exeecute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
  
    //prompt player to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm players wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if YES (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            //subtract money from Player Money for skipping
            playerMoney = playerMoney - 10;
            console.log('playerMoney', playerMoney);
            break;
        }
    }

    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + ' attacked ' + enemyName + '.' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died.');

        //aware player money for winning
        playerMoney = playerMoney + 20;

        //leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + " health left.");
    }

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //leave while () loop if player is dead
        break;
    } else {
        winow.alert(playerName + ' still has ' + playerHealth + " health left.");
    }
}
};


    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by substracting the amount set in the playerAtack variable
     

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '.' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
    }



for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}   

//Game states
//WIN - player robot has defeated all enemy robots
//      * Fight all enemy-robots


//      * defeat all enemy-robots
//LOSE - player robot's health is zero or less
