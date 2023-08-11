import { Form, Link } from "react-router-dom"
import { useState } from "react"
function RegistrationBox(props) {
    const [usernameEntry, setUsernameEntry] = useState("")
    const [passwordEntry, setPasswordEntry] = useState("")

    return <div className="registrationArea">
        <h1>Login/Sign-Up</h1>
        <div className="registrationForm">
            <Form action="/login" method="post">
                <label htmlFor="">Username:</label>
                <input type="text" name="username" value={usernameEntry} onChange={(e) => setUsernameEntry(e.target.value) }/>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" id="" value={passwordEntry} onChange={(e) => setPasswordEntry(e.target.value) }/>

                <div className="buttonSection">
                    <button type="submit">Login</button>
                    <Link to="/signup"><button>Sign-Up</button></Link>
                </div>
            </Form>
        </div>
    </div>
}

export default RegistrationBox