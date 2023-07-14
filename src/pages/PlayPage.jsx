import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"
import MessageBox from "../components/MessageBox"
import GameOptions from "../components/GameOptions"

function PlayPage(props){
    console.log(props)
    const location = useLocation()
    const {user} = location.state
    console.log(user)
    
    return <div className="playArea">
        <HomeScreen name={user.name} classType={user.classType}/>
        <MessageBox />
        <GameOptions />
        
    </div>
}

export default PlayPage