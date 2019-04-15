Rails.application.routes.draw do
  resources :landscapes
  resources :bonus_items
  resources :obstacles
  resources :non_playable_characters
  resources :playable_characters
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
