require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

puts "Create User!"
shalaka = User.create!(email: "shalaka@example.com", password: "123456", password_confirmation: "123456")

puts "Create Referrals!"
referral1 = Referral.create!(email: "refer1@example.com", sender: shalaka)
