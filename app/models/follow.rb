class Follow < ApplicationRecord
  belongs_to :follower, class_name: "User"
  belongs_to :followed, class_name: "User"

  validates :follower_id, presence: true
  validates :followed_id, presence: true

  validates :follower_id, uniqueness: { scope: :followed_id }
  validates :followed_id, uniqueness: { scope: :follower_id }

  validate :cannot_follow_self

  private

  def cannot_follow_self
    errors.add(:base, 'You cannot add yourself as a friend.') if follower == followed
  end
end
