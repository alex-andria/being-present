class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :profile_image, :bio, :password
  has_many :journals, through: :user_journals
end
