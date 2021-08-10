class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @olduser = User.find_by(username: @user.username)
    if @olduser
      render json: ["Username already exists"], status: 401
    elsif @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
