import { Form } from "react-router-dom"
import { useState } from "react"

import wizardIcon from "../assets/wizard.png"
import warriorIcon from "../assets/warrior.png"
import rogueIcon from "../assets/rogue.png"

function NewCharacter(props){
    const [characterName, setCharacterName] = useState("") 
    const [newCharacter, setNewCharacter] = useState({
        classType: "wizard",
        weapon: "wand",
        armor: "novice robe",
        inventory: ["wand", "novice robe"]
    })
    const [currentImage, setCurrentImage] = useState(wizardIcon)
    function radioChange(event){
        const selectedClass = event.target.value
        switch (selectedClass) {
            case "wizard":
                setCurrentImage(wizardIcon)
                setNewCharacter({
                    classType: "wizard",
                    weapon: "wand",
                    armor: "novice robe",
                    inventory: ["wand", "novice robe"]
                })
                break
            case "warrior":
                setCurrentImage(warriorIcon)
                setNewCharacter({
                    classType: "warrior",
                    weapon: "sword",
                    armor: "chainmail",
                    inventory: ["sword", "chainmail"]
                })
                break
            default:
                setCurrentImage(rogueIcon)
                setNewCharacter({
                    classType: "rogue",
                    weapon: "bow",
                    armor: "cloak",
                    inventory: ["bow", "cloak"]
                })
                break;
        }
    }


    return <div className="characterCreationArea">
        <Form action="/create" className="newCharacterForm" method="post">
            <h1 onClick={() => console.log(newCharacter.inventory)}>New Character</h1>
            <img src={currentImage} alt="" />
            <h3>Character Name: </h3>
            <input type="text" name="name" maxLength="19" placeholder="Merlin" autoComplete="off" value={characterName} onChange={(e)=> { characterName.length < 20 ? setCharacterName(e.target.value) : ""}}/>
            <div className="radioOptions">
                <input type="radio" name="being_class" value="wizard" defaultChecked onChange={radioChange}/>
                <p>Wizard <span className="inProgress">(TBA)</span></p>
                <input type="radio" name="being_class" value="warrior" onChange={radioChange}/>
                <p>Warrior</p>
                <input type="radio" name="being_class" value="rogue" onChange={radioChange}/>
                <p>Rogue <span className="inProgress">(TBA)</span></p>
            </div>
            <input type="hidden" name="classType" value={newCharacter.classType} />
            <input type="hidden" name="weapon" value={newCharacter.weapon}/>
            <input type="hidden" name="armor" value={newCharacter.armor} />
            <input type="hidden" name="inventory" value={newCharacter.inventory}  />
            {characterName  && newCharacter.classType==="warrior" ? <button>Create</button> : <button disabled>Create</button>}
        </Form>
    </div>
}

export default NewCharacter