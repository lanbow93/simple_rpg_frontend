import Shelf from "./Shelf"

function Store(props){
    return <div className="storeDisplay">
        
        <div className="billboard">
            <h1>Ye Olde Shoppe</h1>
        </div>
        <div className="storeItemArea">
            <Shelf category="weapons" classtype={props.classType} />
            <Shelf category="armors" classtype={props.classType} />
            <Shelf category="potions" classtype={props.classType} />
        </div>  
    </div>
}

export default Store