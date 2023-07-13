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
                break
            case "warrior":
                setCurrentImage(warriorIcon)
                break
            default:
                setCurrentImage(rogueIcon)
                break;
        }
    }


    return <div className="characterCreationArea">
        <Form action="/create" className="newCharacterForm">
            <h1>New Character</h1>
            <img src={currentImage} alt="" />
            <h3>Character Name: </h3>
            <input type="text" name="name" placeholder="Merlin" />
            <div className="radioOptions">
                <input type="radio" name="being_class" value="wizard" defaultChecked onChange={radioChange}/>
                <p>Wizard</p>
                <input type="radio" name="being_class" value="warrior" onChange={radioChange}/>
                <p>Warrior</p>
                <input type="radio" name="being_class" value="rogue" onChange={radioChange}/>
                <p>Rogue</p>
            </div>
            <input type="hidden" name="classType" value={newCharacter.classType} />
            <input type="hidden" name="weapon" value={newCharacter.weapon}/>
            <input type="hidden" name="armor" value={newCharacter.armor} />
            <input type="hidden" name="inventory" value={newCharacter.inventory} />
            <button>Create</button>
        </Form>
    </div>
}

export default NewCharacter