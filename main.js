//*-------------Game Object------------------
var ThievesGuild = {};

//*------------Faction Object----------------
class Faction {
    constructor(name, cost, owned, mult) {
    this.name = name;
    this.cost = cost;
    this.owned = owned;
    this.mult = mult;
    }

    //? For Updates
    setMult = function(mul) {
        this.mult = mult;
    } 


    incOwned = function(number) {
        this.owned+=number;
    }

    //? Only buys 1 for now
    //* Specific buy function for each faction
    buy = function() {
        if(ThievesGuild.gold >= this.cost){                                  
            this.incOwned(1)                                   
            ThievesGuild.gold = ThievesGuild.gold - this.cost;                         
            document.getElementById('gold').innerHTML = ThievesGuild.gold;
            this.cost = Math.floor(10 * Math.pow(1.1,ThievesGuild.urchins.owned)); 
            
            //TODO: update specific button instead of redrawing?
            ThievesGuild.draw();
        };
    }
}

//*---------Game Logic------------
ThievesGuild.begin=function() {
    
    //* Game Variables
    ThievesGuild.gold = 0;
    ThievesGuild.urchins = new Faction("urchins", 0, 0, 0.0);
    ThievesGuild.cost = 0;
    ThievesGuild.ready = 1;
    ThievesGuild.drawn = 0;

    //* Get Gold (TODO: Update to Get GPS)
    ThievesGuild.getGold = function(){
        ThievesGuild.gold = ThievesGuild.gold + ThievesGuild.urchins.owned;
        document.getElementById("gold").innerHTML = ThievesGuild.gold; 
    }

    //* Draw Actual UI
    ThievesGuild.draw=function() {
        ThievesGuild.drawButton(ThievesGuild.urchins)
        ThievesGuild.drawn = 1;
    }

    //* Add buttons for each faction
    ThievesGuild.drawButton=function(faction) {
        var buttonStr = "<li> <div class=\"hexagon\" onclick='ThievesGuild."+ faction.name +".buy(\"" +faction.name+" \")'> <p> <span >" 
                        +faction.name+": </span> <span id=\""+faction.name+"Number\">"+ faction.owned +"</span><br><span>Cost:</span><span id=\""
                        +faction.name+"Cost\">"
                        +faction.cost+"</span> </p></div></li>";
        document.getElementById('grid').innerHTML = buttonStr;
    };
}

ThievesGuild.begin();

//*------- Game Loop ----------------
//TODO: Put Loop within Game Object? Or Not, just a suggestion
window.setInterval(function(){
    if(ThievesGuild.drawn !=1){
        ThievesGuild.draw();
    }
    
    if(ThievesGuild.ready !=0){
        ThievesGuild.getGold();
    }
	
}, 1000);
