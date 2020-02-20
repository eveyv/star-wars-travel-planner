Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/trips", to: 'homes#index'
  get "trips/new", to: 'homes#index'
  get "/planets", to: 'homes#index'
  get "trips/new", to: 'homes#index'
  get "/trips/:id", to: 'homes#index'
  get "/planets/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :create, :show]
        resources :planets, only: [:index, :show]
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
