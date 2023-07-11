function CharacterCard(props) {
    return <div className="characterCardArea">
        <h1>{"Character: " + props.data.name}</h1>
    </div>
}

export default CharacterCard