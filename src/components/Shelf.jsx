import { gameDetails } from "../utils/gameDetails"


import ShopItem from "./ShopItem"
function Shelf(props){

    const targetObject = gameDetails[props.classType][props.category]

    const storeItemsToMap = Object.keys(targetObject)
    if(props.classType !== "generic") {
        storeItemsToMap.shift()
    }
    console.log(storeItemsToMap)
    return <div className="shelf">
        {storeItemsToMap.map( (item) =>  <ShopItem item={item} classType={props.classType} cost={targetObject[item].cost} /> )}
    </div>
}

export default Shelf