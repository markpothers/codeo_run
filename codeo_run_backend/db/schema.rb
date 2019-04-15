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

ActiveRecord::Schema.define(version: 2019_04_15_184939) do

  create_table "bonus_items", force: :cascade do |t|
    t.string "name"
    t.integer "x"
    t.integer "y"
    t.integer "points"
    t.integer "health"
    t.string "special"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "landscapes", force: :cascade do |t|
    t.string "name"
    t.integer "x"
    t.integer "y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "non_playable_characters", force: :cascade do |t|
    t.string "name"
    t.integer "x"
    t.integer "y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "obstacles", force: :cascade do |t|
    t.string "name"
    t.integer "x"
    t.integer "y"
    t.integer "landscape_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["landscape_id"], name: "index_obstacles_on_landscape_id"
  end

  create_table "playable_characters", force: :cascade do |t|
    t.string "name"
    t.integer "x"
    t.integer "y"
    t.integer "health"
    t.integer "points"
    t.integer "life_time_points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
