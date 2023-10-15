# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Associations' do
    it { expect(described_class.reflect_on_association(:referrals).macro).to eq(:has_many) }
  end
end
