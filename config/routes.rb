Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/planets", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :planets, only: [:index]
    end
  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
