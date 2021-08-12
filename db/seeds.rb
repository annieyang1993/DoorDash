# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Restaurant.delete_all
Item.delete_all

  # create_table "restaurants", force: :cascade do |t|
  #   t.string "name", null: false
  #   t.string "email", null: false
  #   t.string "phone", null: false
  #   t.decimal "latitude", precision: 64, scale: 12, null: false
  #   t.decimal "longitude", precision: 64, scale: 12, null: false
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  #   t.index ["name", "latitude", "longitude"], name: "index_restaurants_on_name_and_latitude_and_longitude", unique: true
  # end

u1 = User.create!(
  username: 'guest',
  password: 'password'
)

# r1 = Restaurant.create!(
#   name: 'Blue Bottle Coffee',
#   email: 'bluebottlecoffee@gmail.com',
#   phone: '000-000-0000',
#   latitude: 40.74844076172652,
#   longitude: -73.98216194436645
# )

r1 = Restaurant.create!(
  name: 'Double Dutch Espresso',
  email: 'dd@gmail.com',
  phone: '000-000-0000',
  latitude: 40.8058557,
  longitude: -73.954049,
  img1: '/DoubleDutch1.png',
  img2: '/DoubleDutch2.png',
  price_level: 2,
  description: "One of the best coffee shops in Harlem, with great drinks and kind staff!"
)

r2 = Restaurant.create!(
  name: 'Remi Flower & Coffee',
  email: 'remi@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7536762,
  longitude: -73.9692025,
  img1: '/Remi1.png',
  img2: '/Remi2.png',
  price_level: 2,
  description: "Coffee and flowers? Yes please."
)

r3 = Restaurant.create!(
  name: 'Bibble & Sip',
  email: 'bibble@gmail.com',
  phone: '000-000-0000',
  latitude: 40.762761,
  longitude: -73.9852786,
  img1: '/Bibble1.png',
  img2: '/Bibble2.png',
  price_level: 2,
  description: "One of the best coffee and dessert places in NYC!"
)

r4 = Restaurant.create!(
  name: 'Blue Bottle Coffee',
  email: 'blue@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7575724,
  longitude: -73.9787968,
  img1: '/Blue1.png',
  img2: '/Blue2.png',
  price_level: 2,
  description: "Famous coffee chain originating from Australia!"
)

r5 = Restaurant.create!(
  name: 'Abraco',
  email: 'abraco@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7271928,
  longitude: -73.9862955,
  img1: '/Abraco1.png',
  img2: '/Abraco2.png',
  price_level: 2,
  description: "Incredible espresso and coffee"
)
r6 = Restaurant.create!(
  name: 'Coffee Project NYC',
  email: 'coffee@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7268443,
  longitude: -73.989093,
  img1: '/Project1.png',
  img2: '/Project2.png',
  price_level: 2,
  description: "One of NYC's most-loved coffee shops since 2015."
)
r7 = Restaurant.create!(
  name: 'Citizens of Gramercy',
  email: 'gramercy@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7367246,
  longitude: -73.9817683,
  img1: '/Citizens1.png',
  img2: '/Citizens2.png',
  price_level: 2,
  description: "Delicious coffee place"
)
r8 = Restaurant.create!(
  name: 'Urban Backyard',
  email: 'urban@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7208305,
  longitude: -73.9967116,
  img1: '/Urban1.png',
  img2: '/Urban2.png',
  price_level: 2,
  description: "Environmentally conscious cafe with classic drinks & ornamental cupcakes in a verdant, rustic space. "
)

#############################
r9 = Restaurant.create!(
  name: 'Academy at Coffee Project NY',
  email: 'academy@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7410723,
  longitude: -73.9492874,
  img1: '/Academy1.png',
  img2: '/Academy2.png',
  price_level: 2,
  description: "A spacious coffee shop, roaster, and training lab"
)

r10 = Restaurant.create!(
  name: 'Partners Coffee',
  email: 'partners@gmail.com',
  phone: '000-000-0000',
  latitude: 40.7487167,
  longitude: -73.9750118,
  img1: '/Partners1.jpeg',
  img2: '/Partners2.jpeg',
  price_level: 2,
  description: "Delicious coffee place"
)

############ Items for Partners ####################################
r1i1 = Item.create!(
  name: 'Bacon, Egg, & Cheese sandwich',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 10.95,
  section: 'Partners Kitchen',
  description: 'Scrambled Eggs, Bacon, Pepperjack Cheese, Jalapeno Mayo, Avocado on a Ciabatta Roll (All our eggs are from the Farmers Hen and have fresh milk from Battenkill Farm) (No substitutions allowed)'
 )

r1i2 = Item.create!(
  name: 'Calabro Fresh Ricotta Avocado Toast',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 12.95,
  section: 'Partners Kitchen',
  description: 'Fresh Ricotta, Mashed Avocado, Roasted Tomatoes, Basil, All Spice Sea Salt on Sourdough (No substitutions allowed)',
  img: 2
)

r1i3 = Item.create!(
  name: 'Chipotle Chicken Salad Bowl',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 12.95,
  section: 'Partners Kitchen',
  description: 'Mixed Greens with Avocado, Tomatoes, Cucumbers, Red Onions, Black Beans, Roasted Corn, Roasted Sweet Potatoes, Tossed in a Cilantro Lime Dressing with Chipotle Chicken (No substitutions allowed)',
  img: 3
)

