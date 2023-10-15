Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :referrals, only: [:index, :create]

      devise_scope :user do
        post "login", to: "sessions#create"
        delete "logout", to: "sessions#destroy"
        post "signup", to: "registrations#create"
      end
    end
  end

  resources :signup, only: [:index]

  devise_for :users

  root "homepage#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
