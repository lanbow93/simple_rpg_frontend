import { Link, Form } from "react-router-dom"
import { useState } from "react"
import warriorIcon from "../assets/warrior.png"
import wizardIcon from "../assets/wizard.png"
import rogueIcon from "../assets/rogue.png"



function CharacterCard(props) {
    const character = props.data

    const [modalClass, setModalClass] = useState("hidden confirmDeletion")
    
    // When cancel button is pressed on confirm deletion screen
    function handleClick(event) {
        event.preventDefault()
        setModalClass("hidden confirmDeletion")
    }


    return <div className="characterCardArea">
        <div className="banner">
            <h1>{character.name}</h1>
            <button onClick={(e) => setModalClass("confirmDeletion")}>X</button>
        </div>
        <img src={character.classType === "wizard" ? wizardIcon : character.classType === "warrior" ? warriorIcon : rogueIcon} alt="" />
        <div><Link to="/play" state={{user:character}} ><button>Play</button></Link></div>
        <div className="cardDetails">
            <p>Class:</p>
            <p>Level:</p>
            <p className="details">{character.classType.charAt(0).toUpperCase() + character.classType.substring(1)}</p>
            <p className="details">{Math.floor(character.experience / 10) + 1}</p>
        </div>
        <div className={modalClass}>
        <Form action={`/delete/${character._id}`} method="post">
            <h2>Confirm Deletion</h2>
            <button className="delete">Delete</button>
            <button onClick={(e) => { handleClick(e)  }}>Cancel</button>
        </Form>
        </div>
    </div>
}

export default CharacterCard