r1i4 = Item.create!(
  name: 'Fresh Fruit Salad Cup',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 8.50,
  section: 'Partners Kitchen',
  description: 'Strawberries, Blueberries, Grapes, Pineapple with Lime Mint Syrup (Substitutions not allowed)',
  img: 4
)

r1i5 = Item.create!(
  name: 'Prosciutto & Fresh Mozzarella Sandwich',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 12.95,
  section: 'Partners Kitchen',
  description: 'Prosciutto Di Parma, Mozzarella, Sliced Green Apples, Arugula, Balsamic Vinaigrette on a French Baguette (No substitutions allowed)',
  img: 5
)

r1i6 = Item.create!(
  name: 'Roasted Chicken Sandwich',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 12.95,
  section: 'Partners Kitchen',
  description: 'Roasted Chicken, Chili Mayo, Pickled Onions, Arugula, Sliced Avocado on a French Baguette (No Substitutions allowed)',
  img: 6
)

r1i7 = Item.create!(
  name: 'Scrambled Egg, Prosciutto & Blue Cheese Sandwich',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 13.50,
  section: 'Partners Kitchen',
  description: 'Scrambled eggs, blue cheese, crispy rosemary prosciutto with arugula on a ciabatta roll. (All our eggs are from the Farmers Hen and have fresh milk from Battenkill Farm) (No changes allowed - ingredients pre-prepped)',
  img: 7
)

r1i8 = Item.create!(
  name: 'Smoked Turkey Salad Bowl',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 12.95,
  section: 'Partners Kitchen',
  description: 'Mixed Greens with Avocado, Tomatoes, Cucumbers, Red Onions, Rainbow Carrots, Tossed in Balsamic with Smoked Turkey and Mozzarella (No substitutions allowed)',
  img: 8
)

r1i9 = Item.create!(
  name: 'Smoked Turkey Sandwich',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 12.95,
  section: 'Partners Kitchen',
  description: 'Sliced Turkey, Spicy Mayo, Provolone, Bacon, Tomatoes, Cucumbers, Red Onions on a French Baguette (No substitutions allowed)',
  img: 9
)

r1i10 = Item.create!(
  name: 'Sausage, Egg & Cheese',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 11.25,
  section: 'Partners Kitchen',
  description: 'Scrambled eggs, pork sausage, caramelized onions & provolone on a warm ciabatta roll. (All our eggs are from the Farmers Hen and have fresh milk from Battenkill Farm) (No changes allowed - ingredients pre-prepped)',
  img: 10
)

#####################################################################
r1i12 = Item.create!(
  name: 'Matcha Tea',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.25,
  section: 'Beverages',
  description: '12 oz - organic Matcha blended with hot water',
  img: 11
)

r1i12 = Item.create!(
  name: 'Latte',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.95,
  section: 'Beverages',
  description: 'Double shot of espresso with textured milk.',
  img: 12
)

r1i12 = Item.create!(
  name: 'Iced Latte',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 5.95,
  section: 'Beverages',
  description: '16 oz iced latte',
  img: 13
)

r1i12 = Item.create!(
  name: 'Drip Coffee',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 3.95, 
  section: 'Beverages',
  description: 'Freshly brewed drip.',
  img: 14
)

r1i12 = Item.create!(
  name: 'Cappucino',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.75,
  section: 'Beverages',
  description: '6 oz - double shot of espresso with textured milk.',
  img: 15
)

r1i12 = Item.create!(
  name: 'Hot Chocolate',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 5.75,
  section: 'Beverages',
  description: '12 oz - just like your grandma makes it sweet & with love',
  img: 16
)

r1i12 = Item.create!(
  name: 'Cold Brew',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.95,
  section: 'Beverages',
  description: '16oz - slowly steeped cold brew coffee.',
  img: 17
)

r1i12 = Item.create!(
  name: 'Matcha Latte',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 5.75,
  section: 'Beverages',
  description: '12 oz - organic Matcha blended with steamed milk.',
  img: 18
)

r1i12 = Item.create!(
  name: 'Hot Tea',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.50,
  section: 'Beverages',
  description: '16 oz - custom organic blends sourced by our team.',
  img: 19
)

r1i12 = Item.create!(
  name: 'Iced Tea',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.75,
  section: 'Beverages',
  description: '16 oz - custom-blended Partners breakfast tea.',
  img: 20
)

####################################################################
r1i12 = Item.create!(
  name: 'Chocolate Croissant',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 4.50,
  section: 'Pastries',
  description: 'Balthazar',
  img: 21
)

#######################################################

r1i12 = Item.create!(
  name: 'Topo Chico',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 6.50,
  section: 'Cold Drinks',
  description: 'Sparkling mineral water twelve ounces',
  img: 22
)

r1i12 = Item.create!(
  name: 'Martinellis Mini Apple Juice',
  availability: true,
  restaurant_id: Restaurant.find_by(name: 'Partners Coffee').id,
  price: 3.25,
  section: 'Cold Drinks',
  img: 23
)