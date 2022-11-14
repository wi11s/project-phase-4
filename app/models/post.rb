class Post < ApplicationRecord
  belongs_to :user
  has_many :replies
  has_many :likes
  has_many :users, through: :likes
end
