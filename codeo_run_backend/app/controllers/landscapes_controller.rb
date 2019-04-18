class LandscapesController < ApplicationController

    def index
        render json: [PlayableCharacter.all, Platform.all]
    end

    def create
        PlayableCharacter.destroy_all
        Platform.destroy_all
        landscape = Landscape.all[0]
        character = game_params["dataToSave"]["character"]
        newCharacter = PlayableCharacter.create(name: character["name"], points:character["points"], health:character["health"], x:character["x"], y:character["y"])
        objects = game_params["dataToSave"]["objectsList"]
        objects.each do |object|
            Platform.create(name: object["name"], x: object["x"], y: object["y"], landscape: landscape)
        end
        render json: { "data": "saved!" }
    end

    private

    def game_params
        params.permit({
            dataToSave: {
                character: [:name, :x, :y, :points, :health],
                objectsList:[
                    [ :name, :x, :y, :height, :width]
                ]
            }
        })
    end

end
