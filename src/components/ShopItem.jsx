import metalPlatingIcon from "../assets/metalPlatingIcon.png"
import maceIcon from "../assets/maceIcon.png"
import weakHealthPotionIcon from "../assets/weakHealthPotionIcon.png"


function ShopItem(props){
    console.log(props)
    return <div className="shopItem">
        <img src={props.itemType === "weapons" ? maceIcon : props.itemType === "armors" ? metalPlatingIcon : weakHealthPotionIcon} alt={`image of ${props.item}`} />
        <p>{props.cost} Gold</p>
    </div>
}

export default ShopItem