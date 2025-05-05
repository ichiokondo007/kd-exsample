# admin データベースで認証
docker exec -it mongodb mongosh -u kd -p kd --authenticationDatabase admin

# kd-exsample データベースが存在するか確認
show dbs

# kd-exsample データベースを使用
use kd-exsample

# コレクションを確認
show collections

# canvas コレクションが存在するか確認
db.canvas.find()
