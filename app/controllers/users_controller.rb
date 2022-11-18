class UsersController < ApplicationController
skip_before_action :authenticate_user, only: [:create]

    def index
        render json: User.all
    end

    def show
        # user = User.find_by(id: session[:user_id])
        # user = User.find_by[:user_id]
        # if user
        #     render json: user
        #   else
        #     render json: { error: "Not authorized" }, status: :unauthorized
        #   end
        if current_user
            render json: current_user, status: :ok
        else
            render json: {errors: 'No active session'}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)
    end

    # def update_params
    #     params.permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)
    # end

end
