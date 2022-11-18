class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found 
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    before_action :authenticate_user

    # def hello_world
    #   session[:count] = (session[:count] || 0) + 1
    #   render json: { count: session[:count] }
    # end

  private

  def current_user
    @current_user ||= User.find_by(session[:user_id])
  end

  def authenticate_user
    return if current_user
    render json: {errors: "You must be logged in to do that"}, status: :unauthorized
  end

  def render_not_found(e)
    render json: {error: "#{e.model} not found"}, status: :render_not_found
  end

  def render_invalid(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

  end
