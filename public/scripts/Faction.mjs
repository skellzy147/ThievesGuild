/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ThievesGuild } from './main.mjs'
class Faction {
    constructor(name, cost, owned, mult, earns) {
      this.name = name;
      this.cost = cost;
      this.basecost = cost;
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
      this.mult = mul;
    }
  
    incOwned(number) {
      this.owned += number;
    }
  
    //? Only buys 1 for now
    //TODO move this logic out
    //* Specific buy function for each faction
    buy(number) {
      if (ThievesGuild.gold >= this.cost) {
        this.incOwned(number);
        ThievesGuild.gold = ThievesGuild.gold - this.cost;
        document.getElementById("gold").innerHTML = ThievesGuild.gold;
        this.cost = Math.floor(this.basecost * Math.pow(1.08, this.owned));
        ThievesGuild.drawn = 0;
      }
    }
  
    calculateGPS() {
      return this.earns * this.owned * this.mult;
    }
  }
export { Faction }