import {Link} from "react-router-dom"

function Logout(props){
    return <div className="logoutArea">
        <h1>You have Successfully been logged out</h1>
        <Link to="/">Back To Home</Link>
    </div>
} 

export default Logout