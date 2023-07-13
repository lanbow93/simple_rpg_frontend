import { Link } from "react-router-dom"
const warriorImage = "https://www.transparentpng.com/thumb/the-ultimate-warrior/X1Esmm-the-ultimate-warrior-clipart-png-photos.png"
const wizardImage = "https://www.pngall.com/wp-content/uploads/2016/06/Wizard-Free-Download-PNG.png"
const rogueImage = "https://www.nicepng.com/png/full/266-2664043_m-rogue-assassin-crossbow-shortsword-rogue-short-sword.png"

function CharacterCard(props) {
    const character = props.data
    console.log(character)
    return <div className="characterCardArea">
        <h1>{character.name}</h1>
        <img src={character.classType === "wizard" ? wizardImage : character.classType === "warrior" ? warriorImage : rogueImage} alt="" />
        <div><Link to="/play" state={{user:character}} ><button>Play</button></Link></div>
        <div className="cardDetails">
            <p>Class:</p>
            <p>Level:</p>
            <p><section className="details">{character.classType.charAt(0).toUpperCase() + character.classType.substring(1)}</section></p>
            <p><section className="details">{Math.floor(character.experience / 10) + 1}</section></p>
        </div>
    </div>
}

export default CharacterCard