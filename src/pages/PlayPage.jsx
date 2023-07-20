import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"
import { useState } from "react"
import Store from "../components/Store"
import { URL } from "../utils/url"
import InventoryScreen from "../components/InventoryScreen"

function PlayPage(props){
    const location = useLocation()
    const {user} = location.state
    const [currentScreen, setCurrentScreen] = useState("home")
    const [currentGold, setCurrentGold] = useState(user.gold)
    const [messageToDisplay, setMessageToDisplay] = useState("Select An Option")
    const [previousScreen, setPreviousScreen] = useState("")
    const [selectedStoreItem, setSelectedStoreItem] = useState("")
    const [selectedItemPrice, setSelectedItemPrice] = useState(0)
    // Post to backend to save character state
    const saveCharacterState = async () => {
        const response = await fetch(URL + "/character/" + user._id, {
            method: "put",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(user)
        })
    }
    // Displays message on screen and stores item name and cost for possible purchase
    function handleItemSelected(message, item, cost){
        setMessageToDisplay(message)
        setSelectedStoreItem(item)
        setSelectedItemPrice(cost)
    }

    // Initial functions to change the screen state
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
        setPreviousScreen(currentScreen)
        setCurrentScreen("inventory")
        setMessageToDisplay("Browsing Inventory")
        
    }
    // Function to purchase on parent to trigger change in child components
    async function handlePurchase(){
        // Verifying that character has enough money
        if(selectedItemPrice > 0 && currentGold >= selectedItemPrice) {
            setCurrentGold(currentGold - selectedItemPrice)
            user.gold -= selectedItemPrice
            user.inventory.push(selectedStoreItem)
            await saveCharacterState()
            setMessageToDisplay(`You have purchased the ${selectedStoreItem}.\nRemaining Gold: ${user.gold}`)
        } else {
            setMessageToDisplay(`You do not have enough gold to purchase the ${selectedStoreItem}`)
        }
    }
    // Way to determine what buttons are put on the screen
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
        </div>,
        inventory:
        <div className="inventoryOptions">
            <h1>Inventory</h1>
        </div>
    }

    return <div className="playArea"> 
        {/* Content Section */}
        {currentScreen === "home" ? <HomeScreen name={user.name} classType={user.classType} health={user.health} experience={user.experience} gold={currentGold}/> : currentScreen === "store" ? <Store classType={user.classType} handleItemSelected={handleItemSelected} /> : currentScreen === "inventory" ? <InventoryScreen inventory={user.inventory} /> : "" }
        {/* Message box Section */}
        {currentScreen === "home" ? <MessageBox borderStatus={"addBorder"} screenMessage={messageToDisplay}/> : <MessageBox borderStatus="" screenMessage={messageToDisplay} />  }
        {/* Buttons Section */}
        {currentScreen === "home" ? <GameOptions borderStatus={"addBorder"} buttonOptions={menuOptions.home} /> : <GameOptions borderStatus="" buttonOptions={menuOptions.store} />  }
    </div>
}

export default PlayPage