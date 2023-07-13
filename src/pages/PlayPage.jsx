import { useLocation } from "react-router-dom"

function PlayPage(props){
    console.log(props)
    const location = useLocation()
    const {user} = location.state
    console.log(user)

    
    return <div className="playArea">
        <h1>Play</h1>
    </div>
}

export default PlayPage