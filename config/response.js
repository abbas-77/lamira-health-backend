import {strings} from "../public/strings.js";



export const SuccesResponse = (data) => {
    return ({
        statusCode : 200,
        isSuccess : true,
        message : strings.succesMessage,
        data
    })
    
}