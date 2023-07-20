import Shelf from "./Shelf"

function Store(props){

    return <div className="storeDisplay">
        
        <div className="billboard">
            <h1>Ye Olde Shoppe</h1>
        </div>
        <div className="storeItemArea">
            <Shelf category="weapons" classType={props.classType} handleItemSelected={props.handleItemSelected} />
            <Shelf category="armors" classType={props.classType} handleItemSelected={props.handleItemSelected}/>
            <Shelf category="items" classType="generic" handleItemSelected={props.handleItemSelected}/>
        </div>  
    </div>
}

export default Store