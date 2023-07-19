import Shelf from "./Shelf"

function Store(props){

    return <div className="storeDisplay">
        
        <div className="billboard">
            <h1>Ye Olde Shoppe</h1>
        </div>
        <div className="storeItemArea">
            <Shelf category="weapons" classType={props.classType} setMessageToDisplay={props.setMessageToDisplay} />
            <Shelf category="armors" classType={props.classType} setMessageToDisplay={props.setMessageToDisplay}/>
            <Shelf category="items" classType="generic" setMessageToDisplay={props.setMessageToDisplay}/>
        </div>  
    </div>
}

export default Store