import { Form } from "react-router-dom"

function NewCharacter(props){
    return <div className="characterCreationArea">
        <Form action="/new" className="newCharacterForm">
        
        </Form>
    </div>
}

export default NewCharacter