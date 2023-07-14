import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"
import { useState } from "react"

function PlayPage(props){
    console.log(props)
    const location = useLocation()
    const {user, message} = location.state
    console.log(user)

    const [messageToDisplay, setMessageToDisplay] = useState(message ? message : "Select An Option")
    
    return <div className="playArea">
        <HomeScreen name={user.name} classType={user.classType}/>
        <MessageBox screenMessage={messageToDisplay} />
        <GameOptions />
        
    </div>
}

export default PlayPage