
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        knex('table_name').insert({
          fav_hh: ''
          name: 'Zelma Cryer'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Enrique Pecora'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Sylvie Hanning'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Lorri Dowdy'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Salvatore Hudgins'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Pasquale Stickel'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Felicia Omeara'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Leo Fagan'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Beverly Lightley'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Thanh Grullon'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Sally McEvoy'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Joelle Becerra'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Monica Allshouse'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Marcella Mathers'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Bree Harrop'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Jennifer Howie'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Octavia Guglielmo'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Eveline Ryba'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Charlene Cerna'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Adelaie Sumrell'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Betsey Macri'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Reginald Ivester'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Vivienne McPherson'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Shannon Lorch'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Hildegard Furby'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Harriette Fiorentino'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Amiee Stockman'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Sunday Stillwell'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Tegan Dunston'
        }),
        knex('table_name').insert({
          fav_hh: ''
          name: 'Dana Boren'
        }),
      ]);
    });
};
