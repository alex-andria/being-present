class User < ApplicationRecord
    has_many :user_journals, dependent: :destroy
    has_many :journals, through: :user_journals
end
