import basicArmorIcon from "../assets/basicArmorIcon.png"
import basicSwordIcon from "../assets/basicSwordIcon.png"
import metalPlatingIcon from "../assets/metalPlatingIcon.png"
import diamondArmorIcon from "../assets/diamondArmorIcon.png"
import goldArmorIcon from "../assets/goldArmorIcon.png"
import broadswordIcon from "../assets/broadswordIcon.png"
import masterSwordIcon from "../assets/masterSwordIcon.png"
import maceIcon from "../assets/maceIcon.png"
import weakHealthPotionIcon from "../assets/weakHealthPotionIcon.png"
import healthPotionIcon from "../assets/healthPotionIcon.png"
import strongHealthPotionIcon from "../assets/strongHealthPotionIcon.png"


function determineImageToUse(itemName){
    switch (itemName) {
        // Weapons
        case "staff":
            return maceIcon          
        case "grimoire":
            return maceIcon
        case "relic":
            return maceIcon
        case "sword":
            return basicSwordIcon
        case "mace":
            return maceIcon
        case "broadsword":
            return broadswordIcon
        case "master sword":
            return masterSwordIcon
        case "poisoned bow":
            return maceIcon
        case "dagger":
            return maceIcon
        case "poisoned dagger":
            return maceIcon
        // Armor
        case "novice robe":
            return metalPlatingIcon
        case "apprentice robe":
            return metalPlatingIcon
        case "journeyman robe":
            return metalPlatingIcon
        case "archmage robe":
            return metalPlatingIcon
        case "chainmail":
            return basicArmorIcon
        case "metal plating":
            return metalPlatingIcon
        case "diamond plating":
            return goldArmorIcon
        case "adamantine plating":
            return diamondArmorIcon
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
        default:
            break;
    }

}

// Handles when item is clicked in store
function handleSelection(itemName, itemObject, changeDisplayCallback){
    let sentence = ""
    if(itemObject.defense){
        sentence = `${itemName} will defend for ${itemObject.defense} points.`
    } else if(itemObject.damage){
        sentence = `${itemName} adds ${itemObject.damage} damage`

    } else if(itemObject.heal){
        sentence = `${itemName} will heal for ${itemObject.heal} points`
    } else {

    }

    // Callback prop passed to change sibling component on parent component
    changeDisplayCallback(sentence, itemName, itemObject.cost)
}

function DisplayItem(props){
    const properName = props.item.replace(/^(.)|\s+(.)/g, c => c.toUpperCase()) // Used to uppercase
    return <div className="displayItem" value={props.item} onClick={(e) => handleSelection(props.item, props.itemDetails, props.handleItemSelected ) } >
        <img src={ determineImageToUse(props.item)}  />
        <p>{properName}</p>
        <p>{props.itemDetails.cost} Gold</p> 
    </div>
}

export default DisplayItem