# README

# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|email|string|null: false|
|username|string|null: false|
### Association
- has_many :posts
- has_many :groups, through: :users_groups

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|image|null: false|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
### Association
- has_many  :posts
- has_many :users, through:  :users_groups


## users_postsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :group
