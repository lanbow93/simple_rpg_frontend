import {Link} from "react-router-dom"

function Error(props){
    return <div className="errorMessageSection">
        <div className="error">
            <h1>ERROR</h1>
            <h2>{props.errorMessage}</h2>
            <Link to={props.toLink}><h2>Continue</h2></Link>
        </div>
    </div>
} 

export default Error