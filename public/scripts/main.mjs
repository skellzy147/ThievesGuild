//*-------------Game Object------------------
//? For module try setting to global?
import { Faction } from './Faction.mjs'

var ThievesGuild = {};

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
    ThievesGuild.pickpockets = new Faction("pickpockets", 50, 0, 1.0, 5)
    ThievesGuild.Factions.push(ThievesGuild.urchins);
    ThievesGuild.Factions.push(ThievesGuild.pickpockets);
  };

  ThievesGuild.initializeFactionObjects();

  //* Get Gold
  // TODO: Recalculate GPS
  ThievesGuild.getGold = function() {
    var GPS = 0;
    for (var objIndex in ThievesGuild.Factions) {
      GPS += ThievesGuild.Factions[objIndex].calculateGPS();
    }
    ThievesGuild.gold += GPS;
    document.getElementById("gps").innerHTML = GPS;
    document.getElementById("gold").innerHTML = ThievesGuild.gold;
  };

  //* Draw Actual UI
  ThievesGuild.draw = function() {
    var buttonStr = '';
    for (var objIndex in ThievesGuild.Factions) {
      buttonStr += ThievesGuild.drawButton(ThievesGuild.Factions[objIndex]);
    }
    document.getElementById("grid").innerHTML = buttonStr;
    ThievesGuild.drawn = 1;
  };

  //* Add buttons for each faction
  ThievesGuild.drawButton = function(faction) {
    return '<li> <div class="hexagon" onclick=\'ThievesGuild.' +
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
    
  };
};

ThievesGuild.begin();

//*------- Game Loop ----------------
//? Put Loop within Game Object? Or Not, just a suggestion
window.setInterval(function() {
  window.ThievesGuild = ThievesGuild;
  if (ThievesGuild.drawn != 1) {
    ThievesGuild.draw();
  }

  if (ThievesGuild.ready != 0) {
    ThievesGuild.getGold();
  }
}, 1000);
