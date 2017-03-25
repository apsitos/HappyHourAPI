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

  it('POST should add a new restaurant', () => {
    chai.request(app)
    .post('/api/vi/restaurants')
    .send({
      name: 'Johnnys Place',
      address: '321 North Street',
      phone: '304-531-9836'
    })
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })
});

describe('/api/v1/happyhours', () => {
  setUp();
  it.skip('should return a JSON object of happyhours', (done) => {
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

    it.skip('GET returns an error if user does not exist', (done)=>{
    chai.request(app)
    .get('/api/v1/users/51')
    .end((err, res)=> {
      expect(res).to.throw;
      expect(res).to.have.status(404)
      done()
    })
  })
})

describe('GET /api/v1/happyhours/:id', (done) => {
  setUp();
  it('should get a specific happy hour', (done) => {
    chai.request(app)
    .get('/api/v1/happyhours/1')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[0]).to.have.property('id')
      expect(res.body[0]).to.have.property('restaurant_id')
      expect(res.body[0]).to.have.property('drinker_id')
      expect(res.body[0]).to.have.property('hours')
      expect(res.body[0]).to.have.property('drinks')
      expect(res.body[0]).to.have.property('food')
      done()
    })
  })
})

describe('GET /api/v1/drinkers/:id', (done) => {
  setUp();
  it('should get a specific user', (done) => {
    chai.request(app)
    .get('/api/v1/drinkers/1')
    .end((err, res) => {
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[0]).to.have.property('id')
      expect(res.body[0]).to.have.property('fav_hh')
      expect(res.body[0]).to.have.property('name')
        done()
    })
  })
})
