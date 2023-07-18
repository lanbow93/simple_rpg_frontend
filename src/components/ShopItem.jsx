import metalPlatingIcon from "../assets/metalPlatingIcon.png"
import maceIcon from "../assets/maceIcon.png"
import weakHealthPotionIcon from "../assets/weakHealthPotionIcon.png"


function ShopItem(props){
    console.log(props)
    return <div className="shopItem">
        <img src={metalPlatingIcon} alt="" />
        <p>{props.cost} Gold</p>
    </div>
}

export default ShopItem