import { gameDetails } from "../utils/gameDetails"


import ShopItem from "./ShopItem"
function Shelf(props){
    console.log(props)
    return <div className="shelf">
        <ShopItem />
        <ShopItem />
        <ShopItem />
    </div>
}

export default Shelf