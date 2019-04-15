class SessionsController < ApplicationController
    #skip_before_action :authenticate, only: [:new, :create, :destroy, :landing]
    # def index 
    #     render :index
        
    # end

    # def new
    #     render :index
    # end

    # def create
    #     @user = User.find_by(username: params[:username])
    #     if @user.authenticate(params[:password])
    #         session[:current_user_id] = @user.id
    #         flash[:notice] = "You have logged in successfully!"
    #         redirect_to @user
    #     else
    #       flash[:alert] = "Invalid username or password. Try again"
    #       render :new
    #     end
    # end

    # def destroy
    #     reset_session
    #     redirect_to '/sessions/new'
    # end

    # def landing
    #   render :index
    # end
end
