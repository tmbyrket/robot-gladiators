var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at one like this
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    //alert players that they are starting the round
    window.alert("welcome to robot gladiators!");

    //subtract the value of 'playerattack' from the value of 'enemyhealth' and use result to update the value in the 'enemyhealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //log a resulting message to the console so we know that it worked
    console.log(
        playerName + ' attacked ' + enemyName + '.' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );
    
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died");
    }
    else {
        window.alert(enemyName + ' still has ' + enemyHealth + " health left.");
    }
    //subtract the value of enemyattack form the value of playerhealth and use result to update the value in the 'playerhealth' variable
    playerHealth = playerHealth - enemyAttack;
    if (playerHealth <= 0) {
        window.alert(playerName + ' has died');
    }
    else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.' )
    }

    //log a resulting message to the conosle so that we know it worked
    console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );
};

fight ();


