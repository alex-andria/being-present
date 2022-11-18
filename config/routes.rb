Rails.application.routes.draw do
  resources :user_journals
  resources :journals
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"
end
