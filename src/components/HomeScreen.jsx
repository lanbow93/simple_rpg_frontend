import { gameDetails } from "../utils/gameDetails"
import { imageProvider } from "../utils/imageProvider"


function HomeScreen(props){
    return <div className="homeScreen">
        <div className="displayArea">
            <h1>{props.name}</h1>
            <div className="healthStats">
                <h3>Health</h3>
                <h2>{props.health}/{gameDetails[props.classType].stats.health}</h2>
            </div>
            <div className="characterIcon">
                <img src={imageProvider(props.classType)} alt={`Image icon of a ${props.classType}`} />
            </div>
            <div className="currentLevel">
                <h3>Level</h3>
                <h2>{Math.floor(props.experience / 10)}</h2>
            </div>
            <div className="currentGold">
                <h3>Current Gold: {props.gold}</h3>
            </div>
        </div>
    </div>
}

export default HomeScreen