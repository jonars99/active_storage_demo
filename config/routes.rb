Rails.application.routes.draw do
  root 'homepage#index'
  post 'memories' => 'memories#create'

  get '*path' => 'homepage#index'
end
