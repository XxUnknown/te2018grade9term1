const READLINE = require("readline-sync");

let QUESTION1;
let QUESTION2;
let QUESTION3;
let QUESTION4;

let DUEL1;
let DUEL2;

let player = {
  name: "Jesus",
  HP: 50,
  weapon: "Divine Laser",
  cooldown: 3,

  };

let soldier1 = {
  HP: 200,

};

let initation = 0;
   
let ready = 0;

   


console.log(`
*****************************************************************************

   You are Jesus in the Roman Empire. The Roman officials are after you!`);

   let START = READLINE.question(`
   Press ENTER to begin. `);

 if(START = " ") {

 	console.log(`
*****************************************************************************`);
 }

 console.log(`
 	   A Roman soldier has spotted you! “Debēs effugere!” 
 	   a) Flee!
 	   b) Confront the soldier.`);

 QUESTION1 = READLINE.question(`
 	   > `);

 if(QUESTION1 == "a" || QUESTION1 == "a)" || QUESTION1 == "Flee!") {
 	console.log(`
 	   You have ran into into the nearest alleyway.
 	   It’s a dead end! “Non curās!”
 	   a) Unleash your power upon the soldier!
 	   b) Give up and hand yourself over to the soldier.`);

 QUESTION2 = READLINE.question(`
 	   > `);
}
if(QUESTION2 == "a" || QUESTION2 == "a)" || QUESTION2 == "Unleash your power upon the soldier!") {
	console.log(`
	   You unleash your weapon, ${player.weapon} upon the soldier!
	   You missed! Your ${player.weapon} now has a ${player.cooldown} turn cooldown.
	   a) Attack again.
	   b) Find an exit.`);

	QUESTION3 = READLINE.question(`
	   > `);
}
if(QUESTION3 == "a" || QUESTION3 == "a)" || QUESTION3 == "Attack again.") {
	console.log(`
	   You attempted to use ${player.weapon} again, however, it
	   has a ${player.cooldown} turn cooldown and it failed. The soldier ninja
	   runs towards you. You have entered a duel!`);

	initation++;
}

else if(QUESTION3 == "b" || QUESTION3 == "b)" || QUESTION3 == "Find an exit.") {
	console.log(`
	   You wall jump out of the alleyway and run. You run around
	   a corner and run straight into a group of Roman soldiers.
	   You are completely overpowered and are crucified.

*****************************************************************************

				    GAME OVER

*****************************************************************************`);
	   
}

else if(QUESTION2 == "b" || QUESTION2 == "b)" || QUESTION2 == "Give up and hand yourself over to the soldier.") {
	console.log(`
	   You put your hands up, "I surrender". The soldier snickers and 
	   approaches. The soldier is now in range and you use your 
	   weapon, ${player.weapon}! The soldier is blasted into a wall.
	   Your ${player.weapon} now has a ${player.cooldown} turn cooldown.
	   a) Spare him and run away.
	   b) Finish him!`);

	QUESTION4 = READLINE.question(`
	   > `);

  }

  if(QUESTION4 == "a" || QUESTION4 == "a)" || QUESTION4 == "Spare him and run away.") {
  	console.log(`
  	   You decide to spare the soldier and run past him. The soldier,
  	   however decieves you and calls for help! A group of reinforcements
  	   ambush you. They beat you until you lose conscious. When you wake up,
  	   you are on a cross.

*****************************************************************************

				    GAME OVER

*****************************************************************************`);
	   
}

  if(QUESTION4 == "b" || QUESTION4 == "b)" || QUESTION4 == "Finish him!") {
  	console.log(`
  	   You blasted the soldier into oblivion. All of a sudden, God appears.
  	   "I am disappointed in you Jesus, why have you committed murder?".
  	   You snap back,
  	   "You're not my [REDACTED]ing mom, you can't tell me
  	   what the hell I do!". 
  	   God is astonished, "Watch your mouth son, you know I can do anything to you".
  	   "Then why didn't you save me if I'm your son?"
  	   "Oh- well you see...".
  	   Then God beams you to heaven and you party for 2,018 years and humanity falls into ruin.

*****************************************************************************

				    GAME COMPLETE!

*****************************************************************************`);
	   
}


 else if(QUESTION1 == "b" || QUESTION1 == "b)" || QUESTION1 == "Confront the soldier.") {
 	console.log(`
 	   You confront the soldier, “Don’t [REDACTED] with me, 
 	   I have the power of God and anime on my side!”. 
 	   The soldier is not convinced, “Tum vebero!”
 	   You unleash your weapon, ${player.weapon} upon the soldier!
	   You missed! Your ${player.weapon} now has a 3 turn cooldown.
	   The soldier challenges you to a duel!`);

  initation++;
 }




