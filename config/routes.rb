Rails.application.routes.draw do
  devise_for :users
  root to: "messeges#index"
  resources :users, only: [:edit, :update]
end
