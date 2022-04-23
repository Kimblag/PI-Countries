/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: 'Argentina',
  id: 'ARG',
  urlImg: 'asd',
  continent: 'South America',
  capital: 'Buenos Aires'
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: false }).then(() => Country.findOne({where: {name: country.name}}))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
  describe("GET /countries/:id", () => {
    it("should get 200", () =>
      agent.get(`/countries/${country.id}`).expect(200));
    it("should get 404 if a invalid id is passed", () => {
      const badId = "XXX";
      return agent.get(`/countries/${badId}`).expect(404);
    });
  });
});
