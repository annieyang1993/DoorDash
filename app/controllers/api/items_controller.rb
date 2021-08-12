class Api::ItemsController < ApplicationController
  def index
    @items = Restaurant.find(params[:restaurant_id]).items
    render :index
  end

  # def show
  #   @restaurant = Restaurant.find(params[:id])
  #   render :show
  # end
end

