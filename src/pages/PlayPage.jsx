import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import { useState } from "react"
import Store from "../components/Store"
import { URL } from "../utils/url"
import { gameDetails } from "../utils/gameDetails"
import InventoryScreen from "../components/InventoryScreen"
import FightScreen from "../components/FightScreen"
import MenuButtons from "../components/MenuButtons"

function PlayPage(props){
    const location = useLocation()
    const {user} = location.state
    const [currentScreen, setCurrentScreen] = useState("home")
    const [currentGold, setCurrentGold] = useState(user.gold)
    const [messageToDisplay, setMessageToDisplay] = useState("Select An Option")
    const [previousScreen, setPreviousScreen] = useState("")
    const [selectedStoreItem, setSelectedStoreItem] = useState("")
    const [selectedStoreItemPrice, setSelectedStoreItemPrice] = useState(0)
    const [selectedInventoryItem, setSelectedInventoryItem] = useState("")
    const [selectedInventoryItemPrice, setSelectedInventoryItemPrice] = useState(0)
    const [currentExperience, setCurrentExperience] = useState(user.experience)
    const [currentEnemyName, setCurrentEnemyName] = useState("")
    const [currentEnemyType, setCurrentEnemyType] = useState("")
    const [currentEnemyHealth, setCurrentEnemyHealth] = useState(0)
    const [currentUserHealth , setCurrentUserHealth] = useState(user.health)
    const [messageToPass, setMessageToPass] = useState("")
    const [attackButtonsStatus, setAttackButtonsStatus] = useState("")
    const [areAttackButtonsDisabled, setAreAttackButtonsDisabled ] = useState(false)

    // Clear any selected item
    function clearItemSelection(){
        setSelectedStoreItem("")
        setSelectedStoreItemPrice(0)
        setSelectedInventoryItem("")
        setSelectedInventoryItemPrice(0)
    }
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
        setMessageToPass("")
        setAreAttackButtonsDisabled(false)
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
    }
    // Displays message on screen and stores item name and cost for possible purchase
    function handleItemSelected(message, item, cost){
        setMessageToDisplay(message)
        setSelectedStoreItem(item)
        setSelectedStoreItemPrice(cost)
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
        setMessageToPass("")
        clearItemSelection()
    }
    // Required due to if added to goToFight, will cause delayed component re-render
    function handleFightMessage(){
        if(messageToPass){
            setMessageToDisplay(messageToPass)
        } else if (currentEnemyName === "Rimuru Tempest" && currentEnemyType === "slime") {
            setMessageToDisplay(`A ${currentEnemyType} named ${currentEnemyName} has appeared. Escaping is recommended`)
        } else {
            setMessageToDisplay(`${user.name} currently has the ${user.weapon} and ${user.armor} equipped. A ${currentEnemyType} named ${currentEnemyName} has appeared.`)
        }
    }
    function goToFight(){
        generateEnemy()
        setPreviousScreen(currentScreen)
        setCurrentScreen("fight")
    }
    function goToFightFromInventory(hasUsedItem){
        setPreviousScreen(currentScreen)
        setCurrentScreen("fight")
        clearItemSelection()
        if(hasUsedItem){
            setAttackButtonsStatus("disabled")
            setTimeout(handleEnemyAttackAction, 3000)
        }
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
    function handlePurchase(){
        // Verifying that character has enough money
        if(selectedStoreItemPrice > 0 && currentGold >= selectedStoreItemPrice) {
            setCurrentGold(currentGold - selectedStoreItemPrice)
            user.gold -= selectedStoreItemPrice
            user.inventory.push(selectedStoreItem)
            saveCharacterState()
            console.log("reached")
            setMessageToDisplay(`You have purchased the ${selectedStoreItem}.\nRemaining Gold: ${user.gold}`)
        } else {
            setMessageToDisplay(`You do not have enough gold to purchase the ${selectedStoreItem}`)
        }
    }
    function handleItemUse(){
        let usedItem = false
        // Case if inventory item to use is a weapon
        if (gameDetails[user.classType].weapons[selectedInventoryItem]){
            if(user.weapon === selectedInventoryItem){
                setMessageToDisplay("You currently have that item equipped")
            }
            else{
                user.weapon = selectedInventoryItem
                setMessageToDisplay(`You have equipped the ${user.weapon}`)
                setMessageToPass(`You have equipped the ${user.weapon}`)
                usedItem = true
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
                setMessageToPass(`You have equipped the ${user.armor}`)
                usedItem = true
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
                setCurrentUserHealth(20)
                setMessageToDisplay(`You have fully healed to ${user.health}/20`)
                setMessageToPass(`You have fully healed to ${user.health}/20`)
                user.inventory.splice(itemIndex,1)
                usedItem = true
            } else {
                user.health += gameDetails.generic.items[selectedInventoryItem].heal
                setCurrentUserHealth(currentUserHealth + gameDetails.generic.items[selectedInventoryItem].heal)
                setMessageToDisplay(`You have healed to ${user.health}/20`)
                setMessageToPass(`You have healed to ${user.health}/20`)
                user.inventory.splice(itemIndex,1)
                usedItem = true                
            }
        }
        saveCharacterState()
        if (previousScreen === "fight" && usedItem) {
            goToFightFromInventory(true)
        }
    }
    // Gameover to reset back to level 1 info
    function gameover(){
        setMessageToPass("GAMEOVER. Character's stats have been reset to level 1")
        setTimeout(goToHome, 3000)
        clearItemSelection()
        setAreAttackButtonsDisabled(false)
        setCurrentUserHealth(gameDetails[user.classType].stats.health)
        user.health = gameDetails[user.classType].stats.health
        setCurrentExperience(10)
        user.experience = 10
        setCurrentGold(30)
        user.gold = 30
        user.weapon = user.classType === "wizard" ? "wand" : user.classType === "warrior" ? "sword" : "bow"
        user.armor = user.classType === "wizard" ? "novice robe" : user.classType === "warrior" ? "chainmail" : "cloak"
        user.inventory = user.classType === "wizard" ? ["wand","novice robe"] : user.classType === "warrior" ? ["sword", "chainmail"] : ["bow" ,"cloak"]
        
    }
    function handleEnemyAttackAction(){
        const userDefense = gameDetails[user.classType].armors[user.armor].defense
        let enemyAttack = gameDetails[currentEnemyType].stats.attack
        // Easter egg attack raised
        if(currentEnemyName==="Rimuru Tempest" && currentEnemyType==="slime"){
            enemyAttack = 100
        } 
        if (userDefense >= enemyAttack) {
            setMessageToPass(`${currentEnemyName} attacked your ${user.armor} but did no damage.`)
        } else if(user.health - (enemyAttack - userDefense) <= 0){
            setAreAttackButtonsDisabled(true)
            setMessageToPass(`${currentEnemyName} attacked your ${user.armor} and did ${ enemyAttack - userDefense} damage `)
            user.health = 0
            setCurrentUserHealth(0)
            setTimeout(gameover, 3000)
        } else {
            user.health -= enemyAttack - userDefense
            setCurrentUserHealth(user.health)
            setMessageToPass(`${currentEnemyName} attacked your ${user.armor} and did ${ enemyAttack - userDefense} damage `)
        }
        saveCharacterState()
        setAreAttackButtonsDisabled(false)

    }
    function handleUserAttackAction(){
        const userAttack = gameDetails[user.classType].weapons[user.weapon].damage
        const enemyDefense = gameDetails[currentEnemyType].stats.defense

        if (enemyDefense >= userAttack ){
            setAreAttackButtonsDisabled(true)
            setMessageToPass("Your attack did nothing. Try a stronger weapon.")
            setTimeout(handleEnemyAttackAction, 3000)

        } else {
            setAreAttackButtonsDisabled(true)
            if ((currentEnemyHealth - (userAttack - enemyDefense)) > 0) {
                setCurrentEnemyHealth(currentEnemyHealth - (userAttack - enemyDefense))
                setMessageToPass(`${user.name} attacked with their ${user.weapon} and did ${(userAttack - enemyDefense)} damage`)
                setTimeout(handleEnemyAttackAction, 3000)
            } else {
                setCurrentEnemyHealth(0)
                setMessageToPass(`You have defeated ${currentEnemyName}. You have earned ${gameDetails[currentEnemyType].inventory.gold} gold and ${gameDetails[currentEnemyType].stats.experience} experience. `)
                user.experience += gameDetails[currentEnemyType].stats.experience
                user.gold += gameDetails[currentEnemyType].inventory.gold
                setCurrentGold(user.gold)
                setCurrentExperience(user.experience)
                saveCharacterState()
                setTimeout(goToFight, 3000)
            }
        }

    }
    // Way to determine what buttons are put on the screen
    const homeOptions = [
        {
            clickHandler: goToFight,
            text: "Fight",
            isDisabled: false
        },
        {
            clickHandler: goToStore,
            text: "Store",
            isDisabled: false
        },
        {
            clickHandler: goToInventory,
            text: "Inventory",
            isDisabled: false
        }
    ]

    const storeOptions = [
        {
            clickHandler: goToHome,
            text: "Back",
            isDisabled: false
        },
        {
            clickHandler: handlePurchase,
            text: "Purchase",
            isDisabled: selectedStoreItemPrice === 0  
        }
    ]

    const inventoryOptions = [
        {
            clickHandler: previousScreen === "home" ? goToHome : previousScreen === "store" ? goToStore : () => goToFightFromInventory(false),
            text: "Back",
            isDisabled: false
        },
        {
            clickHandler: handleItemUse,
            text: previousScreen === "store" ? "Sell" : "Use",
            isDisabled: selectedInventoryItemPrice === 0
        }
    ]

    const attackOptions = [
        {
            clickHandler: handleUserAttackAction,
            text: "Attack",
            isDisabled: areAttackButtonsDisabled 
        },
        {
            clickHandler: goToInventory,
            text: "Item Bag",
            isDisabled: areAttackButtonsDisabled
        },
        {
            clickHandler: goToHome,
            text: "Escape",
            isDisabled: areAttackButtonsDisabled
        }
    ]
    // Used to determine what is displayed on the screen
    
    function configureScreenLayout(){
        if(currentScreen === "home"){
            return <>
                <HomeScreen name={user.name} classType={user.classType} health={user.health} experience={currentExperience} gold={currentGold}/>
                <MessageBox screenMessage={messageToDisplay}/>
                <MenuButtons menuClassName="gameButtonArea homeOptions" buttonArray={homeOptions} />
            </>
        }
        if(currentScreen === "store"){
            return <>
                <Store classType={user.classType} handleItemSelected={handleItemSelected} />
                <MessageBox screenMessage={messageToDisplay} />
                <MenuButtons menuClassName="gameButtonArea storeOptions" buttonArray={storeOptions} />
            </>
        }
        if (currentScreen === "inventory"){
            return<>
                <InventoryScreen inventory={user.inventory} gold={currentGold} health={user.health} classType={user.classType} handleItemSelected={handleInventoryItemSelected}/>
                <MessageBox screenMessage={messageToDisplay} />
                <MenuButtons menuClassName="gameButtonArea inventoryOptions" buttonArray={inventoryOptions} />
            </>
        }
        if (currentScreen === "fight"){
            return<>
                <FightScreen enemyType={currentEnemyType} enemyName={currentEnemyName} enemyHealth={currentEnemyHealth} enemyBaseHealth={gameDetails[currentEnemyType].stats.health} userName={user.name} userHealth={currentUserHealth} userBaseHealth={gameDetails[user.classType].stats.health} userClass={user.classType} weapon={user.weapon} armor={user.armor} fightMessage={handleFightMessage} />
                <MessageBox screenMessage={messageToDisplay} />
                <MenuButtons menuClassName="gameButtonArea attackOptions" buttonArray={attackOptions} />
            </>
        }
    }

    

    return <div className="playArea"> 
        {configureScreenLayout()}
    </div>
}

export default PlayPage