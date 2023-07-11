import { useState } from "react";
import { Link } from "react-router-dom";
// States to return based on useState below for dropdown menu
const hiddenOptions = <section className="options hidden">
    <Link><h2>Login</h2></Link>
    <Link><h2>Characters</h2></Link>
    <Link><h2>Logout</h2></Link>
</section>

const shownOptions = <section className="options">
    <Link><h2>Login</h2></Link>
    <Link><h2>Characters</h2></Link>
    <Link><h2>Logout</h2></Link>
</section>

function Navigation(props){
    const [menuStatus, setMenuStatus] = useState("hidden")
    const menuClicked = () => menuStatus === "hidden" ? setMenuStatus("showing") : setMenuStatus("hidden")

    return <div className="navigation">
        <div className="dropdownMenu mobileOnly">
            <Link to="/"><h1>RPG OF LEGENDS</h1></Link>
            <button onClick={menuClicked}><h1>≡</h1></button>
            {menuStatus === "hidden" ? hiddenOptions : shownOptions}
        </div>
    </div>
}

export default Navigation;