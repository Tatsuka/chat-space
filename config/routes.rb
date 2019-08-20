Rails.application.routes.draw do
  devise_for :users
  root to: "messeges#index"
  resources :users, only: [:edit, :update]
  resources :groupes, only: [:new, :create, :edit, :update]do
    resources :messages, only: [:index, :create]
end
