import CreatureCard from "./CreatureCard"
function FightScreen(props){
    props.fightMessage()
    return <div className="fightDisplay">
        
        <CreatureCard name={props.enemyName} health={props.enemyHealth} baseHealth={props.enemyBaseHealth} classType={props.enemyType} key={props.enemyName + props.enemyType} divClass="enemyArea"/>
        
        
        <CreatureCard name={props.userName} health={props.userHealth} baseHealth={props.userBaseHealth} classType={props.userClass} key={props.userName + props.userClass} divClass="userArea" />
        
    </div>
}

export default FightScreen