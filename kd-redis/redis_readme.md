# 起動方法
```bash

docker compose up -d


```
# ログイン
```bash

docker exec -it kd-redis redis-cli -a password

> AUTH password

```

# redis-cli command
```bash
> set name hogehoge
> get name
> del name
> flushall
> keys *
//有効期限
> set name hoge ex 10 //10秒後に削除
> get name
//ミリ秒
> set name hoge px 1000 //1000ミリ秒後に削除
> pttl name

// nx:キーが存在しない場合のみセット
// xx:キーが存在する場合のみセット
> set name hoge nx
> set name hoge xx
```

# Hash
```bash
> hset user:1 name hoge
> hget user:1 name
> hdel user:1 name
> hset user:1 name hoge
> hgetall user:1
> hkeys user:1
> hvals user:1
> hlen user:1
```

# List
```bash
> lpush user:1 hoge
> lpush user:1 fuga
> lpush user:1 piyo
> lpush user:1 piyo
> lrange user:1 0 1
> lrange user:1 0 -1
> lrange user:1 -1 0
> lindex user:1 0
> lindex user:1 -1
> lpop user:1
```
# Set
```bash
> sadd user:1 hoge
> sadd user:1 fuga
> sadd user:1 piyo
> smembers user:1
> scard user:1 //件数
> sismember user:1 hoge //存在するかどうか
> srem user:1 hoge //削除
> //keyの削除
> del user:1
```

1. **単純なオブジェクト** - Hash を使用
   ```
   HSET user:1000 name "John" age "30" email "john@example.com"
   ```
   `{ name: "John", age: 30, email: "john@example.com" }` に相当します。

2. **配列/リスト** - List を使用
   ```
   RPUSH mylist "item1" "item2" "item3"
   ```
   `["item1", "item2", "item3"]` に相当します。

3. **ユニークな値の集合** - Set を使用
   ```
   SADD myset "value1" "value2" "value3"
   ```
   `new Set(["value1", "value2", "value3"])` に相当します。

4. **スコア付きアイテム** - Sorted Set を使用
   ```
   ZADD leaderboard 100 "user1" 85 "user2" 95 "user3"
   ```
   `[{id: "user1", score: 100}, {id: "user2", score: 85}, {id: "user3", score: 95}]` を順序付きで管理するのに相当。

5. **複合オブジェクト** - 複数のデータ構造を組み合わせる
   ```
   HSET user:1000 name "John" age "30"
   SADD user:1000:roles "admin" "editor"
   LPUSH user:1000:posts "post1" "post2"
   ```


- データの個別の部分に効率的にアクセスできる
- 必要な部分だけを更新できる
- 複雑なクエリや集合演算が可能
- メモリ効率が良い

- トランザクションを使用しないと、データの一貫性を確保するのが難しい場合がある
- アプリケーション側でスキーマを管理する必要がある
- 複雑なリレーショナルクエリには向いていない

