

exports.seed = function(knex, Promise) {
  return knex("table_name").del()
    .then(function () {
      return Promise.all([
        knex("table_name").insert({
          restaurant_id: "1"
          drinker_id: ""
          hours: "Daily 3pm-6pm & 9pm-Close"
          drinks: "$3 Draft Beer, $3 Bottle Beer, $3 House Wine, $3 Frozen Margaritas – strawberry, mango, lime"
          food: "$6 Agave Nachos, $5 Quesadilla, $5 Pepe's Street Tacos, $5 Flautas de Pollo, $5 Half Torta"
        }),
        knex("table_name").insert({
          restaurant_id: "2"
          drinker_id: ""
          hours: "Mon-Fri 5-6pm & Fri-Sat 10:30-11:30pm"
          drinks: "1/2 Price Wines, 1/2 Price Specialty Drinks"
          food: "1/2 Price Select Tapas"
        }),
        knex("table_name").insert({
          restaurant_id: "3"
          drinker_id: ""
          hours: "Daily 3pm-6pm & 9pm-Close (Sun-Thurs) 10pm-Close (Fri-Sat)"
          drinks: "$4 Craft Pints, $3 Domestic Drafts, $4 Wines on Tap, $5 Specialty Cocktails, $16 House Wine Bottles from Tap"
          food: "$1 Oysters on The Half Shell, $2 Grilled Oysters, $2 Meatball, Sausage or Caprese Sliders, $4 House, Caesar or Spinach Salads, $5 Toasted Ravioli (4 with side of marinara), $6 One Topping 8” Pizzas"
        }),
        knex("table_name").insert({
          restaurant_id: "4"
          drinker_id: ""
          hours: "Daily 4pm-6pm"
          drinks: "2-for-1 All Alcoholic Drinks"
          food: "1/2 Off All Food"
        }),
        knex("table_name").insert({
          restaurant_id: "5"
          drinker_id: ""
          hours: "Daily 2pm-4pm & 10pm-Midnight"
          drinks: "All Day Every Day: $6 PBR/Coors Light Pitchers, $3 Wells, additional daily specials"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "6"
          drinker_id: ""
          hours: "Monday-Saturday 5pm-10pm"
          drinks: "$3 Wine, $3 Well, $3 Breckenridge Brewery Beers, $15 Martini's and Manicures – includes a manicure and choice of speciality cocktail, additional daily specials"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "7"
          drinker_id: ""
          hours: "Monday-Friday 4pm-6pm & Saturday-Sunday 9am-2pm"
          drinks: "$5.5 House Frozen Margarita, $4.5 House Rocks Margarita, $2.25 Bud, Coors Light 16 oz, $3 Dos Equis & Tecate 16oz, $3.25 Blue Moon, Negra Modelo 16 oz, $6 Any Wine"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "8"
          drinker_id: ""
          hours: "Monday-Friday 5pm-6:30pm"
          drinks: "$5 Drinks – Green Tea Classic Press, Tsunami, Bones G&T, Lychee Sidecar, Kirin (22oz. Bomber), Tariquet (White), Alandra (Red), Sho Chiku Bai (Junmai Sake-Chilled)"
          food: "$3 Steamed Buns: Braised Pig or Pork Belly (min order of 2), $4 Crispy Brussels Sprouts, $4 Edamame, $4 Seaweed Salad, $5 Calamari Tempura"
        }),
        knex("table_name").insert({
          restaurant_id: "9"
          drinker_id: ""
          hours: "Daily 4pm-7pm"
          drinks: "$1 Off Drinks (except well, mojito & premium wine)"
          food: "$1 Off Starters, $1 Off Sides, Nightly Specials"
        }),
        knex("table_name").insert({
          restaurant_id: "10"
          drinker_id: ""
          hours: "Monday-Friday 4pm-6pm"
          drinks: "$4 Drinks – Angeline Pinot Noir, Tin Roof Chardonnay, Smirnoff Vodka, Fireside Colorado Bourbon Whiskey, Broker's London Dry Gin, Exotico Blanco 100% Agave Tequila, Flor de Caña Rum, Trumer Pils Austrian-Style Pilsner"
          food: "Bacon Wrapped Date humboldt fog goat cheese, concord grape reduction, Greek Feta Cheese Mousse marinated castelvetrano olives, grilled bread, Chicken Liver Mousse black summer truffle, sweet pickles, grilled bread, Peppers & Olives piparras peppers, marinated castelvetrano olives, Sourdough Onion Rings horseradish aioli, Grilled Beer Bratwurst napa cabbage slaw, whole-grain mustard"
        }),
        knex("table_name").insert({
          restaurant_id: "11"
          drinker_id: ""
          hours: "Daily 4pm-6:30pm & 10:30pm-12:30am"
          drinks: "2-for-1 Calls, Wells, House Wine and Domestic Beer"
          food: "$1 Beef Tacos, $1 Sliders, $4 Traditional Nacho Plate, $4 Cheese Quesadillas"
        }),
        knex("table_name").insert({
          restaurant_id: "12"
          drinker_id: ""
          hours: "Daily 2pm-6pm/Daily 11pm-Close"
          drinks: "$2 Off Everything behind the bar, $2 Genessee Cream Ale/$2 Genny Cream, $2 Off All Well Spirits $4 House Wines"
          food: "$5 Kimchi & ‘Sausage” Torta, $5 Seitan Wings, $5 Soft Pretzel, $5 Poutine/$3 Fries, $3 Mixed Greens, $3 Onion Rings, $3 Sautéed Greens, $4 Soups"
        }),
        knex("table_name").insert({
          restaurant_id: "13"
          drinker_id: ""
          hours: "Monday-Thursday 5pm-6:15pm"
          drinks: "$5 Mojitos, $4.5 Sangrias, $2 Tecate Cans"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "14"
          drinker_id: ""
          hours: "Daily 4:00pm-6:30pm"
          drinks: "Martinis, Sparkling Wine Cocktails, Smooth and Cool Cocktails, Beer"
          food: "HH Food Menu"
        }),
        knex("table_name").insert({
          restaurant_id: "15"
          drinker_id: ""
          hours: "Monday-Friday 3pm-7pm & Sunday-Thursday 11pm-Close"
          drinks: "$3 Wells, $2 Coors Light & Shiner Bock Drafts, $3 Drafts, $4 Guinness, $4 Wines"
          food: "Monday: $5 Cheeseburger, Wednesday: $10 All-you-can-eat wings all day"
        }),
        knex("table_name").insert({
          restaurant_id: "16"
          drinker_id: ""
          hours: "Monday-Friday 4pm-6pm"
          drinks: "$2 Select Pints, $4 Wine, $4 Well"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "17"
          drinker_id: ""
          hours: "Monday-Friday 3pm-7pm & 9pm-1am; Saturday-Sunday 4pm-7pm & 9pm-1am"
          drinks: "2 for 1's on premium wells, drafts, Long Islands, house wines and margaritas"
          food: "$6 Gov's Sliders + Hand-cut Fries, $5 Woton Juans, $4 Hand-cut Onion Rings, $4 Housemade Kettle Chips, $4 Fried Dill Pickle Chips, $5 Cheese Quesadilla, $4 Chili Cheese Fries, $4 Pizza Breadsticks"
        }),
        knex("table_name").insert({
          restaurant_id: "18"
          drinker_id: ""
          hours: "Daily 4pm-7pm & 10pm-Close"
          drinks: "$5 Glasses of wine on anything under $10, 1/2 Price on any glass over $10, $4 Peroni Draft, $3.5 Well Spirits – Svedka, Jim Beam, Seagram's, Cruzan, Corazon, Famous Grouse"
          food: "$4 Bacon Wrapped Dates, $5 Housemade Pork & Lamb Meatballs, $5 Soup & Flatbread, $5 Grana Padano Stuffed Peppadews, $6 Gorgonzola Arancinis, Sweet Tomato Jam, $4 Housemade Kettle Chips, $4 Marcona Almond and Olive Medley, $2 Just Marcona Almonds"
        }),
        knex("table_name").insert({
          restaurant_id: "19"
          drinker_id: ""
          hours: "Tuesday-Saturday 4pm-7pm"
          drinks: "$3 Craft Beers, $5 Ketel One, Bulleit bourbon & Milagro silver, $5 Wines by the Glass, $20 bottle, $5 Sangria, $20 Pitchers, $7 Martinis"
          food: "$3-$6 Tapas"
        }),
        knex("table_name").insert({
          restaurant_id: "20"
          drinker_id: ""
          hours: "Monday-Friday 4pm-7pm"
          drinks: "$1 Off Pints"
          food: "$1 Off Small Plates"
        }),
        knex("table_name").insert({
          restaurant_id: "21"
          drinker_id: ""
          hours: "Tuesday-Friday 5pm-6:30pm"
          drinks: "$6 Burrata, $6 Calamari, $5 Meatballs, $7 Chef's Salumi Plate, $6 Pappardelle Bolognese, $6 Wild Mushroom Fusilli, $6 Pasta Carbonara, $7 Grilled Italian Sausage"
          food: "$3 Moretti, $5 Select Glasses of Wine, $5 Select Cocktails"
        }),
        knex("table_name").insert({
          restaurant_id: "22"
          drinker_id: ""
          hours: "Daily 3pm-7pm"
          drinks: "Discounted drinks specials"
          food: "$3 Crab Cake, $3 Ahi Tuna, $2 Jalapeno, $2 Barbecue Pulled Pork Slider, $3 Bean Tostada"
        }),
        knex("table_name").insert({
          restaurant_id: "23"
          drinker_id: ""
          hours: "Monday-Friday Open-6pm & 9:30pm-Close"
          drinks: "$5 Wines by the Glass, 50% Off Select Wines by the Glass, $3 Select Draft Beer"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "24"
          drinker_id: ""
          hours: "Daily 4pm-7pm"
          drinks: "$3 Drafts, Wells & All Wines"
          food: "$4 Appetizers, $5 Pizzas, Daily Specials"
        }),
        knex("table_name").insert({
          restaurant_id: "25"
          drinker_id: ""
          hours: "Daily 4pm-6pm"
          drinks: "$1 Off Drafts and Wells"
          food: "1/2 Off Appetizers"
        }),
        knex("table_name").insert({
          restaurant_id: "26"
          drinker_id: ""
          hours: "Monday-Friday 3pm-6pm & 9pm-11pm"
          drinks: "$3 Coors and PBRs, $4 House Wines, $4 Wells, $2.5 Strongbow Cider, $4 Fireball, $4 Jäger, $5 Jameson, ,$7 PBR and Jameo shot “The PB&J”, $6 Strongballs “strongbow + fireball shot”"
          food: "$6 Wings (garlic, hot, BBQ, chili, jerk), $5 Cheese bread, $5 Stromboli"
        }),
        knex("table_name").insert({
          restaurant_id: "27"
          drinker_id: ""
          hours: "Daily 4:30pm-6:30pm & 9pm-12am, & Monday-Friday 9am-11am"
          drinks: "2 for 1's on all Wine, Well, Draft and Bottle Beers"
          food: "none"
        }),
        knex("table_name").insert({
          restaurant_id: "28"
          drinker_id: ""
          hours: "Daily 11am-7pm"
          drinks: "$2 Domestic Drafts, $7 Domestic Pitchers, $2.5 Wells"
          food: "Monday-Friday: $3 Burgers, daily specials"
        }),
        knex("table_name").insert({
          restaurant_id: "29"
          drinker_id: ""
          hours: "Tuesday-Sunday 3pm-6pm"
          drinks: "none"
          food: "$3.95 Tapas, $5 Pizzas & Flatbreads, $7 Small Plates"
        }),
        knex("table_name").insert({
          restaurant_id: "30"
          drinker_id: ""
          hours: "Daily 4pm-7pm"
          drinks: "2-for-1 Drafts, Wells, Mike's Hard Lemonade, $4 Wines"
          food: "$4 Chorizo Tacos, $4 Chips and Salsa Trio, $4 Jalapeño Bacon Mac & Cheese Puppies, $4 Fried Pickles, $4 Crab Dip, $4 Chili-Cheese Fries or Tots, $4 Frito Pie"
          food: "$4 Chorizo Tacos, $4 Chips and Salsa Trio, $4 Jalapeño Bacon Mac & Cheese Puppies, $4 Fried Pickles, $4 Crab Dip, $4 Chili-Cheese Fries or Tots, $4 Frito Pie"
        }),
      ]);
    });
};
