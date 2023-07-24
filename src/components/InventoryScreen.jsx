
import { gameDetails } from "../utils/gameDetails"
import DisplayItem from "./DisplayItem"

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
    // Pulls the object that includes character
    

    return <div className="inventoryDisplay">
        <div className="inventorySection">
            <h1>INVENTORY</h1>
            <div className="itemSection">
                <div className="itemArea">
                    {props.inventory.map((item) => <DisplayItem item={item} itemDetails={determineItemObject(props.classType,item)} handleItemSelected={props.handleItemSelected}/>)}
                </div>
            </div>
        </div>
    </div>
}

export default InventoryScreen

// ShopItem item={item} itemDetails={targetObject[item]} handleItemSelected={props.handleItemSelected} key={item} />