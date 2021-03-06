Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    get '/products/search', to: 'products#search'
    resources :products, only: [:create, :update, :destroy, :index, :show] do
      resources :comments, only: [:index, :create, :update, :destroy]
    end 
    resource :user, only: [:create]
    resources :shopping_cart_items, only: [:index, :create, :update, :destroy]
    
  end

  root to: "static_pages#root"
end
