class CreateReferrals < ActiveRecord::Migration[7.1]
  def change
    create_table :referrals do |t|
      t.references :sender, foreign_key: { to_table: :users }, null: false
      t.string :email, null: false

      t.timestamps
    end
  end
end
