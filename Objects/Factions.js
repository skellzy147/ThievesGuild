export default class Faction {
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
}