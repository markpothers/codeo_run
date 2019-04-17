class CreatePlayableCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :playable_characters do |t|
      t.string :name
      t.integer :x
      t.
      t.integer :health
      t.integer :points
      t.integer :special

      t.timestamps
    end
  end
end
