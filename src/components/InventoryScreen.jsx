import ShopItem from "./ShopItem"
import { gameDetails } from "../utils/gameDetails"

function InventoryScreen(props) {
    // Pulls the object that includes character
    const characterBuildObject = gameDetails[props.classType].weapons ? "" : ""
    return <div className="inventoryDisplay">
        <div className="inventorySection">
            <h1>INVENTORY</h1>
            <div className="itemSection">
                {props.inventory.map((item) => <ShopItem item={item} itemDetails={""} handleItemSelected={props.handleItemSelected}/>)}
            </div>
        </div>
    </div>
}

export default InventoryScreen

// ShopItem item={item} itemDetails={targetObject[item]} handleItemSelected={props.handleItemSelected} key={item} />