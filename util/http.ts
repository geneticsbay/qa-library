import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function generateDefaultHeaders(){
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Encoding': 'application/json'
    }
}

export async function sendHttpRequest(endPoint, params){

    let { body, method} = params
    const headers = generateDefaultHeaders()

    const config = Object.assign (
        {},
        {
            url: endPoint,
            baseURL: BASE_URL,
            method,
            data:body,
            headers
        },
        
    )
    try{
        const response = await axios(config)
        return response
    } catch(error) {
        console.log(error)
    }
}


