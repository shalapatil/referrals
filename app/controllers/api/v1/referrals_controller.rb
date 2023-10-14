class Api::V1::ReferralsController < ApplicationController
  before_action :authenticate_user!

  def index
    referrals = Referral.where(sender: current_user)
    render json: referrals
  end

  def create
  end

  def show
  end

  def destroy
  end
end
