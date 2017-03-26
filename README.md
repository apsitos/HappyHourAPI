# HappyHourAPI
A database and API for my happy hour app

##Overview

This is a template for a simple server database. It is built in NodeJS/ExpressJS, using Knex to connect to a Postgres database. All endpoints were testing using Mocha/Chai. The idea behind this db is to build on my Mod 3 personal project (a happy hour finder) with the hope of implementing it for my Mod 4 project. There are three tables: one for restaurants, one for the happy hours for each associated restaurant, and one for users.

##Endpoints

The following endpoints are available for your use!

####Restaurants

`GET`/api/v1/restaurants
* returns a complete array of restaurants, including its name, address, and phone number

`GET`/api/v1/restaurants/:id
* returns a single restaurant and its name, address, and phone number

`POST`/api/v1/restaurants
* allows a new restaurant to be added to the database; must include name, address, and phone number

`PUT`/api/v1/restaurants/:id
* allows a single restaurant's information to be updated

`DELETE`/api/v1/restaurants/:id
* removes a single restaurant, you know, when it goes out of business

####Happy Hours

`GET`/api/v1/happyhours
* returns a complete array of happy hours, including the hours and its food and drink specials, with a unique identifier to associate it with its restaurant

`GET`/api/v1/happyhours/:id
* returns a single happy hour and its information

`POST`/api/v1/happyhours
* allows a new happy hour to be added

`PUT`/api/v1/happyhours/:id
* allows a single happy hour to be updated

`DELETE`/api/v1/happyhours/:id
* removes a single happy hour

####Users

`GET`/api/v1/drinkers
* returns a complete array of all current users, including their name and favorite happy hour

`GET`/api/v1/drinkers/:id
* returns a single user and their information

`POST`/api/v1/drinkers
* allows a new user to be added to the database

`PUT`/api/v1/drinkers/:id
* allows a user's profile to be updated

`DELETE`
* removes a single user

###Testing

There are 28 tests to be run in the current testing suite. Four of them have been skipped: the `DELETE` tests for restaurants and users due to their use of foreign keys, and the `PUT` error tests for a single happy hour and a single user due to a syntax error that pops up only on the error test.
![Screenshot of test suite](https://github.com/apsitos/HappyHourAPI/blob/master/Screen%20Shot%202017-03-25%20at%209.58.53%20PM.png)
