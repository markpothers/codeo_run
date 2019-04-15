Rails.application.routes.draw do
  resources :landscapes
  resources :bonus_items
  resources :obstacles
  resources :non_playable_characters
  resources :playable_characters

end
