const { Activity, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Activity model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Activity.sync({ force: false }))
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Activity.create({ name: "Skii" });
      });
    });
    describe("difficulty", () => {
      it("should throw an error if difficulty is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a valid difficulty")))
          .catch(() => done());
      });
      it("should work when its a valid difficulty", () => {
        Activity.create({ difficulty: 1 });
      });
      it("should throw an error if difficulty is not in the range 1-5", (done) => {
        Activity.create({ difficulty: 6 })
          .then(() => done(new Error("It requires a valid difficulty")))
          .catch(() => done());
      });
    });
    describe("duration", () => {
      it("should throw an error if duration is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a valid duration")))
          .catch(() => done());
      });
      it("should throw an error if duration is not a number", (done) => {
        Activity.create({ duration: "I am a string" })
          .then(() => done(new Error("It requires a valid duration")))
          .catch(() => done());
      });
      it("should work when its a valid duration", () => {
        Activity.create({ duration: 1 });
      });
    });
    describe("season", () => {
      it("should throw an error if season is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a valid season")))
          .catch(() => done());
      });
      it("should work when its a valid season", () => {
        Activity.create({ season: "Winter" });
      });
      it("should throw an error if season is not in the range Spring, Summer, Fall, Winter", (done) => {
        Activity.create({ season: "Hello" })
          .then(() => done(new Error("It requires a valid season")))
          .catch(() => done());
      });
    });
  });
});
