# frozen_string_literal: true

class User < ApplicationRecord
  has_many :referrals, dependent: :restrict_with_exception

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
