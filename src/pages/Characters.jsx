import { useLoaderData, Link } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

function Characters(props) {
    const character_list = useLoaderData()
    console.log(character_list)
    return <div className="charactersArea">
        <div className="cardArea">
                <Link to="/create" ><button>New Character</button></Link>
            {character_list.map((character) => <CharacterCard data={character} key={character._id} />)}
        </div>
    </div>
}

export default Characters