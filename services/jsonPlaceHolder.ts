import { buildUrl } from '../util/url'


export class jsonPlaceHolderService {
    httpClient: any
    url: string

    constructor(httpClient){
        this.httpClient = httpClient
        this.url = buildUrl('posts')
    }

    async getAllJsonPlaceHolder(){
        const response = await this.httpClient.jsonGet(this.url)
        return response
    }

    async getAllJsonPlaceHolderById(id){
        const endPoint = buildUrl(this.url, id)
        const response = await this.httpClient.jsonGet(endPoint)
        return response
    }

    async postJsonPlaceHolder(data){
        const response = await this.httpClient.jsonPost(this.url, data)
        return response 
    }

    async patchJsonPlaceHolder(id, data){
        const endPoint = buildUrl(this.url, id)
        const response = await this.httpClient.jsonPatch(endPoint, data)
        return response 
    }

    async putJsonPlaceHolder(id, data){
        const endPoint = buildUrl(this.url, id)
        const response = await this.httpClient.jsonPut(endPoint, data)
        return response 
    }

    async deleteJsonPlaceHolder(id){
        const endPoint = buildUrl(this.url, id)
        const response = await this.httpClient.jsonPut(endPoint)
        return response 
    }

}