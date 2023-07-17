export const Details = {
    wizard: {
        weapons: {
            wand: {
                damage: 2,
                cost: 10
            },
            staff: {
                damage: 4,
                cost: 20
            },
            grimoire: {
                damage: 6,
                cost: 30
            }
        },
        armors: {
            "novice robe":{
                defense: 2,
                cost: 10
            },
            "apprentice robe":{
                defense: 4,
                cost: 20
            },
            "master robe":{
                defense: 6,
                cost: 30
            },
        },
        stats: {
            health: 20
        }
    },
    warrior: {
        weapons: {
            sword: {
                damage: 2,
                cost: 10
            },
            mace: {
                damage: 4,
                cost: 20
            },
            broadsword: {
                damage: 6,
                cost: 30
            }
        },
        armors: {
            chainmail:{
                defense: 2,
                cost: 10
            },
            "metal plating":{
                defense: 4,
                cost: 20
            },
            "diamond plating":{
                defense: 6,
                cost: 30
            },
        },
        stats: {
            health: 20
        }
    },
    rogue: {
        weapons: {
            bow: {
                damage: 2,
                cost: 10
            },
            dagger: {
                damage: 4,
                cost: 20
            },
            "poisoned dagger": {
                damage: 6,
                cost: 30
            }
        },
        armors: {
            "cloak":{
                defense: 2,
                cost: 10
            },
            "veil of mystery":{
                defense: 4,
                cost: 20
            },
            "reaper's robe":{
                defense: 6,
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
            attack: 1,
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
    }
}