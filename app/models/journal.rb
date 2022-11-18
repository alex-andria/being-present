class Journal < ApplicationRecord
    has_many :user_journals, dependent: :destroy
    has_many :users, through: :user_journals
end
