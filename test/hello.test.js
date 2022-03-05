const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");

const expect = chai.expect;

chai.use(chaiHttp);

describe("/Teste no server express", () => {
    it("Teste do Hello World", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res.body.message).to.be.equal("Hello World!");
          expect(res.status).to.be.equal(200);
          done();
        });
    });
  });