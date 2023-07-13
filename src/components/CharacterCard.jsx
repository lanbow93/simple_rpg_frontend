import { Link } from "react-router-dom"

import { warriorImage, rogueImage, wizardImage } from "../utils/url"


function CharacterCard(props) {
    const character = props.data
    return <div className="characterCardArea">
        <h1>{character.name}</h1>
        <img src={character.classType === "wizard" ? wizardImage : character.classType === "warrior" ? warriorImage : rogueImage} alt="" />
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