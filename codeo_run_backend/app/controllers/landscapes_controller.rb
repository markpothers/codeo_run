class LandscapesController < ApplicationController

    def index
        render json: { "Mark": "cool" }
    end

    def create
        render json: { "Mark": "stil cool" }
    end

end
