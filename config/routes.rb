Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :stories
    #API ROUTES SHOULD GO HERE
    get 'recent_stories', to: 'stories#recent_stories'
  end

  
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
