class CreateBonusItems < ActiveRecord::Migration[5.2]
  def change
    create_table :bonus_items do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.integer :points
      t.integer :health
      t.string :special

      t.timestamps
    end
  end
end
