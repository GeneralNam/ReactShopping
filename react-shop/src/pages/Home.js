// src/pages/Home.js
import React from 'react';

function Home() {

  const Styles = {
    homeContainer: {
      textAlign: 'center',
    },
    centeredImage: { // 오타 수정
      display: 'block',
      margin: '0 auto',
    },
  };

  return (
    <div style={Styles.homeContainer}>
      <h2>Welcome to DREAM!</h2>
      <img src='/SDTL.png' style={Styles.centeredImage}/>
      <img src='/YE.png' alt="" style={Styles.centeredImage} />
      <img src='/YE2.png' style={Styles.centeredImage}/>
    </div>
  );
}

export default Home;
