import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"
import { useState } from "react"
import Store from "../components/Store"

function PlayPage(props){
    const location = useLocation()
    const {user} = location.state
    const [currentScreen, setCurrentScreen] = useState("home")
    const [messageToDisplay, setMessageToDisplay] = useState("Select An Option")
    const [previousScreen, setPreviousScreen] = useState("")
    const [selectedStoreItem, setSelectedStoreItem] = useState("")
    const [selectedItemPrice, setSelectedItemPrice] = useState(0)

    // Displays message on screen and stores item name and cost for possible purchase
    function handleItemSelected(message, item, cost){
        setMessageToDisplay(message)
        setSelectedStoreItem(item)
        setSelectedItemPrice(cost)
        
    }
    
    function goToHome(){
        setCurrentScreen("home")
        setMessageToDisplay("Select An Option")
    }
    function goToFight(){
        setCurrentScreen("fight")
        setMessageToDisplay("This is your setup\nAre you ready to fight?")
    }
    function goToStore(){
        setCurrentScreen("store")
        setMessageToDisplay("What would you like to purchase?")
        setPreviousScreen("home")
    }

    function goToInventory(){
        setCurrentScreen("inventory")
        setMessageToDisplay("Browsing Inventory")
    }

    function handlePurchase(){
        console.log(selectedStoreItem + selectedItemPrice)
    }

    const menuOptions = {
        home:
        <div className="homeOptions">
            <button onClick={ goToFight }>Fight</button>
            <button onClick={ goToStore } >Store</button>
            <button onClick={ goToInventory }>Inventory</button>
        </div>,
        store:
        <div className="storeOptions">
            <button onClick={previousScreen === "home" ? goToHome : ""}>Back</button>
            {selectedItemPrice === 0 ? <button onClick={handlePurchase} disabled>Purchase</button> : <button onClick={handlePurchase}>Purchase</button>}
        </div>
    }

    return <div className="playArea"> 
        {currentScreen === "home" ? <HomeScreen name={user.name} classType={user.classType} health={user.health} experience={user.experience}/> : currentScreen === "store" ? <Store classType={user.classType} handleItemSelected={handleItemSelected} /> : ""}
        {currentScreen === "home" ? <MessageBox borderStatus={"addBorder"} screenMessage={messageToDisplay}/> : <MessageBox borderStatus="" screenMessage={messageToDisplay} />  }
        {currentScreen === "home" ? <GameOptions borderStatus={"addBorder"} buttonOptions={menuOptions.home} /> : <GameOptions borderStatus="" buttonOptions={menuOptions.store} />  }
    </div>
}

export default PlayPage