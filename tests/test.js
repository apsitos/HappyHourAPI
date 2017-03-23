const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js')
const chaiHttp = require('chai-http');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);

const setUp = () => {
  beforeEach(function(done) {
    database.migrate.rollback()
    .then(function() {
      database.migrate.latest()
      .then(function() {
        return database.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach((done)=>{
    database.migrate.rollback()
    .then(()=>{
      done()
    });
  });
}

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist;
  });
});

describe('GET /api/v1/restaurants', () => {
  setUp();
  it('should return a JSON object of restaurants', (done) => {
    chai.request(app)
    .get('/api/v1/restaurants')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(29 )
      done()
    });
  });
});

describe('GET /api/v1/happyhours', () => {
  setUp();
  it('should return a JSON object of restaurants', (done) => {
    chai.request(app)
    .get('/api/v1/restaurants')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(29 )
      done()
    });
  });
})

describe('GET /api/v1/drinkers', () => {
  setUp();
  it('should return a JSON object of restaurants', (done) => {
    chai.request(app)
    .get('/api/v1/restaurants')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(29 )
      done()
    });
  });
});

describe('GET /api/v1/restaurants/:id', (done) => {
  
})
