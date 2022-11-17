class User < ApplicationRecord
    has_many :user_journals
    has_many :journals, through: :user_journals
end
