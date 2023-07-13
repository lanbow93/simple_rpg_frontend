import { Link } from "react-router-dom"

import warriorIcon from "../assets/warrior.png"
import wizardIcon from "../assets/wizard.png"
import rogueIcon from "../assets/rogue.png"



function CharacterCard(props) {
    const character = props.data
    return <div className="characterCardArea">
        <h1>{character.name}</h1>
        <img src={character.classType === "wizard" ? wizardIcon : character.classType === "warrior" ? warriorIcon : rogueIcon} alt="" />
        <div><Link to="/play" state={{user:character}} ><button>Play</button></Link></div>
        <div className="cardDetails">
            <p>Class:</p>
            <p>Level:</p>
            <p className="details">{character.classType.charAt(0).toUpperCase() + character.classType.substring(1)}</p>
            <p className="details">{Math.floor(character.experience / 10) + 1}</p>
        </div>
    </div>
}

export default CharacterCard