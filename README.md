# README

# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|email|string|null: false|
|username|string|null: false|
### Association
- belongs_to :user_groups
- has_many :posts
- has_many :groups, through: :user_groups

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|image|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- belongs_to :user_groups
- has_many  :posts
- has_many :users, through:  :user_groups


## user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
