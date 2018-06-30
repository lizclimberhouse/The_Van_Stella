class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :destroy]
  before_action :set_story, only: [:index] #:destroy??
  
  def index
    story_id = @story.id
    render json: Comment.all.order(created_at: :desc)
  end

  def show
    render json: @comment
  end

  def create
    comment = Comment.create(comment_params)
    # binding.pry
    if comment.save
      # binding.pry
      render json: comment
    else
      # binding.pry
      render json: { errors: comment.errors.full_messages.join(',')}, status: 422
    end 
  end

  def destroy
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :body, :rating, :story_id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_story
    @story = Story.find(params[:story_id])
  end
end
