import { Form, Link } from "react-router-dom"
import { useState } from "react"
function Signup(props) {
    const [usernameEntry, setUsernameEntry] = useState("")
    const [passwordEntry, setPasswordEntry] = useState("")
    const [confirmPasswordEntry, setConfirmPasswordEntry] = useState("")

    return <div className="registrationArea">
        <h1>Sign-Up</h1>
        <div className="registrationForm">
            <Form action="/accountcreate" method="post">
                <label htmlFor="">Username:</label>
                <input type="text" name="username" value={usernameEntry} onChange={(e) => setUsernameEntry(e.target.value) }/>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" id="signpassword" value={passwordEntry} onChange={(e) => setPasswordEntry(e.target.value) }/>
                <label htmlFor="">Confirm Password:</label>
                    <input type="password" name="verifypassword" id="verifysignpassword" value={confirmPasswordEntry} onChange={(e) => setConfirmPasswordEntry(e.target.value) }/>
                <div className="buttonSection">
                    {passwordEntry === confirmPasswordEntry && passwordEntry !== "" && usernameEntry!== "" ? <button type="submit">Create Account</button> : <button type="submit" disabled>Create Account</button>}
                </div>
            </Form>
        </div>
    </div>
}

export default Signup