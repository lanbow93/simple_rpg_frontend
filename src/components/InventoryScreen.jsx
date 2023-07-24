
import { gameDetails } from "../utils/gameDetails"
import DisplayItem from "./DisplayItem"

function InventoryScreen(props) {
    // Pulls the object that includes character
    const characterBuildObject = gameDetails[props.classType].weapons ? "" : ""
    return <div className="inventoryDisplay">
        <div className="inventorySection">
            <h1>INVENTORY</h1>
            <div className="itemSection">
                <div className="itemArea">
                    {props.inventory.map((item) => <DisplayItem item={item} itemDetails={""} handleItemSelected={props.handleItemSelected}/>)}
                </div>
            </div>
        </div>
    </div>
}

export default InventoryScreen

// ShopItem item={item} itemDetails={targetObject[item]} handleItemSelected={props.handleItemSelected} key={item} />