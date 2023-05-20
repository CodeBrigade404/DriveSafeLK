require("dotenv").config(); // Load the environment variables from the .env file
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./index");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../your-app-file"); // Replace with the actual path to your app file
const CitizenFines = require("../models/citizenFines"); // Replace with the actual path to your CitizenFines model file

describe("Fine Service", () => {
  beforeAll(async () => {
    // Connect to a test database
    await mongoose.connect("mongodb://localhost:27017/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear the CitizenFines collection before each test
    await CitizenFines.deleteMany();
  });

  it('should return all details when accessing the "/" route', async () => {
    // Create test data
    const fine1 = { description: "Fine 1", amount: 100 };
    const fine2 = { description: "Fine 2", amount: 200 };
    await CitizenFines.create([fine1, fine2]);

    // Send a GET request to the "/" route
    const response = await request(app).get("/driveSafe/payfine");

    // Expect the response status code to be 200
    expect(response.statusCode).toBe(200);

    // Expect the response body to contain the fines
    expect(response.body).toEqual([fine1, fine2]);
  });

  it("should return an error message when there is an error retrieving fines", async () => {
    // Mock the CitizenFines.find() method to throw an error
    jest.spyOn(CitizenFines, "find").mockImplementation(() => {
      throw new Error("Mock find error");
    });

    // Send a GET request to the "/" route
    const response = await request(app).get("/driveSafe/payfine");

    // Expect the response status code to be 500
    expect(response.statusCode).toBe(500);

    // Expect the response body to contain the error message
    expect(response.body).toEqual({ message: "Mock find error" });
  });
});
