import wizardIcon from "../assets/wizard.png"
import warriorIcon from "../assets/warrior.png"
import rogueIcon from "../assets/rogue.png"
import slimeIcon from "../assets/slime.png"
import werewolfIcon from "../assets/werewolf.png"
import dragonIcon from "../assets/dragon.png"
import basicArmorIcon from "../assets/basicArmorIcon.png"
import metalPlatingIcon from "../assets/metalPlatingIcon.png"
import diamondArmorIcon from "../assets/diamondArmorIcon.png"
import goldArmorIcon from "../assets/goldArmorIcon.png"
import broadswordIcon from "../assets/broadswordIcon.png"
import masterSwordIcon from "../assets/masterSwordIcon.png"
import maceIcon from "../assets/maceIcon.png"
import weakHealthPotionIcon from "../assets/weakHealthPotionIcon.png"
import healthPotionIcon from "../assets/healthPotionIcon.png"
import strongHealthPotionIcon from "../assets/strongHealthPotionIcon.png"
import skullIcon from "../assets/crossbones.png"
;import rimuruIcon from "../assets/rimuruTempest.png"

export function imageProvider(item){
    switch(item){
        // Character Images
        case "wizard":
            return wizardIcon;
        case "warrior":
            return warriorIcon;
        case "rogue":
            return rogueIcon;
        // Monster Images
        case "slime":
            return slimeIcon;
        case "werewolf":
            return werewolfIcon
        case "dragon":
            return dragonIcon
        // Wizard Weapons
        case "wand":
            return maceIcon
        case "staff":
            return maceIcon          
        case "grimoire":
            return maceIcon
        case "relic":
            return maceIcon
        // Warrior Weapons
        case "sword":
            return maceIcon
        case "mace":
            return maceIcon
        case "broadsword":
            return broadswordIcon
        case "master sword":
            return masterSwordIcon
        // Rogue Weapons
        case "bow":
            return maceIcon
        case "poisoned bow":
            return maceIcon
        case "dagger":
            return maceIcon
        case "poisoned dagger":
            return maceIcon
        // Wizard Armor
        case "novice robe":
            return metalPlatingIcon
        case "apprentice robe":
            return metalPlatingIcon
        case "journeyman robe":
            return metalPlatingIcon
        case "archmage robe":
            return metalPlatingIcon
        // Warrior Armor
        case "chainmail":
            return basicArmorIcon
        case "metal plating":
            return metalPlatingIcon
        case "diamond plating":
            return goldArmorIcon
        case "adamantine plating":
            return diamondArmorIcon
        // Rogue Armor
        case "cloak":
            return metalPlatingIcon
        case "assassin's mantle":
            return metalPlatingIcon
        case "veil of shadows":
            return metalPlatingIcon
        case "reaper's robe":
            return metalPlatingIcon
        // Potions
        case "weak potion":
            return weakHealthPotionIcon
        case "potion":
            return healthPotionIcon
        case "strong potion":
            return strongHealthPotionIcon
        // Gameover
        case "skull":
            return skullIcon
        // Easter egg
        case "rimuru":
            return rimuruIcon
        default:
            break
    }
}

