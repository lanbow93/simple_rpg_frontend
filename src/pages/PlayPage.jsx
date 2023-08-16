import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"
import { useState } from "react"
import Store from "../components/Store"
import { URL } from "../utils/url"
import { gameDetails } from "../utils/gameDetails"
import InventoryScreen from "../components/InventoryScreen"
import FightScreen from "../components/FightScreen"

function PlayPage(props){
    const location = useLocation()
    const {user} = location.state
    const [currentScreen, setCurrentScreen] = useState("home")
    const [currentGold, setCurrentGold] = useState(user.gold)
    const [messageToDisplay, setMessageToDisplay] = useState("Select An Option")
    const [previousScreen, setPreviousScreen] = useState("")
    const [selectedStoreItem, setSelectedStoreItem] = useState("")
    const [selectedItemPrice, setSelectedItemPrice] = useState(0)
    const [selectedInventoryItem, setSelectedInventoryItem] = useState("")
    const [selectedInventoryItemPrice, setSelectedInventoryItemPrice] = useState(0)
    const [currentExperience, setCurrentExperience] = useState(user.experience)
    const [currentEnemyName, setCurrentEnemyName] = useState("")
    const [currentEnemyType, setCurrentEnemyType] = useState("")
    const [currentEnemyHealth, setCurrentEnemyHealth] = useState(0)
    const [currentUserHealth , setCurrentUserHealth] = useState(user.health)

    // Post to backend to save character state
    const saveCharacterState = async () => {
        const response = await fetch(URL + "/character/" + user._id, {
            method: "put",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(user)
        })
    }
    // Selecting enemy based on experience, assigning random name
    function generateEnemy(){
        if(currentExperience < 30) {
            setCurrentEnemyType("slime")
            setCurrentEnemyHealth(gameDetails.slime.stats.health)
        } else if(currentExperience < 50){
            setCurrentEnemyType("werewolf")
            setCurrentEnemyHealth(gameDetails.werewolf.stats.health)
        } else {
            setCurrentEnemyType("dragon")
            setCurrentEnemyHealth(gameDetails.dragon.stats.health)
        }
        
        // Setting random name
        setCurrentEnemyName(gameDetails.generic.names[Math.floor(Math.random()*gameDetails.generic.names.length)])

        console.log({currentEnemyName})
    }
    // Displays message on screen and stores item name and cost for possible purchase
    function handleItemSelected(message, item, cost){
        setMessageToDisplay(message)
        setSelectedStoreItem(item)
        setSelectedItemPrice(cost)
    }

    // Effects of when item is clicked in inventory menu
    function handleInventoryItemSelected(message, item, cost){
        setMessageToDisplay(message)
        setSelectedInventoryItem(item)
        setSelectedInventoryItemPrice(cost)
    }

    // Functions need to change the screen state
    function goToHome(){
        setPreviousScreen(currentScreen)
        setCurrentScreen("home")
        setMessageToDisplay("Select An Option")
        setSelectedStoreItem("")
        setSelectedItemPrice(0)
        setSelectedInventoryItemPrice(0)
        setSelectedInventoryItem("")
    }
    // Required due to if added to goToFight, will cause delayed component re-render
    function handleFightMessage(){
        setMessageToDisplay(`${user.name} currently has the ${user.weapon} and ${user.armor} equipped. A ${currentEnemyType} named ${currentEnemyName} has appeared.`)
    }

    function goToFight(){

        generateEnemy()
        setPreviousScreen(currentScreen)
        setCurrentScreen("fight")
        setSelectedInventoryItemPrice(0)
        setSelectedInventoryItem("")

        
 
    }
    function goToStore(){
        setPreviousScreen(currentScreen)
        setCurrentScreen("store")
        setMessageToDisplay("What would you like to purchase?")
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
    async function handleItemUse(){
        // Case if inventory item to use is a weapon
        if (gameDetails[user.classType].weapons[selectedInventoryItem]){
            if(user.weapon === selectedInventoryItem){
                setMessageToDisplay("You currently have that item equipped")
            }
            else{
                user.weapon = selectedInventoryItem
                setMessageToDisplay(`You have equipped the ${user.weapon}`)
            }
        }
        // Case if inventory item to use is armor
        if (gameDetails[user.classType].armors[selectedInventoryItem]){
            if(user.armor === selectedInventoryItem){
                setMessageToDisplay("You currently have that item equipped")
            }
            else{
                user.armor = selectedInventoryItem
                setMessageToDisplay(`You have equipped the ${user.armor}`)
            }
        }
        // Case if using a item to heal and remove from inventory    
        if (gameDetails.generic.items[selectedInventoryItem]){
            const itemIndex = user.inventory.indexOf(selectedInventoryItem)
            if(user.health === 20){
                setMessageToDisplay("You are currently at full health")
            } 
            else if (user.health + gameDetails.generic.items[selectedInventoryItem].heal >= 20 ){
                user.health = 20
                setMessageToDisplay(`You have fully healed to ${user.health}/20`)
                user.inventory.splice(itemIndex,1)
            } else {
                user.health += gameDetails.generic.items[selectedInventoryItem].heal
                setMessageToDisplay(`You have healed to ${user.health}/20`)
                user.inventory.splice(itemIndex,1)                
            }
        }
        saveCharacterState()
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
            {selectedItemPrice === 0 ? <button onClick={""} disabled>Purchase</button> : <button onClick={handlePurchase}>Purchase</button>}
        </div>,
        inventory:
        <div className="inventoryOptions">
            <button onClick={previousScreen === "home" ? goToHome : previousScreen === "fight" ? goToFight : ""}>Back</button>
            {selectedInventoryItemPrice === 0 ? <button onClick={handleItemUse} disabled>{previousScreen === "store" ? "Sell" : "Use" }</button> : <button onClick={handleItemUse}>{previousScreen === "store" ? "Sell" : "Use" }</button>}
        </div>,
        fight:
        <div className="attackOptions">
            <button>Attack</button>
            <button>Item Bag</button>
            <button onClick={goToHome}>Escape</button>
            
        </div>
    }
    // Used to determine what is displayed on the screen
    function configureScreenLayout(){
        if(currentScreen === "home"){
            return <>
                <HomeScreen name={user.name} classType={user.classType} health={user.health} experience={currentExperience} gold={currentGold}/>
                <MessageBox borderStatus={"addBorder"} screenMessage={messageToDisplay}/>
                <GameOptions borderStatus={"addBorder"} buttonOptions={menuOptions.home} />
            </>
        }
        if(currentScreen === "store"){
            return <>
                <Store classType={user.classType} handleItemSelected={handleItemSelected} />
                <MessageBox borderStatus="" screenMessage={messageToDisplay} />
                <GameOptions borderStatus="" buttonOptions={menuOptions.store} />
            </>
        }
        if (currentScreen === "inventory"){
            return<>
                <InventoryScreen inventory={user.inventory} gold={currentGold} health={user.health} classType={user.classType} handleItemSelected={handleInventoryItemSelected}/>
                <MessageBox borderStatus="" screenMessage={messageToDisplay} />
                <GameOptions borderStatus="" buttonOptions={menuOptions.inventory} />
            </>
        }
        if (currentScreen === "fight"){
            return<>
                <FightScreen enemyType={currentEnemyType} enemyName={currentEnemyName} enemyHealth={currentEnemyHealth} enemyBaseHealth={gameDetails[currentEnemyType].stats.health} userName={user.name} userHealth={currentUserHealth} userBaseHealth={gameDetails[user.classType].stats.health} userClass={user.classType} weapon={user.weapon} armor={user.armor} fightMessage={handleFightMessage} />
                <MessageBox borderStatus="addBorder" screenMessage={messageToDisplay} />
                <GameOptions borderStatus="addBorder" buttonOptions={menuOptions.fight} />
            </>
        }
    }

    

    return <div className="playArea"> 
        {configureScreenLayout()}
    </div>
}

export default PlayPage