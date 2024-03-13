import _ from 'lodash'

export function buildUrl(...parts){
    const encodedParts = parts.map(part =>{
        const sanitizedPart = _.trim(part, '/')
        const innerPart =  sanitizedPart.split('/')
        if(innerPart.length > 1){
            return buildUrl(...innerPart)
        }else{
            return encodeURIComponent(sanitizedPart)
        }
    })
    return encodedParts.join('/')
}

export function buildQueryString(params){
    const queryParams: string[] = []
    Object.keys(params).forEach(key => {
        const value = params[key]
        const endcodedKey = encodeURIComponent(key)
        if(_.isArray(value)){
            value.forEach(item => {
                queryParams.push(`${endcodedKey}=${encodeURIComponent(item)}`)
            })
        } else {
            queryParams.push(`${endcodedKey}=${value}`)
        }
    })

    return queryParams.join('&')
}