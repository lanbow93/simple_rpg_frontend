import metalPlatingIcon from "../assets/metalPlatingIcon.png"
import maceIcon from "../assets/maceIcon.png"
import weakHealthPotionIcon from "../assets/weakHealthPotionIcon.png"


function ShopItem(props){
    return <div className="shopItem">
        <img src={metalPlatingIcon} alt="" />
        <p>10 Gold</p>
    </div>
}

export default ShopItem