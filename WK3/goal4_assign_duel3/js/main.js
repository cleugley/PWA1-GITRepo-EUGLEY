/** Name: Crystal Eugley
Date: 4/17/2015
Assignment: Duel #2 DEVELOP


/**
 * Duel Fight Game
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    // The following is the variables that will be used in the fighting game. 
    //player name
    var fighterOne = {name: Spiderman, damage: 20, health: 100};  // Fighter One is set up as and array of objects
    var fighterTwo = {name: Superman, damage: 20, health: 100};     // Fighter Two is set up as and array of objects

    //initiate round
    var round=0; //This variable identifies the round

    function fight(){
        alert(fighterOne[0]+":"+fighterOne[2]+"  *START*  "+fighterTwo[0]+":"+fighterTwo[2]); //This alert states both players names as identified in the above array and the starting health points which is 100 (index 2 on the array)
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighterOne[1] * .5;
            var minDamage2 = fighterTwo[1]* .5;
            var f1 = Math.floor(Math.random()*(fighterOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighterTwo[1]-minDamage2)+minDamage2);  // These variables are set up to take random points away from player one and player twos health points. (uses index 1 and 2 of each array)

            //inflict damage
            fighterOne[2]-=f1;
            fighterTwo[2]-=f2;  // These two actions are the resulting damage to the players from the random generator above f1 and f2

            console.log(fighterOne[0]+": "+fighterOne[2] + " " + fighterTwo[0]+":"+fighterTwo[2]); // This displays in the console the results of each round

            //check for victor
            var result = winnerCheck(); //This sets up a call to see if the round results in a winner.
            console.log(result); //This displays if there is a winner each completed fight round.
            if (result==="no winner")
            {
                round++;
                alert(fighterOne[0]+":"+fighterOne[2]+"  *ROUND "+round+" OVER"+"*  "+fighterTwo[0]+":"+fighterTwo[2]);
                // This part of the if statement displays an alert for the player. It will show the remaining health of each player after the last round was complete and nobody won.
            } else{
                alert(result); // this else will display if there was any other result of the round except no winner
                break;
            };

          };
    };

    function winnerCheck(){ //This function will check if there is a winner after each round
        var result="no winner";
        if (fighterOne[2]<1 && fighterTwo[2]<1)
        {
            result = "You Both Die"; //This part of the if statement will show send the results you both die if both players have health points below 1
        } else if(fighterOne[2]<1){
            result =fighterTwo[0]+" WINS!!!" // This will display that player two wins if player ones health is below 1
        } else if (fighterTwo[2]<1)
        {
            result = fighterOne[0]+" WINS!!!" //This will display that player one wins if player twos health is below 1
        };
       return result; //This returns the results to the main code.
    };

    /*******  The program gets started below *******/
    fight();

})();