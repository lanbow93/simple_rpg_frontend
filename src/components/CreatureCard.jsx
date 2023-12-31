import { imageProvider } from "../utils/imageProvider"

function determineHealthBar(baseHealth, currentHealth){
    let healthBar = []
    for (let i = 0; i<baseHealth; i++){
        if (currentHealth >= baseHealth * .75){
            if(i+1 <= currentHealth ){
                healthBar.push(<p className="greenHealth">-</p>)
            } else {
                healthBar.push(<p>-</p>)
            }
        } else if (currentHealth >= baseHealth * .5){
            if(i+1 <= currentHealth ){
                healthBar.push(<p className="yellowHealth">-</p>)
            } else {
                healthBar.push(<p>-</p>)
            }
        } else {
            if(i+1 <= currentHealth ){
                healthBar.push(<p className="redHealth">-</p>)
            } else {
                healthBar.push(<p>-</p>)
            }
        }
    }
    return healthBar
}


function CreatureCard(props){
    function checkForEasterEgg(){
        if(props.health <= 0){
            return imageProvider("skull")
        } else if(props.name === "Rimuru Tempest" && props.classType === "slime"){
            return imageProvider("rimuru")
        } else {
            return imageProvider(props.classType)
        }
    }
    
    return <div className={props.divClass}>
        <h2>{props.name}</h2>
        <div className="healthField">
        {determineHealthBar(props.baseHealth, props.health)}
        </div>
        <p>{props.health}/{props.baseHealth}</p>
        <div className="imageBlock">
        <img src={checkForEasterEgg()} alt={`Image of ${props.classType}`} />
        </div>

    </div>        
}

export default CreatureCard