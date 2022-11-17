class UserJournalSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :journal
end
