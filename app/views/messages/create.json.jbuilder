json.id @message.id
json.message @message.content
json.image @message.image
json.user_name @message.user.name
json.data @message.created_at.strftime("%Y/%m/%d %H:%M")