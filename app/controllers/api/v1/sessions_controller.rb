# frozen_string_literal: true

class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json

  def destroy
    sign_out(current_user)
    render json: { notice: I18n.t("devise.sessions.signed_out") }, status: :ok
  end

end
