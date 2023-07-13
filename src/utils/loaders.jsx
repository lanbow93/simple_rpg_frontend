import URL from "./url";
export const charactersLoader = async () => {
    try {
        return await fetch(URL + "/character", {
            method: "get",
            credentials: "include"
        })
    } catch (error) {
        return error
    }
}

export const characterLoader = async ({params}) => {
    try {
        return await fetch(URL + "/character/" + params.id, {
            method:"get",
            credentials:"include"
        })
    } catch(error){
        return error
    }
}


