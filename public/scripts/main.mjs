//*-------------Game Object------------------
//? For module try setting to global?
import { Faction } from "./Faction.mjs";
import { draw } from "./Canvas.mjs";

var ThievesGuild = {};

//*---------Game Logic------------

ThievesGuild.begin = function() {
  //* Game Variables
  ThievesGuild.tick =0
  ThievesGuild.gold = 1;
  ThievesGuild.Factions = [];
  ThievesGuild.cost = 0;
  ThievesGuild.ready = 1;
  ThievesGuild.drawn = 0;

  ThievesGuild.initializeFactionObjects = function() {
    ThievesGuild.urchins = new Faction("urchins", 1, 0, 1.0, 1);
    ThievesGuild.pickpockets = new Faction("pickpockets", 50, 0, 1.0, 5);
    ThievesGuild.brutes = new Faction("brutes", 150, 0, 1.0, 10);
    ThievesGuild.graverobbers = new Faction("grave Robbers", 500, 0, 1.0, 25)
    ThievesGuild.Factions.push(ThievesGuild.urchins);
    ThievesGuild.Factions.push(ThievesGuild.pickpockets);
    ThievesGuild.Factions.push(ThievesGuild.brutes);
    ThievesGuild.Factions.push(ThievesGuild.graverobbers);
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

  ThievesGuild.incTick = function() {
    ThievesGuild.tick += 1;
  }

  ThievesGuild.resetTick = function() {
    ThievesGuild.tick = 0;
  }

};

window.onload=function() {
  window.ThievesGuild = ThievesGuild;
  ThievesGuild.begin();
};

//*------- Game Loop ----------------
//? Put Loop within Game Object? Or Not, just a suggestion
window.setInterval(function() {
  window.ThievesGuild = ThievesGuild;
  ThievesGuild.incTick()
  if (ThievesGuild.drawn != 1) {
    ThievesGuild.drawn = draw(document, ThievesGuild.Factions);
  }
  if (ThievesGuild.tick % 4 == 0) {
    ThievesGuild.resetTick();
    ThievesGuild.getGold();
  }
}, 250);

export { ThievesGuild }