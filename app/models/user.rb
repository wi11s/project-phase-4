class User < ApplicationRecord
    has_secure_password

    has_many :followings, :class_name => "Follow", :foreign_key => "follower_id"
    has_many :followeds, :class_name => "Follow", :foreign_key => "followed_id"

    has_many :posts
end
