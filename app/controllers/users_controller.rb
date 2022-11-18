class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        # user = User.find_by(id: session[:user_id])
        user = User.find_by[:user_id]
        # if user
        #     render json: user
        #   else
        #     render json: { error: "Not authorized" }, status: :unauthorized
        #   end
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end
    
    def update
        user = User.find_by[:user_id]
        user.update(user_params)
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)
    end

    # def update_params
    #     params.permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)
    # end

end
