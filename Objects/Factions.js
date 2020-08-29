/* eslint-disable no-unused-vars */
export default class Faction {
    constructor(name, cost, owned, mult) {
    this.name = name;
    this.cost = cost;
    this.owned = owned;
    this.mult = mult;
    }

    setMult(mul) {
        this.mult = mul;
    } 

    incOwned() {
        this.owned+=1;
    }
}