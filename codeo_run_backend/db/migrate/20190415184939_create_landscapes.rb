class CreateLandscapes < ActiveRecord::Migration[5.2]
  def change
    create_table :landscapes do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.integer :character_x
      t.integer :character_y
      t.belongs_to :character

      t.timestamps
    end
  end
end
