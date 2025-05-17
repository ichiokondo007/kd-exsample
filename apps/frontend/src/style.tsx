import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import Header from './components/pages/header/Header';

// アプリケーション全体のコンテキスト
export const AppContext = createContext<{
  // コンテキストの型定義
  theme: string;
  setTheme: (theme: string) => void;
  // 他のステート
}>({
  theme: 'light',
  setTheme: () => {},
  // デフォルト値
});

// レイアウトコンポーネント
export function AppLayout() {
  // アプリケーション全体で共有するステート
  const [theme, setTheme] = useState('light');
  // 他のステート

  // スタイル定義
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      minHeight: '100vh',
    },
    content: {
      display: 'flex',
      flex: 1,
    },
    main: {
      flex: 1,
      padding: '20px',
    },
  };

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <div style={{ ...styles.container, background: theme === 'dark' ? '#333' : '#fff' }}>
        <Header />
          <main style={styles.main}>
            <Outlet /> {/* ルートに対応するページコンテンツ */}
          </main>
      </div>
    </AppContext.Provider>
  );
}
