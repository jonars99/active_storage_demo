Rails.application.routes.draw do
  post 'memories' => 'memories#create'
end
