import URL from "./url"
import { redirect } from "react-router-dom"


export const signupAction = async({request}) => {
    console.log(request)
    const formData = await request.formData()
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(URL + "/auth/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    } )

    if (response.status === 400) {
        alert("Failed Signup")
        console.log(response)
        return redirect("/signup")
    }

    return redirect("/")
}
