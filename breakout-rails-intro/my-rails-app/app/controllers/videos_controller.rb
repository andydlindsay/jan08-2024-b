class VideosController < ApplicationController
  def index
    @heading = 'hello world'
    @count = 0
    # render('index', {})

    # render json: {
    #   heading: @heading,
    #   count: @count
    # }
  end
end
