import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
const TOKEN = "855dd9ce657a24166886754bc468e289d1ec4f668ec042270578b99d7ad001b9";
const { faker } = require('@faker-js/faker');

export const createRandomUserWithFaker = async () => {
    const userData = {
        email: faker.internet.email(),
        name: faker.name.firstName(),
        gender: "male",
        status: "inactive"
    }
    const res = await request
    .post('users')
    .set("Authorization", `Bearer ${TOKEN}`)
    .send(userData)
    console.log(res.body);
    return res.body.data.id;
}

export const createRandomUser = async () => {
    const userData = {
        email: `maxym-${Math.floor(Math.random() * 9999)}@mail.com`,
        name: "Max Loza",
        gender: "male",
        status: "inactive"
    }
    const res = await request
    .post('users')
    .set("Authorization", `Bearer ${TOKEN}`)
    .send(userData)
    return res.body.data.id;
}