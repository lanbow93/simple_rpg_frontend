import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"
import { useState } from "react"
import Store from "../components/Store"

function PlayPage(props){
    const location = useLocation()
    const {user, message} = location.state
    const [currentScreen, setCurrentScreen] = useState("home")
    const [messageToDisplay, setMessageToDisplay] = useState(message ? message : "Select An Option")
    console.log(user)
    
    function goToFight(){
        setCurrentScreen("fight")
        setMessageToDisplay("This is your setup\nAre you ready to fight?")
    }
    function goToStore(){
        setCurrentScreen("store")
        setMessageToDisplay("What would you like to purchase?")
    }

    function goToInventory(){
        setCurrentScreen("inventory")
        setMessageToDisplay("Browsing Inventory")
    }

    const menuOptions = {
        home:
        <div className="homeOptions">
            <button onClick={ goToFight }>Fight</button>
            <button onClick={ goToStore } >Store</button>
            <button onClick={ goToInventory }>Inventory</button>
        </div>
    }
    return <div className="playArea"> 
        {currentScreen === "home" ? <HomeScreen name={user.name} classType={user.classType} health={user.health} experience={user.experience}/> : currentScreen === "store" ? <Store classType={user.classType} /> : ""}
        {currentScreen === "home" ? <MessageBox borderStatus={"addBorder"} screenMessage={messageToDisplay}/> : <MessageBox borderStatus="" screenMessage={messageToDisplay} />  }
        {currentScreen === "home" ? <GameOptions borderStatus={"addBorder"} buttonOptions={menuOptions.home} /> : <GameOptions borderStatus="" buttonOptions={menuOptions.home} />  }
    </div>
}

export default PlayPage