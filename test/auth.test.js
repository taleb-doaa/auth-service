import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); // optional: clean up DB
  await mongoose.connection.close(); // <- this prevents Jest from hanging
});

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({
        email: "test@mail.com",
        password: "123456",
      });

    expect(res.status).toBe(201);
  });
});
