# frozen_string_literal: true

require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

Rails.logger.debug 'Create User!'
shalaka = User.create!(email: 'shalaka@example.com', password: '123456', password_confirmation: '123456')

Rails.logger.debug 'Create Referrals!'
Referral.create!(email: 'refer1@example.com', sender: shalaka)
