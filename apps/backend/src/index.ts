import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// JSONミドルウェアを有効化
app.use(express.json());

// ルートエンドポイント
app.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'Welcome to KD-Example API' });
});


// サーバー起動
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
