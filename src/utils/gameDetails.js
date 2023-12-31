export const gameDetails = {
    wizard: {
        weapons: {
            wand: {
                damage: 3,
                cost: 5,
            },
            staff: {
                damage: 4,
                cost: 10
            },
            grimoire: {
                damage: 6,
                cost: 20
            },
            relic: {
                damage: 8,
                cost: 30
            }
        },
        armors: {
            "novice robe":{
                defense: 1,
                cost: 5
            },
            "apprentice robe":{
                defense: 4,
                cost: 10
            },
            "journeyman robe":{
                defense: 6,
                cost: 20
            },
            "archmage robe":{
                defense: 8,
                cost: 30
            }
        },
        stats: {
            health: 20
        }
    },
    warrior: {
        weapons: {
            sword: {
                damage: 3,
                cost: 5
            },
            mace: {
                damage: 4,
                cost: 10
            },
            broadsword: {
                damage: 6,
                cost: 20
            },
            "master sword": {
                damage: 8,
                cost: 30
            }
        },
        armors: {
            chainmail:{
                defense: 1,
                cost: 5
            },
            "metal plating":{
                defense: 4,
                cost: 10
            },
            "diamond plating":{
                defense: 6,
                cost: 20
            },
            "adamantine plating": {
                defense: 8,
                cost: 30
            }
        },
        stats: {
            health: 20
        }
    },
    rogue: {
        weapons: {
            bow: {
                damage: 3,
                cost: 5
            },
            "poisoned bow": {
                damage: 4,
                cost: 10
            },
            dagger: {
                damage: 6,
                cost: 20
            },
            "poisoned dagger": {
                damage: 8,
                cost: 30
            }
        },
        armors: {
            cloak:{
                defense: 1,
                cost: 5
            },
            "assassin's mantle": {
                defence: 4,
                cost: 10
            },
            "veil of shadows":{
                defense: 6,
                cost: 20
            },
            "reaper's robe":{
                defense: 8,
                cost: 30
            },
        },
        stats: {
            health: 20
        }
    },
    slime:{
        stats: {
            health: 10,
            attack: 2,
            defense: 2,
            experience: 3
        },
        inventory: {
            weapon: "ooze",
            armor: "goo",
            gold: 3
        }
    },
    werewolf:{
        stats: {
            health: 15,
            attack: 3,
            defense: 3,
            experience: 5
        },
        inventory: {
            weapon: "claws",
            armor: "fur",
            gold: 5
        }
    },
    dragon:{
        stats: {
            health: 20,
            attack: 5,
            defense: 5,
            experience: 7
        },
        inventory: {
            weapon: "fire breath",
            armor: "scales",
            gold: 10
        }
    },
    generic: {
        items: {
            "weak potion": {
                heal: 7,
                cost: 10
            },
            potion:{
                heal: 10,
                cost: 20
            },
            "strong potion": {
                heal: 15,
                cost: 30
            }
        },
        names: ["Drakonis", "Morbos", "Zephyrion", "Nyxar", "Xalos", "Vexalor", "Gloomfang", "Zaroth", "Vorgrath", "Lunaris", "Azgul", "Rendragor", "Sylvaris", "Zoltan", "Necronyx", "Frostbite", "Dreadmaw", "Venomshade", "Shadowclaw", "Ragnarok", "Rimuru Tempest"]
    }
}