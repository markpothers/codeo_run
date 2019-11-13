class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.integer :points
      t.integer :health
      t.string :special
      t.belongs_to :landscape

      t.timestamps
    end
  end
end
