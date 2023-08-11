import { imageProvider } from "../utils/imageProvider"

// Handles when item is clicked in store
function handleSelection(itemName, itemObject, changeDisplayCallback){
    const properName = itemName.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
    let sentence = ""
    if(itemObject.defense){
        sentence = `${properName} will defend for ${itemObject.defense} points`
    } else if(itemObject.damage){
        sentence = `${properName} adds ${itemObject.damage} damage`

    } else if(itemObject.heal){
        sentence = `${properName} will heal for ${itemObject.heal} points`
    } else {
    }
    changeDisplayCallback(sentence, itemName, itemObject.cost)
}

function ShopItem(props){
    return <div className="shopItem" value={props.item} onClick={(e) => handleSelection(props.item, props.itemDetails, props.handleItemSelected ) } >
        <img src={imageProvider(props.item)}  />
        <p>{props.itemDetails.cost} Gold</p>
    </div>
}

export default ShopItem