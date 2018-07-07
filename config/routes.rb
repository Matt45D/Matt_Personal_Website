Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 # You can have the root of your site routed with 'root'
root 'posts#index'

 # Example of regular route:
get 'projects' => 'pages#projects'
get 'contact_me' => 'pages#contact_me'

 # Example of named route that can be invoked with purchase_url
 # get 'products/:id/purchase' => 'catalog#purchase', as : purcahse


end

