# frozen_string_literal: true

# # frozen_string_literal: true

class UniqueIndexOnReferrals < ActiveRecord::Migration[7.1]
  def change
    add_index :referrals, [:email], unique: true
  end
end
