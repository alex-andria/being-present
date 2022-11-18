class JournalSerializer < ActiveModel::Serializer
  attributes :id, :mind, :body, :journal_image, :journal_entry, :journal_date
  has_many :users, through: :user_journals
end
