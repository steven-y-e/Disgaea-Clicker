var kills = 0;
var exp = 0;
var mana = 0;

var generics = [
 new generic("Martial Artist", 0, 1, 100, 10, 100000), 
 new generic("Fight Mistress", 0, 1, 100, 10, 100000), 
 new generic("Warrior", 0, 1, 200, 20, 200000), 
 new generic("Valkyrie", 0, 1, 200, 20, 200000), 
 new generic("Mage", 0, 1, 300, 30, 300000), 
 new generic("Skull", 0, 1, 300, 30, 300000), 
 new generic("Priest", 0, 1, 400, 40, 400000), 
 new generic("Healer", 0, 1, 400, 40, 400000), 
 new generic("Thief", 0, 1, 500, 50, 500000), 
 new generic("Archer", 0, 1, 600, 60, 600000), 
 new generic("Magic Knight", 0, 1, 700, 70, 700000), 
 new generic("Ninja", 0, 1, 800, 80, 800000), 
 new generic("Samurai", 0, 1, 900, 90, 900000), 
 new generic("Gunner", 0, 1, 1000, 100, 1000000), 
 new generic("Armour Knight", 0, 1, 1100, 110, 1100000), 
 new generic("Angel", 0, 1, 1200, 120, 1200000), 
 new generic("Masked Hero", 0, 1, 1300, 130, 1300000)
];

function fight(number){
 kills = kills + number;
	document.getElementById('kills').innerHTML = kills;
 exp = exp + number;
	document.getElementById('exp').innerHTML = exp;
 mana = mana + number;
	document.getElementById('mana').innerHTML = mana;
}
function level_generic(unit){
 if (generics[unit].level < 1){
  var levelCost = generics[unit].baseCost;
  if (mana >= levelCost){
   generics[unit].level = 1;
   mana = mana - levelCost;
   document.getElementById('g' + unit + '_level').innerHTML = generics[unit].level; //updates the level of the unit
			document.getElementById('mana').innerHTML = mana;  			                           //updates the number amount of spendable mana
			document.getElementById('g' + unit + '_buy').innerHTML = levelUpButton(unit);    //replace create button with level up button
  }
 }
 else if (generics[unit].level < 999){	
		var levelCost = Math.floor((generics[unit].baseUpgrade) * Math.pow(1.1,generics[unit].level)); //works out the cost of level up
		if(exp >= levelCost){                                   	                             	        //checks that the player can afford the level up
			generics[unit].level = generics[unit].level + 1;                                              //increases level
			exp = exp - levelCost;                                                             			        //removes the exp spent
			document.getElementById('g' + unit + '_level').innerHTML = generics[unit].level;              //updates the level for the user
			document.getElementById('exp').innerHTML = exp;  	                                  		        //updates the exp for the user
			var nextCost = Math.floor(10 * Math.pow(1.1,generics[unit].level));                           //works out the cost of the next level
			document.getElementById('g' + unit + '_level_cost').innerHTML = nextCost;  	                  //updates the level cost for the user
		}
		if (generics[unit].level == 999){
			document.getElementById('g' + unit + '_next').innerHTML = reincarnateCost(unit);
			document.getElementById('g' + unit + '_buy').innerHTML = reincarnateButton(unit);
		}
		else {
			var nextCost = Math.floor(10 * Math.pow(1.1,generics[unit].level));       //works out the cost of the next level
			document.getElementById('g' + unit + '_level_cost').innerHTML = nextCost;	//updates the level cost for the user
		}
	}
	else {
		
	}
}

function levelUpButton(unit){
 return "<button type=\"button\" class=\"btn btn-lg btn-success\" onClick=\"level_generic(" + unit + ")\">Level Up</button>"
}

function reincarnateButton(unit){
 return "<button type=\"button\" class=\"btn btn-lg btn-warning\" onClick=\"level_generic(" + unit + ")\">Reincarnate</button>"
}

function reincarnateCost(unit){
 return "Mana to Reincarnate: " + (generics[unit].reincarnate * rank);
}

function generic(nme, lvl, rnk, cost, upg, reinc){
 this.name = nme;
 this.level = lvl;
 this.rank = rnk;
 this.baseCost = cost;
 this.baseUpgrade = upg;
 this.reincarnate = reinc;
}

window.setInterval(function(){
	fight(generics[0].level);
	fight(generics[1].level);
	fight(generics[3].level);
	fight(generics[4].level);
	fight(generics[5].level);
	fight(generics[6].level);
	fight(generics[7].level);
	fight(generics[8].level);
	fight(generics[9].level);
	fight(generics[10].level);
	fight(generics[11].level);
	fight(generics[12].level);
	fight(generics[13].level);
	fight(generics[14].level);
	fight(generics[15].level);
	fight(generics[16].level);
}, 1000);