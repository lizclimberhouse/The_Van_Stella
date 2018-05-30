class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :body
      t.string :author
      t.string :image_one
      t.string :image_two
      t.string :image_three

      t.timestamps
    end
  end
end
