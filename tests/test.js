// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../backend/server";

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Students", () => {
  describe("GET /", () => {
    // Test to get all students record
    it("should get all students record", (done) => {
      chai
        .request(app)
        .get("/all")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    // Test to get single student record
    it("should get a single student record", (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test to get single student record
    it("should not get a single student record", (done) => {
      const id = 5;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /", () => {
    // Test to get all students record
    it("should add a students record", (done) => {
      const information = "pepe-21";
      chai
        .request(app)
        .post(`/${information}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("PUT /", () => {
    // Test to get all students record
    it("should update a student name", (done) => {
      const information = "1-pepe";
      chai
        .request(app)
        .put(`/${information}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          console.log(res.body);
          done();
        });
    });
  });

  describe("DELETE /", () => {
    // Test to get all students record
    it("should delete a student", (done) => {
      const id = 1;
      chai
        .request(app)
        .delete(`/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          console.log(res.body);
          done();
        });
    });
  });
});
