var ThievesGuild = {};

function Faction(name, cost, owned, mult) {
    this.name = name;
    this.cost = cost;
    this.owned = owned;
    this.mult = mult;

    this.setMult = function(mul) {
        this.mult = mult;
    } 

    this.incOwned = function() {
        this.owned+=1;
    }
}

ThievesGuild.begin=function() {
    ThievesGuild.gold = 0;
    ThievesGuild.urchins = new Faction("Urchins", 0, 0, 0.0);
    ThievesGuild.cost = 0;
    ThievesGuild.ready = 1;

    ThievesGuild.getGold = function(){
        ThievesGuild.gold = ThievesGuild.gold + ThievesGuild.urchins.owned;
        document.getElementById("gold").innerHTML = ThievesGuild.gold;
        console.log(ThievesGuild.gold)    
    }

    ThievesGuild.buy = function(obj){
        if(ThievesGuild.gold >= ThievesGuild.urchins.cost){                                   //checks that the player can afford the cursor
            ThievesGuild.urchins.owned = ThievesGuild.urchins.owned + 1;                                   //increases number of cursors
            ThievesGuild.gold = ThievesGuild.gold - ThievesGuild.urchins.cost;                          //removes the cookies spent
            document.getElementById(obj+'Number').innerHTML = ThievesGuild.urchins.owned;  //updates the number of cursors for the user
            document.getElementById('gold').innerHTML = ThievesGuild.gold;  //updates the number of cookies for the user
        };
        ThievesGuild.urchins.cost = Math.floor(10 * Math.pow(1.1,ThievesGuild.urchins.owned));       //works out the cost of the next cursor
        document.getElementById(obj+'Cost').innerHTML = ThievesGuild.urchins.cost;  //updates the cursor cost for the user
    };
}

ThievesGuild.begin();

function buy(obj){
    ThievesGuild.buy(obj)
}

window.setInterval(function(){
    
    if(ThievesGuild.ready !=0){
        ThievesGuild.getGold();
    }
	
}, 1000);