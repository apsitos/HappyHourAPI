
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('restaurants', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.string('address');
            table.string('phone');

            table.timestamps();
        }),

        knex.schema.createTable('happyhours', function(table){
            table.increments('id').primary();
            table.integer('restaurant_id')
                 .references('id')
                 .inTable('restaurants');
            table.integer('drinker_id')
                 .references('id')
                 .inTable('drinkers');
            table.string('hours');
            table.string('drinks');
            table.string('food');

            table.timestamps();
        }),

        knex.schema.createTable('drinkers', function(table){
            table.increments('id').primary();
            table.integer('fav_hh')
                 .references('id')
                 .inTable('restaurants');
            table.string('message');

            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('happyhours'),
      knex.schema.dropTable('drinkers'),
      knex.schema.dropTable('restaurants')
    ])
};
