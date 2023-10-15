class Api::V1::ReferralsController < ApplicationController
  before_action :authenticate_user!

  def index
    referrals = Referral.where(sender: current_user).order(created_at: :desc)
    render json: referrals
  end

  def create
    referral = Referral.create!(referral_params)
    if referral
      UserMailer.signup_email(referral).deliver_later
      render json: referral
    else
      render json referral.error
    end
  end

  private

  def referral_params
    updated_params = params.permit(:email)
    updated_params["sender_id"] = current_user.id
    updated_params
  end
end
