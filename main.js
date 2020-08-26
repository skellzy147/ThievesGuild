var gold = 10;

function getGold(number){
    gold = gold + number;
    document.getElementById("gold").innerHTML = gold;
};

var urchins = 0;
var cost = 0;

function buy(obj){
    var cost = Math.floor(10 * Math.pow(1.1,urchins));     //works out the cost of this cursor
    if(gold >= cost){                                   //checks that the player can afford the cursor
        urchins = urchins + 1;                                   //increases number of cursors
    	gold = gold - cost;                          //removes the cookies spent
        document.getElementById(obj+'Number').innerHTML = urchins;  //updates the number of cursors for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of cookies for the user
    };
    var cost = Math.floor(10 * Math.pow(1.1,urchins));       //works out the cost of the next cursor
    document.getElementById(obj+'Cost').innerHTML = cost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	getGold(urchins);
	
}, 1000);