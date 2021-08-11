# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_11_044243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "availability", null: false
    t.integer "restaurant_id", null: false
    t.decimal "price", precision: 4, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "section"
    t.string "img"
    t.text "description"
    t.text "additional_info"
    t.index ["name", "restaurant_id"], name: "index_items_on_name_and_restaurant_id", unique: true
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.decimal "latitude", precision: 64, scale: 12, null: false
    t.decimal "longitude", precision: 64, scale: 12, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price_level"
    t.text "description"
    t.string "img1"
    t.string "img2"
    t.index ["name", "latitude", "longitude"], name: "index_restaurants_on_name_and_latitude_and_longitude", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
