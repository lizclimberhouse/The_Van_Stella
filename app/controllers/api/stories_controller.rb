class Api::StoriesController < ApplicationController
  # before_action :set_story, only: [:show, :update, :destroy]

  def index
    render json: Story.all
  end

  def create
    story = Story.create(story_params)
    if story.save
      render json: story
    else
      render json: { errors: story.errors.full_messages.join(',')}, status: 422
    end
  end

  private
  
  def story_params
    params.require(:story).permit(:title, :body, :author, :image_one, :image_two, :image_three)
  end

  # def set_story
  #   @story = Story.find(params[:id])
  # end
end
