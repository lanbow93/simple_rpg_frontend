import { Form } from "react-router-dom"
import { useState } from "react"
import { wizardImage, warriorImage, rogueImage } from "../utils/url"
function NewCharacter(props){

    const [newCharacter, setNewCharacter] = useState()
    return <div className="characterCreationArea">
        <Form action="/new" className="newCharacterForm">
            <h1>New Character</h1>
            
            <h3>Character Name: </h3>
            <input type="text" name="name" placeholder="Merlin" />
            <div className="radioOptions">
                <input type="radio" name="being_class" value="wizard" defaultChecked />
                <p>Wizard</p>
                <input type="radio" name="being_class" value="warrior" />
                <p>Warrior</p>
                <input type="radio" name="being_class" value="rogue" />
                <p>Rogue</p>
            </div>
            <button>Create</button>
        </Form>
    </div>
}

export default NewCharacter