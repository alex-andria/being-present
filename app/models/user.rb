class User < ApplicationRecord
    has_many :user_journals, dependent: :destroy
    has_many :journals, through: :user_journals

    # has_secure_password

    validates :email, presence: true, uniqueness: true
end
