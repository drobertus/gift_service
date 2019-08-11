const assert = require("assert")
//const testInit = require('./dbinit')
const expect = require('chai').expect
const request = require("supertest")

//const express = require('express');
 
const app = require("../../src/routes") //express();

describe("POST to the creation routes", async () => {


    it("with a get call we should see stuff", async () => {
        console.log("starting get test")
        const resp = await request(app)
        .get("/")
        .expect(200)
        console.log({res: resp.body})
        expect(resp.body).to.contain({"msg":"this is a getter"})
   
    });

    it("with a good value shoud create a record", async () => {
        console.log("starting tet")
      //  try{
        const resp = await request(app)
        .post("/gifts/1.0")
        .send({
            creator_auth_type: 'organization',
            creator_auth_value: '43643468',
            product_id: '5_pack_images',
            product_source: 'commerce',
          //  redemption_code: 'A2355FGE'
        })
        
        expect(resp.body).to.contain({newGift: {
            creator_auth_type: 'organization',
            creator_auth_value: '43643468',
            product_id: '5_pack_images',
            product_source: 'commerce'
        }})
    //}catch(error){
    //    console.log({error})
    //}
    });

})