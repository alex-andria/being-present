class CreateJournals < ActiveRecord::Migration[7.0]
  def change
    create_table :journals do |t|
      t.boolean :mind
      t.boolean :body
      t.string :journal_image
      t.text :journal_entry
      t.datetime :journal_date

      t.timestamps
    end
  end
end
