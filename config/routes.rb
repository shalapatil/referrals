Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'referrals/index'
      get 'referrals/create'
      get 'referrals/show'
      get 'referrals/destroy'

      devise_scope :user do
        post "login", to: "sessions#create", as: "login"
        delete "logout", to: "sessions#destroy", as: "logout"
        post "signup", to: "registrations#create", as: "signup"
      end
    end
  end
  devise_for :users
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
