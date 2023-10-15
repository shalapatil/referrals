# frozen_string_literal: true

class UserMailer < ApplicationMailer
  def signup_email(user)
    @user = user
    @link = "#{ENV.fetch('APP_BASE_URL', nil)}/signup"
    mail(to: @user.email, subject: I18n.t('signup_subject'))
  end
end
