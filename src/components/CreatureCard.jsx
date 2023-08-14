function CreatureCard(props){
    return <div className="creatureCard">
        <div className="healthBar">

        </div>
        
        <div className="imageBlock">
        <img src={props.creatureImage} alt="" />
        </div>

    </div>
}

export default CreatureCard