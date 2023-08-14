import CreatureCard from "./CreatureCard"
function FightScreen(props){
    console.log(props)
    return <div className="fightDisplay">
        <div className="enemyArea">
            <CreatureCard />
        </div>
        <div className="userArea">
            <CreatureCard />
        </div>
    </div>
}

export default FightScreen