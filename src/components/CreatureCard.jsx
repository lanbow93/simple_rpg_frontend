import { imageProvider } from "../utils/imageProvider"

function determineHealthBar(baseAmount, currentAmount){
    let healthBar = []
    for (let i = 0; i<baseAmount; i++){
        healthBar.push(<p>-</p>)
    }
   
    return healthBar
}
function CreatureCard(props){


    return <>
        <h2>{props.name}</h2>
        <div className="healthField">
        {determineHealthBar(props.baseHealth)}
        </div>
        <p>{props.health}/{props.baseHealth}</p>
        <div className="imageBlock">
        <img src={imageProvider(props.classType)} alt={`Image of ${props.classType}`} />
        </div>

    </>
}

export default CreatureCard