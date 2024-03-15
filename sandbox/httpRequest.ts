import { BaseHttpClient } from '../http-client'
import { jsonPlaceHolderService } from '../services/jsonPlaceHolder'
import { postBody, putBody } from '../json/jsonPlaceHolderJSON'
import { expect } from 'chai'


var jsonPlaceHolder, res

describe('SandBox: JSON Place Holder API', function(){

    const httpService = new BaseHttpClient()

    before(function(){
        jsonPlaceHolder = new jsonPlaceHolderService(httpService) 
    })

    it('should do a GET request', async function(){
        res = await jsonPlaceHolder.getAllJsonPlaceHolder()
        expect(res.status).to.equal(200)
    })

    it('should do a GET request by ID', async function(){
        res = await jsonPlaceHolder.getAllJsonPlaceHolderById('2')
        expect(res.status).to.equal(200)
    })

    it('should do a POST request', async function(){
        res = await jsonPlaceHolder.postJsonPlaceHolder(postBody)
        expect(res.status).to.equal(201)
    })

    it('should do a PATCH request', async function(){
        const patchBody = { title : 'foo' }
        res = await jsonPlaceHolder.patchJsonPlaceHolder('2', patchBody)
        expect(res.status).to.equal(200)
        expect(res.data.title).to.equal('foo')
    })

    it('should do a PUT request', async function(){
        res = await jsonPlaceHolder.putJsonPlaceHolder(putBody.userId, putBody)
        expect(res.data.title).to.equal('shoo')
        expect(res.data.body).to.equal('fooBar')
    })

    it('should do a DELETE request', async function(){
        res = await jsonPlaceHolder.deleteJsonPlaceHolder('3')
        expect(res.status).to.equal(200)
    })
}) 