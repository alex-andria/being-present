class UserJournal < ApplicationRecord
  belongs_to :user
  belongs_to :journal
end
