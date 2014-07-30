class HAT::ApplicationController < HAT::Application
  include Hobbit::Render
  include Hobbit::Session

  def layouts_path
    'app/views/layouts/'
  end

  def template_engine
    'haml'
  end

  def views_path
    'app/views'
  end

  get '/' do
    render 'index'
  end
  
end
