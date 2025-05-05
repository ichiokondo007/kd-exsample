const { MongoClient, ObjectId } = require('mongodb');

// MongoDB接続情報
const uri = 'mongodb://kd:kd@localhost:27017/';
const client = new MongoClient(uri);
const dbName = 'kd-exsample';
const collectionName = 'canvas';

async function run() {
	try {
		// MongoDBに接続
		await client.connect();
		console.log('MongoDBに接続しました');

		const database = client.db(dbName);
		const collection = database.collection(collectionName);

		// 1. データ登録
		console.log('1. データ登録テスト');
		const insertResult = await collection.insertOne({
			title: 'テストキャンバス',
			width: 800,
			height: 600,
			elements: [
				{ type: 'rectangle', x: 100, y: 100, width: 200, height: 150, color: '#ff0000' },
				{ type: 'circle', x: 400, y: 300, radius: 50, color: '#0000ff' }
			],
			createdAt: new Date()
		});
		console.log(`新しいデータが登録されました。ID: ${insertResult.insertedId}\n`);

		// 登録したIDを保存
		const documentId = insertResult.insertedId;

		// 2. すべてのデータ取得
		console.log('2. すべてのデータ取得テスト');
		const findResult = await collection.find({}).toArray();
		console.log(`${findResult.length}件のデータを取得しました:`);
		console.log(JSON.stringify(findResult, null, 2));
		console.log('');

		// 3. 特定IDのデータ取得
		console.log('3. 特定IDのデータ取得テスト');
		const findOneResult = await collection.findOne({ _id: documentId });
		console.log(`ID ${documentId} のデータを取得しました:`);
		console.log(JSON.stringify(findOneResult, null, 2));
		console.log('');

		// 4. データ更新
		console.log('4. データ更新テスト');
		const updateResult = await collection.updateOne(
			{ _id: documentId },
			{
				$set: {
					title: '更新されたキャンバス',
					updatedAt: new Date()
				},
				$push: {
					elements: { type: 'text', x: 250, y: 250, text: 'こんにちは', color: '#00ff00' }
				}
			}
		);
		console.log(`${updateResult.modifiedCount}件のデータが更新されました`);

		// 更新されたデータを確認
		const updatedData = await collection.findOne({ _id: documentId });
		console.log('更新後のデータ:');
		console.log(JSON.stringify(updatedData, null, 2));
		console.log('');

		// 5. データ削除
		console.log('5. データ削除テスト');
		const deleteResult = await collection.deleteOne({ _id: documentId });
		console.log(`${deleteResult.deletedCount}件のデータが削除されました`);

		// 削除の確認
		const remainingCount = await collection.countDocuments({});
		console.log(`コレクション内の残りのドキュメント数: ${remainingCount}`);

	} catch (error) {
		console.error('エラーが発生しました:', error);
	} finally {
		// MongoDBとの接続を閉じる
		await client.close();
		console.log('MongoDBとの接続を終了しました');
	}
}

// プログラム実行
run().catch(console.error);
