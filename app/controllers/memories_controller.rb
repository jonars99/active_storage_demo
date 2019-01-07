class MemoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    m = Memory.create(photo: params[:photo])
    render json: m
  end
end
