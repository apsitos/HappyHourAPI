
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        knex('restaurants').insert({
          name: '100% de Agave'
          address: '975 Lincoln St, Denver, CO 80203'
          phone: '303-731-1100'
        }),
        knex('restaurants').insert({
          name: 'The 9th Door'
          address: '925 Lincoln St, Denver, CO ‎80203'
          phone: '303-832-7027'
        }),
        knex('restaurants').insert({
          name: 'Angelo’s Taverna'
          address: '620 E. 6th Ave. Denver, CO'
          phone: '303-744-3366'
        }),
        knex('restaurants').insert({
          name: 'Armida’s Mexican Restaurant & Lounge'
          address: '840 Lincoln St, Denver, CO 80203'
          phone: '303-837-8921'
        }),
        knex('restaurants').insert({
          name: 'Barricuda’s'
          address: '1076 Ogden St, Denver, CO'
          phone: '303-860-8353'
        }),
        knex('restaurants').insert({
          name: 'Beauty Bar'
          address: '608 East 13th Ave, Denver, CO ‎80203'
          phone: '720-542-8024'
        }),
        knex('restaurants').insert({
          name: 'Benny’s Restaurant & Tequila Bar'
          address: '301 E. 7th Ave, Denver, CO ‎'
          phone: '303-894-0788'
        }),
        knex('restaurants').insert({
          name: 'Bones'
          address: '701 Grant St, Denver, CO 80203'
          phone: '303-860-2929'
        }),
        knex('restaurants').insert({
          name: 'Cap City Tavern'
          address: '1247 Bannock Street, Denver, CO 80204'
          phone: '720-931-8888'
        }),
        knex('restaurants').insert({
          name: 'Charcoal Restaurant'
          address: '43 West 9th Ave, Denver, CO 80204'
          phone: '303-454-0000'
        }),
        knex('restaurants').insert({
          name: 'Charlie Brown’s Bar & Grill'
          address: '980 Grant St, Denver, CO ‎'
          phone: '303-860-1655'
        }),
        knex('restaurants').insert({
          name: 'City O’ City'
          address: '206 East 13th Avenue, Denver, CO 80203'
          phone: '303-831-6443'
        }),
        knex('restaurants').insert({
          name: 'Cuba Cuba Cafe & Bar'
          address: '1173 Delaware St, Denver, CO 80204'
          phone: '303-605-2822'
        }),
        knex('restaurants').insert({
          name: 'Dazzle Jazz'
          address: '930 Lincoln Street, Denver, CO 80203'
          phone: '303-839-5100'
        }),
        knex('restaurants').insert({
          name: 'The Fainting Goat Pub'
          address: '846 Broadway, Denver, CO 80203'
          phone: '303-945-2323'
        }),
        knex('restaurants').insert({
          name: 'Gather'
          address: '1062 Delaware St, Denver, CO 80204'
          phone: '303-823-4172'
        }),
        knex('restaurants').insert({
          name: 'Govnr’s Park Tavern'
          address: '672 Logan St, Denver, CO ‎'
          phone: '303-831-8605'
        }),
        knex('restaurants').insert({
          name: 'Lala’s Wine Bar + Pizzeria'
          address: '410 East 7th Avenue, Denver, CO'
          phone: '303-861-9463'
        }),
        knex('restaurants').insert({
          name: 'The Living Room'
          address: '1055 Broadway, Denver, CO 80203'
          phone: '303-339-6636'
        }),
        knex('restaurants').insert({
          name: 'LowDown Brewery + Kitchen'
          address: '800 Lincoln St, Denver, CO 80203'
          phone: '720-524-8065'
        }),
        knex('restaurants').insert({
          name: 'Luca D’Italia'
          address: '711 Grant St, Denver, CO 80203'
          phone: '303-832-6600'
        }),
        knex('restaurants').insert({
          name: 'Marion Street Tavern'
          address: '1223 East 13th Ave, Denver, CO 80218'
          phone: '720-638-2461'
        }),
        knex('restaurants').insert({
          name: 'Max’s Wine Dive'
          address: '696 Sherman St, Denver, CO 80203'
          phone: '303-593-2554'
        }),
        knex('restaurants').insert({
          name: 'My Other Bar'
          address: '1120 East 6th Ave, Denver, CO 80218'
          phone: '720-389-8773'
        }),
        knex('restaurants').insert({
          name: 'Nicolo’s Pizza'
          address: '1209 East 13th Avenue, Denver, CO 80218'
          phone: '303-831-7000'
        }),
        knex('restaurants').insert({
          name: 'Oblio’s Cap Hill Tavern'
          address: '1225 Logan St, Denver, CO 80203'
          phone: '303-861-3777'
        }),
        knex('restaurants').insert({
          name: 'The Park Tavern'
          address: '931 East 11th Ave, Denver, CO'
          phone: '303-832-7667'
        }),
        knex('restaurants').insert({
          name: 'Pub On Penn'
          address: '1278 Pennsylvania Street, Denver, CO'
          phone: '303-861-8638'
        }),
        knex('restaurants').insert({
          name: 'Shells & Sauce'
          address: '2600 East 12th Ave, Denver, CO 80206'
          phone: '303-377-2091'
        }),
        knex('restaurants').insert({
          name: 'Stoney’s Bar & Grill'
          address: '1111 Lincoln St, Denver, CO 80203'
          phone: '303-830-6839'
        })
      ]);
    });
};
