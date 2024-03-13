//import { describe } from 'node:test'
import { BaseHttpClient } from '../http-client'
import { ApiOneService } from '../services/post-api'


let apiOne, res

describe('TTD Test: API one', function(){

    const httpService = new BaseHttpClient()

    before(function(){
        apiOne = new ApiOneService(httpService) 
    })

    it('should do a GET request', async function(){
        res = await apiOne.getAllPosts()
    })

    it('should do a GET request', async function(){
        res = await apiOne.getPostsById('2')
        console.log(res.data)
    })
})