# README

# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|email|string|null: false|
|nickname|string|null: false, index: true|
### Association
- has_many :user_groups
- has_many :posts
- has_many :groups, through: :user_groups

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|
|text|text|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :user_groups
- has_many :posts
- has_many :users, through:  :user_groups


## user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
