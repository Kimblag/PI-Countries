const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: false }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Country.create({ name: "Prueba" });
      });
    });
    describe("flag", () => {
      it("should throw an error if flag is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid flag")))
          .catch(() => done());
      });
      it("should work when its a valid flag", () => {
        Country.create({ flag: "https://flagcdn.com/ca.svg" });
      });
    });
    describe("continent", () => {
      it("should throw an error if continent is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid continent")))
          .catch(() => done());
      });
      it("should work when its a valid continent", () => {
        Country.create({ continent: "South America" });
      });
    });
    describe("capital", () => {
      it("should throw an error if capital is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid capital")))
          .catch(() => done());
      });
      it("should work when its a valid capital", () => {
        Country.create({ capital: "Prueba" });
      });
    });
    describe("subregion", () => {
      it("should throw an error if subregion is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid subregion")))
          .catch(() => done());
      });
      it("should work when its a valid subregion", () => {
        Country.create({ subregion: "South America" });
      });
    });
    describe("area", () => {
      it("should throw an error if area is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid area")))
          .catch(() => done());
      });
      it("should work when its a valid area", () => {
        Country.create({ area: 2766890 });
      });
      it("should throw an error if area is not a number", (done) => {
        Country.create({ area: "I'm not a number" })
          .then(() => done(new Error("It requires a valid area number")))
          .catch(() => done());
      });
    });
    describe("population", () => {
      it("should throw an error if population is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid population")))
          .catch(() => done());
      });
      it("should work when its a valid population", () => {
        Country.create({ population: 43590400 });
      });
      it("should throw an error if population is not a number", (done) => {
        Country.create({ population: "Hello" })
          .then(() => done(new Error("It requires a valid population number")))
          .catch(() => done());
      });
    });
  });
});
