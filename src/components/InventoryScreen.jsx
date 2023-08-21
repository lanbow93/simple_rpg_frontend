// PARENT COMPONENT(S) - PlayPage
import { gameDetails } from "../utils/gameDetails"
import DisplayItem from "./DisplayItem"

// Needed to pass the correct item object to be accessed by the DisplayItem child component
function determineItemObject(classType, item){
    if (gameDetails[classType].weapons[item]){
        return  gameDetails[classType].weapons[item]
    }

    if (gameDetails[classType].armors[item]){
        return  gameDetails[classType].armors[item]
    }

    if (gameDetails.generic.items[item]){
        return gameDetails.generic.items[item]
    }
}

function InventoryScreen(props) {
    return <div className="inventoryDisplay">
        <h1>INVENTORY</h1>
        <div className="itemSection">
            <div className="statsInventoryScreen">
                <p>Health: {props.health}/20</p>
                <p>Gold: {props.gold}</p>
            </div>
            <div className="itemArea">
                <div className="inventoryItems">
                {props.inventory.map((item, index) => <DisplayItem item={item} itemDetails={determineItemObject(props.classType,item)} handleItemSelected={props.handleItemSelected} key={item + index} />)}
                </div>
            </div>
        </div>
    </div>
}

export default InventoryScreen

// ShopItem item={item} itemDetails={targetObject[item]} handleItemSelected={props.handleItemSelected} key={item} />