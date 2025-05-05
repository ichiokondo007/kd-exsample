db = db.getSiblingDB('admin');
// ユーザーがすでに存在するか確認
if (!db.getUser('kd')) {
    db.createUser({
        user: "kd",
        pwd: "kd",
        roles: [
            { role: "root", db: "admin" },
            { role: "dbOwner", db: "kd-exsample" } // kd-exsampleへのフルアクセス権限を付与
        ]
    });
    print("User 'kd' created with full access to 'kd-exsample'.");
} else {
    print("User 'kd' already exists.");
}
// kd-exsample データベースを取得
db = db.getSiblingDB('kd-exsample');
// canvas コレクションが存在しない場合に初期化
if (db.getCollectionNames().indexOf('canvas') === -1) {
    db.createCollection('canvas');
    print("Collection 'canvas' created in 'kd-exsample' database.");
} else {
    print("Collection 'canvas' already exists in 'kd-exsample' database.");
}