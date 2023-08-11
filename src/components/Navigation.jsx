import { useState } from "react";
import { Link, Form } from "react-router-dom";
// States to return based on useState below for dropdown menu
const hiddenOptions = <section className="options hidden">
    <Link><h2>Login</h2></Link>
    <Link><h2>Characters</h2></Link>
    <Link><h2>Logout</h2></Link>
</section>



function Navigation(props){
    const [menuStatus, setMenuStatus] = useState("hidden")
    const menuClicked = () => menuStatus === "hidden" ? setMenuStatus("showing") : setMenuStatus("hidden")

    const shownOptions = <section className="options">
    <Link to="/" onClick={menuClicked} ><h2>Login</h2></Link>
    <Link to="/characters" onClick={menuClicked}><h2>Characters</h2></Link>
    <Form action="/logout" method="post" ><button ><h2>Logout</h2></button></Form>
    </section>

    return <div className="navigation">
        <div className="dropdownMenu mobileOnly">
            <Link to="/"><h1>RPG OF LEGENDS</h1></Link>
            <button id="hamburgerMenuButton" onClick={menuClicked}><h1>≡</h1></button>
            {menuStatus === "hidden" ? hiddenOptions : shownOptions}
        </div>
    </div>
}

export default Navigation;