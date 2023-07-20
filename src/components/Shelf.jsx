import { gameDetails } from "../utils/gameDetails"


import ShopItem from "./ShopItem"
function Shelf(props){
    const targetObject = gameDetails[props.classType][props.category]
    const storeItemsToMap = Object.keys(targetObject)

    
    if(props.classType !== "generic") {
        storeItemsToMap.shift()
    }
    return <div className="shelf">
        {storeItemsToMap.map( (item) =>  <ShopItem item={item} itemDetails={targetObject[item]} handleItemSelected={props.handleItemSelected} key={item} /> )}
    </div>
}

export default Shelf