import { useState } from "react";

// States to return based on useState below for dropdown menu
const hiddenOptions = <section className="options hidden">
<a href=""><h2>Login</h2></a>
<a href=""><h2>Characters</h2></a>
<a href=""><h2>Logout</h2></a>
</section>

const shownOptions = <section className="options">
<a href=""><h2>Login</h2></a>
<a href=""><h2>Characters</h2></a>
<a href=""><h2>Logout</h2></a>
</section>

function Navigation(props){
    const [menuStatus, setMenuStatus] = useState("hidden")


    const menuClicked = () => menuStatus === "hidden" ? setMenuStatus("showing") : setMenuStatus("hidden")

    return <div className="navigation">
        <div className="dropdownMenu mobileOnly">
            <button onClick={menuClicked}><h1>≡</h1></button>
            {menuStatus === "hidden" ? hiddenOptions : shownOptions}
        </div>
    </div>
}

export default Navigation;