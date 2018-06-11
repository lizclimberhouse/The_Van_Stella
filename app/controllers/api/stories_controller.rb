class Api::StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  def show
    render json: @story
  end

  def index
    render json: Story.all.order(created_at: :desc)
  end

  def create
    story = Story.create(story_params)
    if story.save
      render json: story
    else
      render json: { errors: story.errors.full_messages.join(',')}, status: 422
    end
  end

  def update
    if @story.update(story_params)
      render json: @story
    else
      render json: { errors: story.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    # binding.pry
    @story.destroy
  end

  private
  
  def story_params
    params.require(:story).permit(:title, :body_one, :body_two, :body_three, :author, :image_one, :image_two, :image_three)
  end

  def set_story
    @story = Story.find(params[:id])
  end
end