if(QUESTION1 == "b" || QUESTION1 == "b)" || QUESTION1 == "Confront the soldier." || QUESTION3 == "a" || QUESTION3 == "a)" || QUESTION3 == "Attack again." && initation == 1) {
	console.log(`
*****************************************************************************

	   Duel begin!

	   HP: 50/50

		> Pray
		> Divine Laser
		> Run`);
DUEL1 = READLINE.question(`
	   > `);

if(DUEL1 == "pray" || DUEL1 == "Pray") {

	ready++;

	player.HP - 49;

	console.log(`
	   Your prayer reduced your Divine Laser cooldown to 1 turn.
	   Soldier attacked with a lance to deal 49 damage!
	   You now have 1 HP!

	   End of turn 1.
	   Your Divine Laser's cooldown is reduced by 1 and is ready to use.`);

	initation++;
}

if(DUEL1 == "divine laser" || DUEL1 == "Divine Laser") {

	player.cooldown - 1;
	player.HP - 49;

	console.log(`
	   Your Divine Laser still has a 3 turn cooldown, and it failed.
	   Soldier attacked with a lance to deal 49 damage!
	   You now have 1 HP!

	   End of turn 1.
	   Your Divine Laser's cooldown is reduced by 1.`);

	initation++;

}

if(DUEL1 == "run" || DUEL1 == "Run") {

	player.cooldown - 1;
	player.HP - 49;

	console.log(`
	   You cannot run from a duel!
	   Soldier attacked with a lance to deal 49 damage!
	   You now have 1 HP!

	   End of turn 1. 
	   Your Divine Laser's cooldown is reduced by 1.`);

	initation++;

}

if(initation = 2) {
	console.log(`
	   HP: 1/50

		> Pray
		> Divine Laser
		> Run`);

DUEL2 = READLINE.question(`
	   > `);

}

if(DUEL2 == "pray" || DUEL2 == "Pray") {

	console.log(`
	   Your prayer failed!
	   Soldier attacked with a lance to deal 49 damage!
	   You now have -48 HP!
	   You fainted and blacked out!

	   Reinforcements arrive and crucify you.

*****************************************************************************

				    GAME OVER

*****************************************************************************`);
}

if(DUEL2 == "divine laser" || DUEL2 == "Divine Laser" && ready == 1) {

	console.log(`
	   You attacked the soldier with 100 power!
	   Soldier fainted!

	   You won the duel!

*****************************************************************************

	   You blasted the soldier into oblivion. All of a sudden, God appears.
  	   "I am disappointed in you Jesus, why have you committed murder?".
  	   You snap back,
  	   "You're not my [REDACTED]ing mom, you can't tell me
  	   what the hell I do!". 
  	   God is astonished, "Watch your mouth son, you know I can do anything to you".
  	   "Then why didn't you save me if I'm your son?"
  	   "Oh- well you see...".
  	   Then God beams you to heaven and you party for 2,018 years and humanity falls into ruin.

*****************************************************************************

				    GAME COMPLETE!

*****************************************************************************`);
}

else if(DUEL2 == "divine laser" || DUEL2 == "Divine Laser" && ready == 0) {

	console.log(`
	   Your Divine Laser still has 2 turn cooldown, and it failed.
	   Soldier attack with a lance to deal 49 damage!
	   You have have -48 HP!
	   You fainted and blacked out!

	   Reinforcements arrive and crucify you.

*****************************************************************************

				    GAME OVER

*****************************************************************************`);
}

else if(DUEL2 == "run" || DUEL2 == "Run") {

	console.log(`
	   You cannot run from a duel!
	   Soldier attacked with a lance to deal 49 damage!
	   You now have -48 HP!
	   You fainted and blacked out!

	   Reinforcements arrive and crucify you.

*****************************************************************************

				    GAME OVER

*****************************************************************************`);
}



	   
}
//node roman_empire.js
