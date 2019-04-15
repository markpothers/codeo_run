class CreatePlayableCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :playable_characters do |t|
      t.string :name
      t.integer :health
      t.integer :points
      t.integer :life_time_points

      t.timestamps
    end
  end
end
