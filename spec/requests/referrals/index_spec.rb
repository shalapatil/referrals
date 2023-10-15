# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Referral#index', type: :request do
  let(:user) { create(:user) }
  let(:referral) { create(:referral, user:) }

  context 'When user is loged in' do
    before do
      sign_in user
    end

    describe '#index' do
      it 'gets the referrals list' do
        get api_v1_referrals_path
        expect(response).to have_http_status(:ok)
        JSON.parse(response.body)
      end
    end
  end

  context 'When user is not logged in' do
    describe '#index' do
      it 'doesnt get the referrals list' do
        get api_v1_referrals_path
        expect(response).not_to have_http_status(:ok)
      end
    end
  end
end
