import warriorIcon from "../assets/warrior.png"
import wizardIcon from "../assets/wizard.png"
import rogueIcon from "../assets/rogue.png"
import { gameDetails } from "../utils/gameDetails"


function HomeScreen(props){
    return <div className="homeScreen">
        <div className="displayArea addBorder">
            <h1>{props.name}</h1>
            <div className="healthStats">
                <h3>Health</h3>
                <h2>{props.health}/{gameDetails[props.classType].stats.health}</h2>
            </div>
            <div className="characterIcon">
                <img src={props.classType === "warrior" ? warriorIcon : props.classType === "wizard" ? wizardIcon : rogueIcon} alt={`Image icon of a ${props.classType}`} />
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