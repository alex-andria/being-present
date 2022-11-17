class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :profile_imager, :bio, :password
end
