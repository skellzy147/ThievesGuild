//*-------------Game Object------------------
var ThievesGuild = {};

//*------------Faction Object----------------
class Faction {
  constructor(name, cost, owned, mult, earns) {
    this.name = name;
    this.cost = cost;
    this.owned = owned;
    this.mult = mult;
    this.earns = earns;
  }

  //* Return name capitalised
  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  //? For Updates
  setMult(mul) {
    this.mult = mult;
  }

  incOwned(number) {
    this.owned += number;
  }

  //? Only buys 1 for now
  //* Specific buy function for each faction
  buy() {
    if (ThievesGuild.gold >= this.cost) {
      this.incOwned(1);
      ThievesGuild.gold = ThievesGuild.gold - this.cost;
      document.getElementById("gold").innerHTML = ThievesGuild.gold;
      this.cost = Math.floor(10 * Math.pow(1.1, ThievesGuild.urchins.owned));

      //TODO: update specific button instead of redrawing?
      ThievesGuild.draw();
    }
  }

  calculateGPS() {
    return this.earns * this.owned * this.mult;
  }
}

//*---------Game Logic------------
ThievesGuild.begin = function() {
  //* Game Variables
  ThievesGuild.gold = 0;
  ThievesGuild.Factions = [];

  ThievesGuild.cost = 0;
  ThievesGuild.ready = 1;
  ThievesGuild.drawn = 0;

  ThievesGuild.initializeFactionObjects = function() {
    ThievesGuild.urchins = new Faction("urchins", 0, 0, 1.0, 1);
    ThievesGuild.Factions.push(ThievesGuild.urchins);
  };

  //* Get Gold (TODO: Update to Get GPS)
  ThievesGuild.getGold = function() {
    for (var objIndex in ThievesGuild.Factions) {
      console.log(objIndex);
      ThievesGuild.gold += ThievesGuild.Factions[objIndex].calculateGPS();
    }
    //ThievesGuild.gold = ThievesGuild.gold + ThievesGuild.urchins.calculateGPS();
    document.getElementById("gold").innerHTML = ThievesGuild.gold;
  };

  //* Draw Actual UI
  ThievesGuild.draw = function() {
    ThievesGuild.drawButton(ThievesGuild.urchins);
    ThievesGuild.drawn = 1;
  };

  //* Add buttons for each faction
  ThievesGuild.drawButton = function(faction) {
    var buttonStr =
      '<li> <div class="hexagon" onclick=\'ThievesGuild.' +
      faction.name +
      '.buy("' +
      faction.name +
      " \")'> <p> <span >" +
      faction.getName() +
      ': </span> <span id="' +
      faction.name +
      'Number">' +
      faction.owned +
      '</span><br><span>Cost:</span><span id="' +
      faction.name +
      'Cost">' +
      faction.cost +
      "</span> </p></div></li>";
    document.getElementById("grid").innerHTML = buttonStr;
  };
};

ThievesGuild.begin();

//*------- Game Loop ----------------
//? Put Loop within Game Object? Or Not, just a suggestion
window.setInterval(function() {
  if (ThievesGuild.drawn != 1) {
    ThievesGuild.draw();
  }

  if (ThievesGuild.ready != 0) {
    ThievesGuild.getGold();
  }
}, 1000);
