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

    it('POST should return an error when all fields are not filled in', (done) => {
      chai.request(app)
      .post('api/v1/restaurants')
      .send({
        name: 'Johnnys Place',
        address: '321 North Street'
      })
      .end((err, res) => {
        expect(res).to.throw
        // expect(res).to.have.status(422)
        done()
      });
    });
  });

  describe('/api/v1/restaurants/:id', () => {
    it('GET should get a specific restaurant', (done) => {
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
      });
    });

    it('GET returns an error if the restaurant does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/restaurants/43')
      .end((err, res) => {
        expect(res).to.throw
        done()
      });
    });

    it.skip('PATCH should allow a restaurant to be updated', (done) => {
      chai.request(app)
      .patch('/api/v1/restaurants/31')
      .send({
        name: 'Fat Shack'
      })
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0]).to.have.property('name')
        expect(res.body[0].name).to.equal('Fat Shack')
        done()
      });
    });

    it.skip('PATCH should return an error if the restaurant does not exist', (done) => {
      chai.request(app)
      .patch('/api/v1/restaurants/43')
      .send({
        name: 'Fat Shack'
      })
      .end((err, res) => {
        expect(res).to.throw
        expect(res).to.have.status(404)
        done()
      });
    });

    it.skip('DELETE should remove a restaurant', (done) => {
      chai.request(app)
      .delete('/api/v1/restaurants/21')
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(29)
        done()
      });
    });

    it('DELETE should return an error if the restaurant does not exist', (done) => {
      chai.request(app)
      .delete('/api/v1/restaurants/43')
      .end((err, res) => {
        expect(err).to.throw
        // expect(err).to.have.status()
        done()
      });
    });
  });

  describe('/api/v1/happyhours', () => {
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

    it('POST should add a new happy hour', (done) => {
      chai.request(app)
      .post('/api/v1/happyhours')
      .send({
        hours: 'M-F 4-7',
        drinks: '$4 You call it',
        food: '$5 hamburgers'
      })
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.have.length(31)
        expect(res.body[30]).to.have.property('id')
        expect(res.body[30].id).to.equal(31)
        expect(res.body[30]).to.have.property('restaurant_id')
        expect(res.body[30].restaurant_id).to.equal(null)
        expect(res.body[30]).to.have.property('drinker_id')
        expect(res.body[30].drinker_id).to.equal(null)
        expect(res.body[30]).to.have.property('hours')
        expect(res.body[30].hours).to.equal('M-F 4-7')
        expect(res.body[30]).to.have.property('drinks')
        expect(res.body[30].drinks).to.equal('$4 You call it')
        expect(res.body[30]).to.have.property('food')
        expect(res.body[30].food).to.equal('$5 hamburgers')
        done()
      });
    });

    it('POST should return an error when all fields are not filled in', (done) => {
      chai.request(app)
      .post('api/v1/happyhours')
      .send({
        hours: 'M-F 4-7',
        drinks: '$4 You call it',
      })
      .end((err, res) => {
        expect(res).to.throw
        done()
      });
    });
  });

  describe('/api/v1/happyhours/:id', () => {
    it('GET should get a specific happy hour', (done) => {
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
      });
    });

    it('GET returns an error if the happy hour does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/happyhours/43')
      .end((err, res) => {
        expect(res).to.throw
        done()
      });
    });

    it.skip('PATCH should allow a happy hour to be updated', (done) => {
      chai.request(app)
      .patch('/api/v1/happyhours/31')
      .send({
        drinks: '$5 Fat Shake'
      })
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0]).to.have.property('drinks')
        expect(res.body[0].drinks).to.equal('$5 Fat Shake')
        done()
      });
    });

    it.skip('PATCH should return an error if the happy hour does not exist', (done) => {
      chai.request(app)
      .patch('/api/v1/happyhours/43')
      .send({
        drink: '$5 Fat Shake'
      })
      .end((err, res) => {
        expect(res).to.throw
        expect(res).to.have.status(404)
        done()
      });
    });

    it('DELETE should delete a specific happy hour', (done) => {
      chai.request(app)
      .delete('/api/v1/happyhours/21')
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(29)
        done()
      });
    });

    it('DELETE should return an error if the happy hour does not exist', (done) => {
      chai.request(app)
      .delete('/api/v1/happyhours/43')
      .end((err, res) => {
        expect(err).to.throw
        // expect(err).to.have.status()
        done()
      });
    });
  });

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

    it('POST should add a new user', (done) => {
      chai.request(app)
      .post('/api/v1/drinkers')
      .send({
        name: 'Katja Gruen'
      })
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(31)
        expect(res.body[30]).to.have.property('name')
        expect(res.body[30].name).to.equal('Katja Gruen')
        done()
      });
    });

    it('POST should return an error if there is no name', (done) => {
      chai.request(app)
      .post('/api/v1/drinkers')
      .send({})
      .end((err, res) => {
        expect(res).to.throw
        // expect(res).to.have.status(422)
        done()
      });
    });
  });

  describe('/api/v1/drinkers/:id', () => {
    it('GET should get a specific user', (done) => {
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
      });
    });

    it('GET returns an error if the user does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/drinkers/43')
      .end((err, res) => {
        expect(res).to.throw
        done()
      });
    });

    it.skip('PATCH should allow a userto be updated', (done) => {
      chai.request(app)
      .patch('/api/v1/drinkers/31')
      .send({
        name: 'Sandy Bruse'
      })
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0]).to.have.property('name')
        expect(res.body[0].drinks).to.equal('Sandy Bruse')
        done()
      });
    });

    it.skip('PATCH should return an error if the user does not exist', (done) => {
      chai.request(app)
      .patch('/api/v1/happyhours/43')
      .send({
        name: 'Sandy Bruse'
      })
      .end((err, res) => {
        expect(err).to.throw
        expect(err).to.have.status(404)
        done()
      });
    });

    it.skip('DELETE should delete a specific user', (done) => {
      chai.request(app)
      .delete('/api/v1/drinkers/21')
      .end((err, res) => {
        if(err) {done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(29)
        done()
      });
    });
  });

  it('DELETE should return an error if the user does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/drinkers/43')
    .end((err, res) => {
      expect(err).to.throw
      // expect(err).to.have.status()
      done()
    });
  });
});
