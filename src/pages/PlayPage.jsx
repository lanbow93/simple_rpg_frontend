import { useLocation } from "react-router-dom"
import HomeScreen from "../components/HomeScreen"

function PlayPage(props){
    console.log(props)
    const location = useLocation()
    const {user} = location.state
    console.log(user)
    
    return <div className="playArea">
        <HomeScreen />
    </div>
}

export default PlayPage