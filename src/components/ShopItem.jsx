import armorIcon from "../assets/armorIcon.png"
function ShopItem(props){
    return <div className="shopItem">
        <img src={armorIcon} alt="" />
        <p>10</p>
    </div>
}

export default ShopItem