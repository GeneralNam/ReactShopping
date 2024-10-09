import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Store from './pages/Store';
import Product from './pages/Product';
import Style from './pages/Style';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

function App() {
  // 다크모드 상태 추가
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 상태에 따라 스타일 변경
  const styles = {
    header: {
      backgroundColor: isDarkMode ? '#333' : '#f9f9f9',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      height: '60px',
      color: isDarkMode ? '#fff' : '#000',
    },
    logo: {
      flexGrow: 1,
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginLeft: '20px',
    },
    link: {
      color: isDarkMode ? '#fff' : '#000',
      textDecoration: 'none',
      fontSize: '18px',
    },
    separator: {
      height: '1px',
      backgroundColor: isDarkMode ? '#555' : '#d0d0d0',
    },
    main: {
      backgroundColor: isDarkMode ? '#121212' : '#f9f9f9',
      minHeight: 'calc(100vh - 61px)',
      padding: '20px',
      color: isDarkMode ? '#fff' : '#000',
    },
    toggleButton: {
      marginLeft: '20px',
      backgroundColor: isDarkMode ? '#555' : '#ccc',
      color: isDarkMode ? '#fff' : '#000',
      border: 'none',
      padding: '8px 12px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
  };

  return (
    <Router>
      {/* 헤더 */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <Link to="/" style={styles.link}>DREAM</Link>
        </div>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/store" style={styles.link}>STORE</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/product" style={styles.link}>PRODUCT</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/style" style={styles.link}>STYLE</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/mypage" style={styles.link}>MYPAGE</Link>
            </li>
          </ul>
        </nav>
        {/* 다크모드 토글 버튼 */}
        <button 
          style={styles.toggleButton} 
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* 헤더와 메인의 경계선 */}
      <div style={styles.separator}></div>

      {/* 메인 콘텐츠 */}
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product" element={<Product />} />
          <Route path="/style" element={<Style />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
