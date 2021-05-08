var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at one like this
console.log(playerName, playerAttack, playerHealth, playerMoney)

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    //alert players that they are starting the round
    window.alert("welcome to robot gladiators!");

    //prompt player to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by substracting the amount set in the playerAtack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '.' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died');
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '.' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + ' has died.');
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
        //if player choses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm players wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if YES (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            //subtract money from Player Money for skipping
            playerMoney = playerMoney - 2;
        }

        //if NO (false), ask question again by running fight () again
        else {
            fight ();
        }
    }
}

fight ();