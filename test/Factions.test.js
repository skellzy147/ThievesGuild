import { Faction } from '../public/scripts/Faction.mjs'

describe("Faction", () => {
    var testFaction = new Faction("pickpockets", 50, 0, 1.0, 5)
    
    test("constructor should create a faction correctly", () => {
        expect(testFaction).not.toBeNull()
    })
    test("getName returns pretty name", () => {
        expect(testFaction.getName()).toBe("Pickpockets")
    })
    test("setMult sets multiplier", () => {
        testFaction.setMult(2.0)
        expect(testFaction.mult).toBe(2.0)
        testFaction.setMult(1.0)
        expect(testFaction.mult).toBe(1.0)
    })
    test("incOwned increments owned", () => {
        testFaction.incOwned(2)
        expect(testFaction.owned).toBe(2)
    })
});