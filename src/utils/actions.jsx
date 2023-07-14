import {URL} from "./url"
import { redirect, useParams } from "react-router-dom"


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
        credentials: "include",
        body: JSON.stringify(user)
    } )

    if (response.status === 400) {
        alert("Failed Signup.\nTry again, if error persists, try a different username")
        console.log(response)
        return redirect("/signup")
    }

    return redirect("/")
}

export const loginAction = async ({request}) => {
  
        const formData = await request.formData();
        const user = {
            username: formData.get("username"),
            password: formData.get("password")
        }
        const response = await fetch(URL + "/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        })

        if (response.status === 400){
            alert("Username or Password Invalid")
            return redirect("/")
        }
        return redirect("/characters")
} 

export const logoutAction = async () => {
    const response = await fetch(URL+ "/auth/logout", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    } )

    if (response.status === 400) {
        alert("Failed To Logout")
        return redirect("/characters")
    }

    return redirect("/")
    
}

export const createCharacterAction = async ({request}) => {
    const formData = await request.formData()
    const character = {
        name: formData.get("name"),
        classType: formData.get("classType"),
        weapon: formData.get("weapon"),
        armor: formData.get("armor"),
        health: 20,
        experience: 0,
        gold: 5,
        inventory: formData.get("inventory")
    }
    const response = await fetch(URL + "/character", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(character)
    })
    if (response.status === 400){
        alert("Character creation failed")
        return redirect("/newcharacter")
    }
    return redirect("/characters")
}

export const deleteCharacterAction = async ({request, params}) => {
    const response = await fetch(URL + "/character/" + params.id, {
        method: "delete",
        credentials: "include"
    })

    if (response.status === 400) {
        alert("Failed to Delete")
        return redirect("/characters")
    }

    return redirect("/characters")
}