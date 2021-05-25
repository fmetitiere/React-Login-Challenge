export const showUsername = (userName) => {
    return{
        type: "CHANGE_USER",
        name: userName
    }
} 

export const listUsers = () => {
    return{
        type: "LIST_USER",
    }
} 