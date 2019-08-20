class GroupUser < ApplicationRecord
  blongs_to :group
  blongs_to :user
end
