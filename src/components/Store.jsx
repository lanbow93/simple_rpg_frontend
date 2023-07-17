import Shelf from "./Shelf"

function Store(props){
    return <div className="storeDisplay">
        
        <div className="billboard">
            <h1>Ye Olde Shoppe</h1>
        </div>
        <div className="storeItemArea">
            <Shelf />
            <Shelf />
            <Shelf />
        </div>  
    </div>
}

export default Store