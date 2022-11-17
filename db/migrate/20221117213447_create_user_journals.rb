class CreateUserJournals < ActiveRecord::Migration[7.0]
  def change
    create_table :user_journals do |t|
      t.references :user, null: false, foreign_key: true
      t.references :journal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
