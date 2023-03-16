
export const toggleColor = (data = {backgroundColor :  "white",
color : "black"} ,action) => {
    if(action.type === "toggleDark"){
        return {
            backgroundColor :  "black",
            color : "white"
        }

    }else if(action.type === "toggleLight"){
        return {
            backgroundColor :  "white",
            color : "black"
        }
    }
    return data
}