const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Activity, conn } = require("../../src/db.js");

const agent = session(app);
const activity = {
  name: "skiing",
  difficulty: 1,
  duration: "1h",
  season: "Summer",
};

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Activity.sync({ force: false }).then(() => Activity.create(activity))
  );
  describe("POST /activity", () => {
    it("should get 201", () =>
      agent
        .post("/activity")
        .send({
          name: "skiing",
          difficulty: 1,
          duration: "1h",
          season: "Winter",
          countries: ["ARG"],
        })
        .expect(201));
    it("should throw an error if a field is missing", () =>
      agent
        .post("/activity")
        .send({
          name: "skiing",
          difficulty: 1,
          season: "Winter",
          countries: ["ARG"],
        })
        .expect(400));
  });
});
