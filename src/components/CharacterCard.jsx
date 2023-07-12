import { charactersLoader } from "../utils/loaders"
const warriorImage = "https://www.transparentpng.com/thumb/the-ultimate-warrior/X1Esmm-the-ultimate-warrior-clipart-png-photos.png"
const wizardImage = "https://www.pngall.com/wp-content/uploads/2016/06/Wizard-Free-Download-PNG.png"
const rogueImage = "https://www.nicepng.com/png/full/266-2664043_m-rogue-assassin-crossbow-shortsword-rogue-short-sword.png"

function CharacterCard(props) {
    const character = props.data
    console.log(character)
    return <div className="characterCardArea">
        <h1>{character.name}</h1>
        <img src={character.classType === "wizard" ? wizardImage : character.classType === "warrior" ? warriorImage : rogueImage} alt="" />
        <div className="cardDetails">
            <p>Class:</p>
            <p>Level:</p>
            <p>{character.classType.charAt(0).toUpperCase() + character.classType.substring(1)}</p>
            <p>{Math.floor(character.experience / 10) + 1}</p>
        </div>
    </div>
}

export default CharacterCard