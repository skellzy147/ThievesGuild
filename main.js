var ThievesGuild = {};

class Faction {
    constructor(name, cost, owned, mult) {
    this.name = name;
    this.cost = cost;
    this.owned = owned;
    this.mult = mult;
    }

    setMult = function(mul) {
        this.mult = mult;
    } 

    incOwned = function() {
        this.owned+=1;
    }

    buy = function() {
        if(ThievesGuild.gold >= this.cost){                                   //checks that the player can afford the cursor
            this.incOwned()                                   //increases number of cursors
            ThievesGuild.gold = ThievesGuild.gold - this.cost;                          //removes the cookies spent
            document.getElementById('gold').innerHTML = ThievesGuild.gold;
            this.cost = Math.floor(10 * Math.pow(1.1,ThievesGuild.urchins.owned));  //updates the number of cookies for the user
            ThievesGuild.draw();
        };
    }
}

ThievesGuild.begin=function() {
    ThievesGuild.gold = 0;
    ThievesGuild.urchins = new Faction("urchins", 0, 0, 0.0);
    ThievesGuild.cost = 0;
    ThievesGuild.ready = 1;
    ThievesGuild.drawn = 0;

    ThievesGuild.getGold = function(){
        ThievesGuild.gold = ThievesGuild.gold + ThievesGuild.urchins.owned;
        document.getElementById("gold").innerHTML = ThievesGuild.gold; 
    }

    ThievesGuild.draw=function() {
        ThievesGuild.drawButton(ThievesGuild.urchins)
        ThievesGuild.drawn = 1;
    }

    ThievesGuild.drawButton=function(faction) {
        var buttonStr = "<li> <div class=\"hexagon\" onclick='ThievesGuild."+ faction.name +".buy(\"" +faction.name+" \")'> <p> <span >" 
                        +faction.name+": </span> <span id=\""+faction.name+"Number\">"+ faction.owned +"</span><br><span>Cost:</span><span id=\""
                        +faction.name+"Cost\">"
                        +faction.cost+"</span> </p></div></li>";
        document.getElementById('grid').innerHTML = buttonStr;
    };
}

ThievesGuild.begin();

window.setInterval(function(){
    if(ThievesGuild.drawn !=1){
        ThievesGuild.draw();
    }
    
    if(ThievesGuild.ready !=0){
        ThievesGuild.getGold();
    }
	
}, 1000);
