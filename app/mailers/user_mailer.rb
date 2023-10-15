class UserMailer < ApplicationMailer
    def signup_email(user)
        @user = user
        @link = "#{ENV["APP_BASE_URL"]}/signup"
        mail(to: @user.email, subject: 'Signup on Referrals')
    end
end
