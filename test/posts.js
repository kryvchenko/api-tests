import request from '../config/common';
require('dotenv').config()
import { expect } from 'chai';
import { createRandomUserWithFaker } from "../helper/user.helper";
const { faker } = require('@faker-js/faker');
const TOKEN = process.env.USER_TOKEN;



describe('User Posts', () => {
    let postId, userId;
    before(async () => {
       userId = await createRandomUserWithFaker();
    });

    it('/posts', async () => {
        const data = {
            user_id: userId,
            title: faker.lorem.sentence(5),
            body: faker.lorem.sentence(16)
        }

        const postRes = await request
        .post('posts')
        .set("Authorization", `Bearer ${TOKEN}`)
        .send(data)

    

        expect(postRes.body.data).to.deep.include(data);
        postId = postRes.body.data.id;
    });
    
    it('GET/ posts/ :id', async () => {
        await request
        .get(`posts/${postId}`)
        .set("Authorization", `Bearer ${TOKEN}`)
        .expect(200)
    });

    describe('Negative test',  () => {
        it('401 Authentication Failed', async () => {
            const data = {
                user_id: userId,
                title: "Here is my first post",
                body: "This is the body"
            }
    
            const postRes = await request
            .post('posts')
            // .set("Authorization", `Bearer ${TOKEN}`)
            .send(data)
            expect(postRes.body.code).to.eq(401);
            expect(postRes.body.data.message).to.eq("Authentication failed");
            console.log(postRes);
        });

        it('422 Validation Failed', async () => {
            const data = {
                user_id: userId,
                title: "Here is my first post"
            }
    
            const postRes = await request
            .post('posts')
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(data)

            console.log(postRes.body);

            expect(postRes.body.code).to.eq(422);
            expect(postRes.body.data[0].field).to.eq('body');
            expect(postRes.body.data[0].message).to.eq("can't be blank");
        });
    });
});