# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Referral#create', type: :request do
  let(:user) { create(:user) }

  context 'When user is loged in' do
    before do
      sign_in user
    end

    describe '#create' do
      it 'creates the referral' do
        referral = attributes_for(:referral)
        initial_count = Referral.count
        post api_v1_referrals_path, params: referral
        expect(response).to have_http_status(:ok)
        latest_count = Referral.count
        expect(initial_count + 1).to eq(latest_count)
      end

      it 'sends email' do
        referral = attributes_for(:referral)
        puts referral
        expect { post api_v1_referrals_path, params: referral }.to have_enqueued_job.on_queue('default')
      end
    end
  end
end
