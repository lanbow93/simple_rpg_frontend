import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"
import { useState } from "react"

function PlayPage(props){
    console.log(props)
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
        {currentScreen === "home" ? <HomeScreen name={user.name} classType={user.classType}/> : ""}
        <MessageBox screenMessage={messageToDisplay} />
        <GameOptions buttonOptions={currentScreen === "home" ? menuOptions.home : ""} />
        
    </div>
}

export default PlayPage