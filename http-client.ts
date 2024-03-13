import * as HttpUtil from './util/http'
import UrlUtil = require('./util/url')
import _ from 'lodash'

const end = 'https://jsonplaceholder.typicode.com'


export class BaseHttpClient {

  
    async sendHttpRequest(endPoint, params){
        return await HttpUtil.sendHttpRequest(endPoint, params)
    }

    async jsonPost(endPoint, data){
        return await this.sendHttpRequest(endPoint, {
            method: 'POST',
            body: JSON.stringify(data),
        },
        )
    }

    async jsonPatch(endPoint, data){
        return await this.sendHttpRequest(endPoint, {
            method: 'PATCH',
            body: JSON.stringify(data),
        },
        )
    }

    async jsonPut(endPoint, data){
        return await this.sendHttpRequest(endPoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        },
        )
    }

    async jsonDelete(endPoint, data){
        return await this.sendHttpRequest(endPoint, {
            method: 'DELETE',
            body: JSON.stringify(data),
        },
        )
    }

    async jsonGet(endPoint, urlParams = {}){
        let url = `${endPoint}`
        if (!_.isEmpty(urlParams)){
            url = `${url}?`
        }

        const queryString = UrlUtil.buildQueryString(urlParams)
        url = `${url}${queryString}`

        return await this.sendHttpRequest(url, {
            method:'GET',
        },
        )
    }

}

