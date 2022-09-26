import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
const TOKEN = "855dd9ce657a24166886754bc468e289d1ec4f668ec042270578b99d7ad001b9";
import { expect } from 'chai';

xdescribe('Users', () => {
    it('GET/users', () => {
        return request.get(`users?access-token=${TOKEN}`).then((res) => {
        expect(res.body.data).to.not.be.empty;
       });
    });

    // it('GET /users/ :id', (done) => {
    //    request.get(`users?access-token=${TOKEN}`).end((err, res) => {
    //     expect(res.body.data).to.not.be.empty;
    //     done();
    //    });
    // });

    it('GET /users/:id', () => {
            return request.get(`users/2108?access-token=${TOKEN}`).then((res) => {
            expect(res.body.data.id).to.be.eq(2108)
           });
    });

    it('GET /users with query params', () => {
            return request.get(`users?access-token=${TOKEN}&page=5&gender=female&status=active`).then((res) => {
                expect(res.body.data).to.not.be.empty;
                res.body.data.forEach((data) => {
                    expect(data.gender).to.be.eq("female")
                    expect(data.status).to.be.eq("active")
                })
           });
    });
    
    it('POST/users', () => {
        const data = {
                email: `maxym-${Math.floor(Math.random() * 9999)}@mail.com`,
                name: "Max Loza",
                gender: "male",
                status: "inactive"
        }

        return request
        .post('users')
        .set("Authorization", `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
            // data.email = "test@mail.com"
            console.log(res.body)
            expect(res.body.data).to.deep.include(data)
        })
    });
    it('PUT /users/ :id', () => {
        const data = {
            status: "active",
            name: `Mehmed-${Math.floor(Math.random() * 9999)}`
            }

        return request
        .put('users/3038')
        .set("Authorization", `Bearer ${TOKEN}`) 
        .send(data)  
        .then((res) => {
            console.log(res.body)
            expect(res.body.data.status).to.be.eq(data.status)
            expect(res.body.data.name).to.be.eq(data.name)
            expect(res.body.data).to.deep.include(data)
        }) 
    });
    it('DELETE /users/ :id', () => {

        return request
        .delete('users/3065')
        .set("Authorization", `Bearer ${TOKEN}`)  
        .then((res) => {
            expect(res.body.data).to.be.eq(null)
        }) 
    });
});