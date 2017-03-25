process.env.NODE_ENV = 'test'

const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js')
const chaiHttp = require('chai-http');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Server', () => {
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

  it('should exist', () => {
    expect(app).to.exist;
  });

  describe('/api/v1/restaurants', () => {

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

    it('POST should add a new restaurant', (done) => {
      chai.request(app)
      .post('/api/v1/restaurants')
      .send({
        name: 'Johnnys Place',
        address: '321 North Street',
        phone: '304-531-9836'
      })
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.have.length(31)
        expect(res.body[30]).to.have.property('id')
        expect(res.body[30].id).to.equal(31)
        expect(res.body[30]).to.have.property('name')
        expect(res.body[30].name).to.equal('Johnnys Place')
        expect(res.body[30]).to.have.property('address')
        expect(res.body[30].address).to.equal('321 North Street')
        expect(res.body[30]).to.have.property('phone')
        expect(res.body[30].phone).to.equal('304-531-9836')
        done()
      });
    });

    it('POST returns an error when all fields are not filled in', () => {
      chai.request(app)
      .post('api/v1/restaurants')
      .send({
        name: 'Johnnys Place',
        address: '321 North Street'
      })
      .end((err, res) => {
        expect(res).to.throw
        expect(res).to.have.status(422)
        done()
      })
    });
  });

  describe('/api/v1/happyhours', () => {
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
});
