# frozen_string_literal: true

FactoryBot.define do
  factory :referral do
    user
    email { Faker::Internet.unique.safe_email }
  end
end
