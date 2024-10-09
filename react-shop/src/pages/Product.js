import React, { useState } from 'react';
import './Product.css'; // CSS 파일 임포트
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'; // SimpleBar CSS 임포트

const Product = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1); // 수량 상태 추가

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuantity(1); // 모달 닫을 때 수량 초기화
  };

  // 12개의 제품 이미지 배열
  const productImages = [
    { id: 1, src: "/표지사진.jpg", alt: "제품 이미지 1" },
    { id: 2, src: "/표지사진2.jpg", alt: "제품 이미지 2" },
    { id: 3, src: "/표지사진3.jpg", alt: "제품 이미지 3" },
    { id: 4, src: "/표지사진4.jpg", alt: "제품 이미지 4" },
    { id: 5, src: "/LET.png", alt: "제품 이미지 5" },
    { id: 6, src: "/표지사진6.jpg", alt: "제품 이미지 6" },
    { id: 7, src: "/표지사진7.jpg", alt: "제품 이미지 7" },
    { id: 8, src: "/표지사진8.jpg", alt: "제품 이미지 8" },
    { id: 9, src: "/표지사진9.jpg", alt: "제품 이미지 9" },
    { id: 10, src: "/표지사진10.jpg", alt: "제품 이미지 10" },
    { id: 11, src: "/표지사진11.jpg", alt: "제품 이미지 11" },
    { id: 12, src: "/표지사진12.jpg", alt: "제품 이미지 12" },
    // 필요에 따라 더 많은 이미지 추가
  ];

  const productImages2 = [
    { id: 1, src: "/LET.png", alt: "제품설명이미지1"},
    { id: 2, src: "/NEVER.png", alt: "제품설명이미지2"},
    { id: 3, src: "/SDTL.png", alt: "제품설명이미지3"},
    { id: 4, src: "/WHOEVER.png", alt: "제품설명이미지4"}
  ];

  // 수량 증가 함수
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // 수량 감소 함수
  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // 다크모드에 따라 모달 스타일을 변경
  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    content: {
      backgroundColor: isDarkMode ? '#333' : 'white',
      color: isDarkMode ? '#fff' : '#000',
      padding: '30px',
      borderRadius: '10px',
      width: '95%',
      maxWidth: '1600px',
      height: '90vh',
      display: 'flex',
      position: 'relative',
      boxSizing: 'border-box',
    },
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '35px',
      height: '35px',
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      color: isDarkMode ? '#fff' : '#000',
    },
    productName: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    productPrice: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '20px',
    },
    selectSize: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '6px',
      border: isDarkMode ? '1px solid #555' : '1px solid #ccc',
      backgroundColor: isDarkMode ? '#555' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      fontSize: '16px',
    },
    orderButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#32CD32', // 연두색으로 변경 (LimeGreen)
      color: '#fff', // 흰색 텍스트
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '18px',
    },
    quantityContainer: { // 수량 선택기 스타일
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    quantityButton: { // 수량 버튼 스타일
      width: '30px',
      height: '30px',
      backgroundColor: '#ddd', // 연한 회색
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 10px',
    },
    quantityDisplay: { // 수량 표시 스타일
      fontSize: '18px',
      width: '30px',
      textAlign: 'center',
    },
    productCard: {
      backgroundColor: isDarkMode ? '#444' : 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '12px',
      cursor: 'pointer',
      maxWidth: '100%', // 최대 너비를 100%로 설정
      textAlign: 'center',
    },
    productImageWrapper: {
      width: '100%',
      paddingTop: '100%', // 정사각형 비율 유지
      position: 'relative',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
      marginBottom: '12px',
      overflow: 'hidden',
    },
    productImageMain: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    productTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
      color: 'black',
    },
    productPriceMain: {
      color: '#666',
      fontSize: '14px',
    },
    productDescription: {
      fontSize: '16px',
      color: isDarkMode ? '#ddd' : '#333',
    },
    detailsContainer: {
      width: '25%', // 오른쪽 세부 정보 영역을 줄임 (35% → 25%)
      paddingLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // 세로 가운데 정렬
      alignItems: 'center', // 가로 가운데 정렬
      height: '100%',
      boxSizing: 'border-box',
    },
    // 추가된 스타일
    container: {
      display: 'flex',
      marginTop: '20px',
    },
    sidebar: {
      width: '200px',
      marginRight: '20px',
      padding: '10px',
      backgroundColor: isDarkMode ? '#555' : '#f4f4f4',
      borderRadius: '8px',
      height: 'fit-content',
    },
    sidebarItem: {
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: isDarkMode ? '#666' : '#e0e0e0',
      borderRadius: '4px',
      textAlign: 'center',
      cursor: 'pointer',
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: '500',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // 4열로 변경
      gap: '20px',
      flexGrow: 1,
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'left',
    },
  };

  return (
    <div style={{ padding: '0', maxWidth: '100%', margin: '0' }}> {/* 패딩과 마진 제거, 최대 너비 100% */}
      <h2 style={modalStyles.title}>Product</h2>
      <div style={modalStyles.container}>
        {/* 사이드바 */}
        <div style={modalStyles.sidebar}>
          <div style={modalStyles.sidebarItem}>T-shirt</div>
          <div style={modalStyles.sidebarItem}>Pants</div>
          <div style={modalStyles.sidebarItem}>LongSleeves</div>
          <div style={modalStyles.sidebarItem}>Hoodie</div>
        </div>

        {/* 제품 그리드 */}
        <div style={modalStyles.productsGrid}>
          {productImages2.map((image) => (
            <div
              key={image.id}
              style={modalStyles.productCard}
              onClick={handleOpenModal}
            >
              <div style={modalStyles.productImageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={modalStyles.productImageMain}
                />
              </div>
              <p style={modalStyles.productTitle}>제품 이름 {image.id}</p>
              <p style={modalStyles.productPriceMain}>₩50,000</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div style={modalStyles.overlay} role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
          <div className="modal-content" style={modalStyles.content}>
            <SimpleBar
              style={{ width: '70%', height: '100%' }} // 왼쪽 이미지 영역을 70%로 증가
              className="image-container"
              scrollbarMinSize={12}
              autoHide={false}
            >
              <div className="image-list">
                {productImages.map((image) => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    style={modalStyles.productImage}
                  />
                ))}
              </div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>제품 설명</h3>
                <p style={modalStyles.productDescription}>
                  여기에 제품에 대한 자세한 설명을 넣으세요. 이 부분은 스크롤이 가능합니다.
                </p>
              </div>
            </SimpleBar>
            <div className="details-container" style={modalStyles.detailsContainer}>
              <h2 id="product-modal-title" style={modalStyles.productName}>제품 이름</h2>
              <p style={modalStyles.productPrice}>₩50,000</p>
              {/* 사이즈 선택 */}
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                style={modalStyles.selectSize}
              >
                <option value="">사이즈 선택</option>
                <option value="1">사이즈 1</option>
                <option value="2">사이즈 2</option>
                <option value="3">사이즈 3</option>
              </select>
              {/* 수량 선택기 추가 */}
              <div style={modalStyles.quantityContainer}>
                <button
                  onClick={decrementQuantity}
                  style={modalStyles.quantityButton}
                  aria-label="수량 감소"
                >
                  -
                </button>
                <span style={modalStyles.quantityDisplay}>{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  style={modalStyles.quantityButton}
                  aria-label="수량 증가"
                >
                  +
                </button>
              </div>
              {/* 구매하기 버튼 */}
              <button
                style={modalStyles.orderButton}
                onClick={() => {
                  if (selectedSize) {
                    alert(`주문이 완료되었습니다! 사이즈: ${selectedSize}, 수량: ${quantity}`);
                    handleCloseModal();
                  } else {
                    alert('사이즈를 선택해주세요.');
                  }
                }}
              >
                주문하기
              </button>
            </div>
            <button onClick={handleCloseModal} style={modalStyles.closeButton} aria-label="모달 닫기">
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
