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
    .catch(error => {
      console.error('Restaurants could not be loaded', error);
      response.send(404, 'Restaurants could not be loaded');
    })
})

app.get('/api/v1/happyhours', (request, response) => {
  database('happyhours').select()
    .then(happyhours => { response.status(200).json(happyhours); })
    .catch(error => {
      console.error('Happy hours could not be loaded', error);
      response.send(404, 'Happy hours could not be loaded');
    })
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
    .catch(error => {
      console.error('Select another location', error);
      response.send(404, 'Select another location');
    })
})

app.get('/api/v1/happyhours/:id', (request, response) => {
  const { id } = request.params;
  database('happyhours').where('id', id).select()
    .then(happyhour => { response.status(200).json(happyhour); })
    .catch(error => {
      console.error('There is no happy hour', error);
      response.send(404, 'There is no happy hour');
    })
})

app.get('/api/v1/drinkers/:id', (request, response) => {
  const { id } = request.params;
  database('drinkers').where('id', id).select()
    .then(person => { response.status(200).json(person); })
    .catch(error => {
      console.error('This person does not exist', error);
      response.send(404, 'This person does not exist')
    })
})

app.post('/api/v1/restaurants', (request, response) => {
  const { name, address, phone } = request.body;
  const restaurant = { name, address, phone, created_at: new Date };

  database('restaurants').insert(restaurant)
    .then(() => {
      database('restaurants').select()
        .then((restaurants) => {
          response.status(200).json(restaurants)
        })
        .catch(error => {
          console.error('Could not add restaurant', error);
          response.send(422, 'Please ensure the restaurant has a name, address, and phone number')
        })
    })
})

app.post('/api/v1/happyhours', (request, response) => {
  const { restaurant_id, drinker_id, hours, drinks, food } = request.body;
  const happyhour = { restaurant_id, drinker_id, hours, drinks, food, created_at: new Date };

  database('happyhours').insert(happyhour)
    .then(() => {
      database('happyhours').select()
        .then((happyhour) => {
          response.status(200).json(happyhour)
        })
        .catch(error => {
          console.error('Could not add a happyhour', error);
          response.send(422, 'Please ensure you have filled out all fields')
        })
    })
})

app.post('/api/v1/drinkers', (request, response) => {
  const { name } = request.body;
  const drinker = { name, created_at: new Date };

  database('drinkers').insert(drinker)
    .then(() => {
      database('drinkers').select()
        .then((drinkers) => {
          response.status(200).json(drinkers)
        })
        .catch(error => {
          console.error('Could not add user', error);
          response.send(422, 'Please add a favorite')
        })
    })
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
