import express, { Request, Response } from 'express';
import { User } from '@kd-exsample/shared';

const app = express();
const port = process.env.PORT || 3000;

// JSONミドルウェアを有効化
app.use(express.json());

// サンプルユーザーデータ
const users: User[] = [
	{ id: '1', name: 'John Doe', email: 'john@example.com' },
	{ id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

// ルートエンドポイント
app.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'Welcome to KD-Example API' });
});

// ユーザー一覧取得
app.get('/api/users', (_req: Request, res: Response) => {
	res.json(users);
});

// 特定ユーザー取得
app.get('/api/users/:id', (req: Request, res: Response) => {
	const user = users.find(u => u.id === req.params.id);

	if (!user) {
		res.status(404).json({ error: 'User not found' });
		return;
	}

	res.json(user);
});

// ユーザー作成
app.post('/api/users', (req: Request, res: Response) => {
	const { name, email } = req.body;

	if (!name || !email) {
		res.status(400).json({ error: 'Name and email are required' });
		return;
	}

	const newUser: User = {
		id: (users.length + 1).toString(),
		name,
		email
	};

	users.push(newUser);
	res.status(201).json(newUser);
});

// サーバー起動
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
