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

//retrieve all restaurants
app.get('/api/v1/restaurants', (request, response) => {
  const location = request.query.location
  console.log(location);

  if(!location) {
    database('restaurants').select()
    .then(restaurants => response.status(200).json(restaurants))
    .catch(err => response.status(404).send('Restaurants could not be loaded'))
  } else {
    database('restaurants').where('id', location).select()
    .then(restaurant => response.status(200).json(restaurant))
    .catch(err => response.status(404).send('That id is not in our records'))
  }
});

//retrieve a specific restaurant
app.get('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params;
  database('restaurants').where('id', id).select()
  .then(location => {
    if(location.length > 0) {
      response.status(200).json(location);
    } else {
      response.status(404).send('That location has not yet been added');
    }
  });
});

//add a new restaurant
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
      response.status(422).send('Please ensure the restaurant has a name, address, and phone number')
    });
  });
});

//update information about a restaurant
app.put('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  database('restaurants').where('id', id).update({ name: name })
  .then(() => {
    database('restaurants').where('id', id).select()
      .then((restaurant) => {
        if(restaurant.length < 1) {
          response.status(404).send('ID did not match exisiting restaurants')
        } else {
          response.status(200).json(restaurant)
        };
      })
      .catch((error) => {
        console.error('Cannot update restaurant', error);
        response.status(422).send('Cannot update restaurant');
      });
  });
});

//remove a restaurant
app.delete('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params;

  database('drinkers').where('fav_hh', id).update({fav_hh: null})
  .then(() => {
    database('happyhours').where('restaurant_id', id).del()
  }).then(() => {
    database('restaurants').where('id', id).del()
    .then(() => {
      database('restaurants').select()
      .then((restaurants) => {
        response.status(200).json(restaurants);
      })
      .catch((error) => {
        console.error('Cannot delete restaurant', error);
        response.status(422).send('Cannot delete restaurant');
      })
    });
  });
});

//retrieve all happy hours
app.get('/api/v1/happyhours', (request, response) => {
  const time = request.query.time

  if(!time){
    database('happyhours').select()
    .then(happyhours => { response.status(200).json(happyhours); })
    .catch(error => { response.status(404).send('Happy hours could not be loaded');
  } else {
    database('happyhours').where('id', time).select()
    .then(happyhours => { response.status(200).json(happyhours); })
    .catch(err = response.status(404).send('There is no happy hour with that id'))
  }
});

//retrieve a specific happy hour
app.get('/api/v1/happyhours/:id', (request, response) => {
  const { id } = request.params;

  database('happyhours').where('id', id).select()
  .then(happyhour => { response.status(200).json(happyhour); })
  .catch(error => {
    console.error('There is no happy hour', error);
    response.status(404).send('There is no happy hour matching that ID');
  });
});

//add a new happy hour
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
      response.status(422).send('Please ensure you have filled out all fields')
    });
  });
});

//update information about a specific happy hour
app.put('/api/v1/happyhours/:id', (request, response) => {
  const { id } = request.params;
  const { drinks } = request.body;

  database('happyhours').where('id', id).update({ drinks: drinks })
  .then(() => {
    database('happyhours').where('id', id).select()
      .then((happyhours) => {
          response.status(200).json(happyhours)
      })
      .catch((error) => {
        console.error('Cannot update happy hour', error);
        response.status(422).send('Cannot update happy hour');
      });
  });
});

//remove a specific happy hour
app.delete('/api/v1/happyhours/:id', (request, response) => {
  const { id } = request.params;

  database('happyhours').where('drinker_id', id).update({drinker_id: null})
  .then(() => {
    database('happyhours').where('id', id).del()
    .then(() => {
      database('happyhours').select()
      .then((happyhours) => {
        response.status(200).json(happyhours)
      })
      .catch((error) => {
        console.error('Cannot delete happy hour', error);
        response.status(422).send('Cannot delete happy hour');
      })
    });
  });
});

//retreieve all users
app.get('/api/v1/drinkers', (request, response) => {
  const user = request.query.user

  if(!user){
    database('drinkers').select()
    .then(drinkers => { response.status(200).json(drinkers); })
    .catch(error => { response.status(404).send('Participants cannot be loaded') })
  } else{
    database('drinkers').where('id', user).select()
    .then(user => { response.status(200).json(user) })
    .catch(error => { response.status(404).send('There is no user with that id') })
  }
});

//retrieve a specific user
app.get('/api/v1/drinkers/:id', (request, response) => {
  const { id } = request.params;
  database('drinkers').where('id', id).select()
    .then(person => { response.status(200).json(person); })
    .catch(error => {
      console.error('This person does not exist', error);
      response.status(404).send('This person does not exist')
    });
});

//add a speicific user
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
          response.status(422).send('Please add a favorite')
        })
    });
});

//update information about a specific user
app.put('/api/v1/drinkers/:id', (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  database('drinkers').where('id', id).update({ name: name})
  .then((result) => {
    database('drinkers').where('id', id).select()
      .then((drinker) => {
        if(drinker.length < 1) {
          response.status(404).send('ID does not match current user')
        } else {
          response.status(200).json(drinker)
        };
      })
      .catch((error) => {
        console.error('Cannot update user', error);
        response.status(422).send('Cannot update user')
      });
  });
});

//remove a speicific user
app.delete('/api/v1/drinkers/:id', (request, response) => {
  const { id } = request.params;
  database('drinkers').where('id', id).del()
    .then(() => {
      database('drinkers').select()
        .then((drinkers) => {
          response.status(200).json(drinkers);
        })
        .catch((error) => {
          console.error('Cannot delete user', error);
          response.status(422).send('Cannot delete user');
        })
    })
})


app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})

module.exports = app
