const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should();
let token = '';
describe('Article.js', () => {

    describe('/article', () => {
        it('should return success get articles', () => {
            chai.request(app)
                .get('/article')
                .end((err, res) => {
                    chai.assert.equal(res.status, 200);
                

                })
        })
        it('should return data which contains `meta`',()=>{
            chai.request(app)
            .get('/article?query=meta')
            .end((err,res) =>{
              
                chai.assert.lengthOf(res.body.data,1)
                chai.assert.equal(res.status,200);
                //  res.body.data.message.should.equal('limit or page must more than 0');
                //  res.body.data.message.should.be.a('string');
            
            })
        })
        // it('should return data expected over the actual`',()=>{
        //     chai.request(app)
        //     .get('/article?query=meta')
        //     .end((err,res) =>{
              
        //         chai.assert.lengthOf(res.body.data,4)
        //         // chai.assert.equal(res.status,500);
        //          res.should.have.status(404);
            
        //     })
        // })

        //post
        it('should post data article',()=>{
            chai.request(app)
            .post('/article')
            .send({id:'22',author_id:"123123",title:'test',body:'try body'})
            .end((err,res)=>{

            })
        })
    })



})