import { useLoaderData } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

function Characters(props) {
    const character_list = useLoaderData()
    console.log(character_list)
    return <div className="charactersArea">
        <div className="cardArea">
            {character_list.map((character) => <CharacterCard data={character} />)}
        </div>
    </div>
}

export default Characters