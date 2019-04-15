class CreateObstacles < ActiveRecord::Migration[5.2]
  def change
    create_table :obstacles do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.belongs_to :landscape

      t.timestamps
    end
  end
end
