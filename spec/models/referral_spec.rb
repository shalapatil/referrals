# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Referral, type: :model do
  describe 'Associations' do
    it { expect(described_class.reflect_on_association(:sender).macro).to eq(:belongs_to) }
  end
end
