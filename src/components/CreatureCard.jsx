import { imageProvider } from "../utils/imageProvider"
function CreatureCard(props){
    return <>
        <h2>{props.name}</h2>
        <div className="healthField">
        <p>{props.health}/{props.baseHealth}</p>
        </div>
        
        <div className="imageBlock">
        <img src={imageProvider(props.classType)} alt={`Image of ${props.classType}`} />
        </div>

    </>
}

export default CreatureCard