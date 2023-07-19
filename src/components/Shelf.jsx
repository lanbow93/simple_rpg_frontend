import { gameDetails } from "../utils/gameDetails"


import ShopItem from "./ShopItem"
function Shelf(props){
    const setMenuFromChildComponent = (newMessage) => {props.setCurrentScreen(newMessage)}
    const targetObject = gameDetails[props.classType][props.category]
    const storeItemsToMap = Object.keys(targetObject)
    
    if(props.classType !== "generic") {
        storeItemsToMap.shift()
    }
    console.log(storeItemsToMap)
    return <div className="shelf">
        {storeItemsToMap.map( (item) =>  <ShopItem item={item} cost={targetObject[item].cost} setMessageToDisplay={props.setMessageToDisplay} key={item} /> )}
    </div>
}

export default Shelf