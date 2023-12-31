# frozen_string_literal: true

module Api
  module V1
    class SessionsController < Devise::SessionsController
      respond_to :json

      def create
        user = User.find_for_database_authentication(email: user_params[:email])
        if invalid_password?(user)
          render json: { error: 'Invalid password' }, status: :unprocessable_entity
        else
          sign_in(user)
          render json: { msg: 'successful login', user: user}, status: :ok
        end
      end

      def destroy
        sign_out(current_user)
        render json: { msg: 'successful logout' }, status: :ok
      end

      private

      def user_params
        params.require(:user).permit(:email, :password)
      end

      def invalid_password?(user)
        user.blank? || !user.valid_password?(user_params[:password])
      end
    end
  end
end
