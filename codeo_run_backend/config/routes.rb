Rails.application.routes.draw do
  resources :landscapes
  resources :items
  resources :platforms
  resources :non_playable_characters
  resources :playable_characters

end
