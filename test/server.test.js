"use strict";
const { server } = require("../server");
const supertest = require("supertest");
const request = supertest(server);


describe('server test', () => {
  test("is there home path", async () => {
    const respons = await request.get("/");
    expect(respons.status).toEqual(200);
  });
  test("invalid url", async () => {
    const respons = await request.get("/hi");
    expect(respons.status).toEqual(404);
  });
  test("error ", async () => {
    const respons = await request.get("/error");
    expect(respons.status).toEqual(500);
    expect(typeof respons.body).toEqual('object');
  });
  test("error ", async () => {
    const respons = await request.get("/data");
    expect(respons.status).toEqual(200);
    expect(respons.body.date).toBeDefined;
  });

});
