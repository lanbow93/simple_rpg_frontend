import CreatureCard from "./CreatureCard"
function FightScreen(props){
    console.log(props)
    return <div className="fightDisplay">
        <div className="enemyArea">
            <CreatureCard name={props.enemyName} health={props.enemyHealth} baseHealth={props.enemyBaseHealth} classType={props.enemyType} />
        </div>
        <div className="userArea">
            <CreatureCard name={props.userName} health={props.userHealth} baseHealth={props.userBaseHealth} classType={props.userClass}/>
        </div>
    </div>
}

export default FightScreen