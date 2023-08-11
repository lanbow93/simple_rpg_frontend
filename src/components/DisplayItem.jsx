import { imageProvider } from "../utils/imageProvider"

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
        sentence = "I have no idea how you selected this"
    }
    // Callback prop passed to change sibling component on parent component
    changeDisplayCallback(sentence, itemName, itemObject.cost)
}

function DisplayItem(props){
    const properName = props.item.replace(/^(.)|\s+(.)/g, c => c.toUpperCase()) // Used to uppercase
    return <div className="displayItem" value={props.item} onClick={(e) => handleSelection(props.item, props.itemDetails, props.handleItemSelected ) } >
        <img src={ imageProvider(props.item)}  />
        <p>{properName}</p>
        <p>{props.itemDetails.cost} Gold</p> 
    </div>
}

export default DisplayItem