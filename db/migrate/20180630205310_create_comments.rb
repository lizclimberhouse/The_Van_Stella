class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :author
      t.string :body
      t.string :rating
      t.belongs_to :story, foreign_key: true

      t.timestamps
    end
  end
end
