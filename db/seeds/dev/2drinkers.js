
exports.seed = function(knex, Promise) {
  return knex('drinkers').del()
    .then(function () {
      return Promise.all([
        knex('drinkers').insert({
          id: '1',
          fav_hh: '1',
          name: 'Zelma Cryer'
        }),
        knex('drinkers').insert({
          id: '2',
          fav_hh: '2',
          name: 'Enrique Pecora'
        }),
        knex('drinkers').insert({
          id: '3',
          fav_hh: '3',
          name: 'Sylvie Hanning'
        }),
        knex('drinkers').insert({
          id: '4',
          fav_hh: '4',
          name: 'Lorri Dowdy'
        }),
        knex('drinkers').insert({
          id: '5',
          fav_hh: '5',
          name: 'Salvatore Hudgins'
        }),
        knex('drinkers').insert({
          id: '6',
          fav_hh: '6',
          name: 'Pasquale Stickel'
        }),
        knex('drinkers').insert({
          id: '7',
          fav_hh: '7',
          name: 'Felicia Omeara'
        }),
        knex('drinkers').insert({
          id: '8',
          fav_hh: '8',
          name: 'Leo Fagan'
        }),
        knex('drinkers').insert({
          id: '9',
          fav_hh: '9',
          name: 'Beverly Lightley'
        }),
        knex('drinkers').insert({
          id: '10',
          fav_hh: '10',
          name: 'Thanh Grullon'
        }),
        knex('drinkers').insert({
          id: '11',
          fav_hh: '11',
          name: 'Sally McEvoy'
        }),
        knex('drinkers').insert({
          id: '12',
          fav_hh: '12',
          name: 'Joelle Becerra'
        }),
        knex('drinkers').insert({
          id: '13',
          fav_hh: '13',
          name: 'Monica Allshouse'
        }),
        knex('drinkers').insert({
          id: '14',
          fav_hh: '14',
          name: 'Marcella Mathers'
        }),
        knex('drinkers').insert({
          id: '15',
          fav_hh: '15',
          name: 'Bree Harrop'
        }),
        knex('drinkers').insert({
          id: '16',
          fav_hh: '16',
          name: 'Jennifer Howie'
        }),
        knex('drinkers').insert({
          id: '17',
          fav_hh: '17',
          name: 'Octavia Guglielmo'
        }),
        knex('drinkers').insert({
          id: '18',
          fav_hh: '18',
          name: 'Eveline Ryba'
        }),
        knex('drinkers').insert({
          id: '19',
          fav_hh: '19',
          name: 'Charlene Cerna'
        }),
        knex('drinkers').insert({
          id: '20',
          fav_hh: '20',
          name: 'Adelaie Sumrell'
        }),
        knex('drinkers').insert({
          id: '21',
          fav_hh: '21',
          name: 'Betsey Macri'
        }),
        knex('drinkers').insert({
          id: '22',
          fav_hh: '22',
          name: 'Reginald Ivester'
        }),
        knex('drinkers').insert({
          id: '23',
          fav_hh: '23',
          name: 'Vivienne McPherson'
        }),
        knex('drinkers').insert({
          id: '24',
          fav_hh: '24',
          name: 'Shannon Lorch'
        }),
        knex('drinkers').insert({
          id: '25',
          fav_hh: '25',
          name: 'Hildegard Furby'
        }),
        knex('drinkers').insert({
          id: '26',
          fav_hh: '26',
          name: 'Harriette Fiorentino'
        }),
        knex('drinkers').insert({
          id: '27',
          fav_hh: '27',
          name: 'Amiee Stockman'
        }),
        knex('drinkers').insert({
          id: '28',
          fav_hh: '28',
          name: 'Sunday Stillwell'
        }),
        knex('drinkers').insert({
          id: '29',
          fav_hh: '29',
          name: 'Tegan Dunston'
        }),
        knex('drinkers').insert({
          id: '30',
          fav_hh: '30',
          name: 'Dana Boren'
        }),
      ]);
    });
};
