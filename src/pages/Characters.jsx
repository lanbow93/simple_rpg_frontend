import { useLoaderData, Link } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"
import Error from "./Error"

function Characters(props) {
    const character_list = useLoaderData()
    if (character_list.error){
        return <Error errorMessage="You are not currently logged in" toLink="/" />
    }

    return <div className="charactersArea">
        <div className="cardArea">
                <Link to="/newcharacter" ><button>New Character</button></Link>
            {character_list.map((character) => <CharacterCard data={character} key={character._id} />)}
        </div>
    </div>
}

export default Characters