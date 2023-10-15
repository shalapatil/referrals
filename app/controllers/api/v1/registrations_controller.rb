# frozen_string_literal: true

module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      def respond_with(user, _opts = {})
        if user.errors.present?
          render json: { error: user.errors }, status: :unprocessable_entity
        else
          render json: { notice: I18n.t('devise.registrations.signed_up'), email: user.email }, status: :ok
        end
      end
    end
  end
end
