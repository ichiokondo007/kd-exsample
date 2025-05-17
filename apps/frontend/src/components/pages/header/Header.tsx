import { Link, NavLink } from 'react-router-dom';

function Header() {
  // アクティブなリンクのスタイルを定義
  const activeStyle = {
    fontWeight: 'bold',
    color: '#ff0000',
  };

  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li>
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
              ホーム
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>
              会社概要
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>
              お問い合わせ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;