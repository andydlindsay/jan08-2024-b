Rails.application.routes.draw do
  resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'users#login'

  # resources :planets

  # resources :characters

  resources :planets do
    resources :characters
  end
end
