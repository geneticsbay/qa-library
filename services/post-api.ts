import { buildUrl } from '../util/url'


export class ApiOneService {
    httpClient: any
    url: string

    constructor(httpClient){
        this.httpClient = httpClient
        this.url = buildUrl('posts')
    }

    async getAllPosts(){
        const response = await this.httpClient.jsonGet(this.url)
        return response
    }

    async getPostsById(id){
        const endPoint = buildUrl(this.url, id)
        console.log(endPoint)
        const response = await this.httpClient.jsonGet(endPoint)
        return response
    }

}