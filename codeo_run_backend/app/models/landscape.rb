class Landscape < ApplicationRecord

    has_many :items
    has_many :non_playable_characters
    has_many :platforms
end
