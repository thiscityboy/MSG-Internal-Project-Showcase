# encoding: utf-8
class MyApp < Sinatra::Application
  get "/" do
    erb :main
  end

  post '/form/process' do
    @clean_mdn = params[:mdn]
    if params[:mdn]
      @body = "Thank you for sampling our new Sauza Sparkling Margarita and for Making It With A Lifeguard!  Click here to view the video: #{@url}"
      MsgToolbox.alt_send_sms(params[:mdn], @body, 63485)
      flash[:message] = 'A link has been sent to your mobile number.'
    else
      flash[:error] = 'Please enter your mobile number.'
    end
    redirect '/'

  end


  get "/monitor" do
    erb :monitor, :layout => false
  end

  get "/incompatible" do
    erb :incompatible, :layout => false
  end
end
