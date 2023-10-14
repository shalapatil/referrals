class Referral < ApplicationRecord
  # Associations
  belongs_to :sender, class_name: "User"

  # Validations
  validates :email, presence: true
  validates :email, format: { with: Devise.email_regexp }
  validates_uniqueness_of :email

end
