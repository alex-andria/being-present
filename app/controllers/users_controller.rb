class UsersController < ApplicationController
    # original
    skip_before_action :authenticate_user, only: [:create]

    # wrap debugg
    # wrap_parameters :user, include: [:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation]

    # test
    # skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        binding.break
        render json: user, status: :created
    end

    # original
    def show
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user, status: :ok
        else
            render json: {errors: 'No active session'}, status: :unauthorized
        end
    end

    # test
    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #       render json: user
    #     else
    #       render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    # end

    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)

        # wrap debug
        # params.require(:user).permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)
    end

end
