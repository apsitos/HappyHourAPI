process.env.NODE_ENV = 'test'

const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js')
const chaiHttp = require('chai-http');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);

const setUp = () => {
  beforeEach(function(done) {
      database.migrate.latest()
      .then(function() {
        return database.seed.run()
        .then(function() {
          done();
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

describe('/api/v1/restaurants', () => {
  setUp();
  it('GET should return a JSON object of restaurants', (done) => {
    chai.request(app)
    .get('/api/v1/restaurants')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(30)
      done()
    });
  });

  it.skip('POST should')
});

describe('/api/v1/happyhours', () => {
  setUp();
  it('should return a JSON object of happyhours', (done) => {
    chai.request(app)
    .get('/api/v1/happyhours')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(30)
      done()
    });
  });

  it.skip('POST should')
})

describe('/api/v1/drinkers', () => {
  setUp();
  it('GET should return a JSON object of users', (done) => {
    chai.request(app)
    .get('/api/v1/drinkers')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(30)
      done()
    });
  });

  it.skip('POST should')
});

describe('GET /api/v1/restaurants/:id', (done) => {
  setUp();
  it('should get a specific restaurant', (done) => {
    chai.request(app)
    .get('/api/v1/restaurants/1')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[0]).to.have.property('name')
      expect(res.body[0]).to.have.property('address')
      expect(res.body[0]).to.have.property('phone')
      done()
    })
  })
})

describe('GET /api/v1/happyhours/:id', (done) => {
  setUp();
  it('should get a specific restaurant', (done) => {
    chai.request(app)
    .get('/api/v1/restaurants/1')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      // expect(res.body).to.be.a('array')
      // expect(res.body[0]).to.have.property('restaurant_id')
      // expect(res.body[0]).to.have.property('address')
      // expect(res.body[0]).to.have.property('phone')
      done()
    })
  })
})
