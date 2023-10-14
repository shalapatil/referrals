class Api::V1::ReferralsController < ApplicationController
  def index
    referrals = Referral.all
    render json: referrals
  end

  def create
  end

  def show
  end

  def destroy
  end
end
