import { imageProvider } from "../utils/imageProvider"
function CreatureCard(props){
    return <>
        <h2>{props.name}</h2>
        <div className="healthField">
        <p>{props.health}/{props.baseHealth}</p>
        </div>
        
        <div className="imageBlock">
        <img src={imageProvider(props.classType)} alt="" />
        </div>

    </>
}

export default CreatureCard