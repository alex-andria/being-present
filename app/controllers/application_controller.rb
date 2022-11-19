class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found 
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  # original
  before_action :authenticate_user

  # test
  #  before_action :authorize

  private

  # original
  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
    #binding.break
  end

  #original
  def authenticate_user
    return if !current_user
      render json: {errors: "You must be logged in to do that"}, status: :unauthorized
  end

  # test
  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])
  #   render json: { errors: ["Application not authorized"] }, status: :unauthorized unless @current_user
  # end

  def render_not_found(e)
    render json: {error: "#{e.model} not found"}, status: :render_not_found
  end

  def render_invalid(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

  end
