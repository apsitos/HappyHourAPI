const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Happy Hours'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/v1/restaurants', (request, response) => {
  database('restaurants').select()
    .then(restaurants => { response.status(200).json(restaurants); })
    .catch(error => { console.error('Restaurants could not be loaded', error); })
})

app.get('/api/v1/happyhours', (request, response) => {
  database('happyhours').select()
    .then(happyhours => { response.status(200).json(happyhours); })
    .catch(error => { console.error('Happy hours could not be loaded', error); })
})

app.get('/api/v1/drinkers', (request, response) => {
  database('drinkers').select()
    .then(drinkers => { response.status(200).json(drinkers); })
    .catch(error => { console.error('Participants cannot be loaded', error) ;})
})

app.get('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params;
  database('restaurants').where('id', id).select()
    .then(location => { response.status(200).json(location); })
    .catch(error => { console.error('Select another location', error);})
})

app.get('/api/v1/happyhours/:id', (request, response) => {
  const { id } = request.params;
  database('happyhours').where('id', id).select()
    .then(happyhour => { response.status(200).json(happyhour); })
    .catch(error => { console.error('There is no happy hour', error);})
})

app.get('/api/v1/drinkers/:id', (request, response) => {
  const { id } = request.params;
  database('drinkers').where('id', id).select()
    .then(person => { response.status(200).json(person); })
    .catch(error => { console.error('This person does not exist', error);})
})

app.post('/api/v1/restaurants', (request, response) => {
  const { name, address, phone } = request.body;
  const restaurant = { name, address, phone, create_at: new Date };

  database('restaurants').insert(restaurant)
    .then()
})

app.post('/api/v1/happyhours', (request, response) => {

})

app.post('/api/v1/drinkers', (request, response) => {

})

app.patch('/api/v1/restaurants', (request, response) => {

})

app.patch('/api/v1/happyhours', (request, response) => {

})

app.patch('/api/v1/drinkers', (request, response) => {

})

app.delete('/api/v1/restaurants', (request, response) => {

})

app.delete('/api/v1/happyhours', (request, response) => {

})

app.delete('/api/v1/drinkers', (request, response) => {

})


app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})
