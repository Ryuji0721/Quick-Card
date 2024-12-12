"use strict";

// 画像を表示するエリア
function showImage(id) {
    // すべての画像を非表示にする
    const images = document.querySelectorAll('.image-container');
    images.forEach(image => image.style.display = 'none');
    
    // 指定された画像を表示する
    document.getElementById(id).style.display = 'block';
}

// 名刺の画像をクリックするエリア
function toggleDetails(featureId) {
    // すべての機能セクションを非表示にする
    const allFeatures = document.querySelectorAll('.quick-card');
    allFeatures.forEach(function(section) {
        section.style.display = 'none';
    });

    // クリックされた機能の詳細を表示
    const feature = document.getElementById(featureId);
    feature.style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function() {
    const options = {
      root: null, // ビューポートを基準
      rootMargin: "0px", // ビューポートのマージン
      threshold: 0.3 // 25%が表示された時に発動
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 要素がビューポートに入ったら、クラスを追加
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 監視を解除
        }
      });
    }, options);
  
    // アニメーションを適用したい要素に対して監視を開始
    const elements = document.querySelectorAll(".animate-right, .animate-left");
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  

  
// ボタンの表示・非表示を制御
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const footer = document.querySelector('footer');

// スクロール時にボタンの表示と追従を管理
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // 現在のスクロール位置
    const footerPosition = footer.offsetTop; // フッターの位置

    // スクロール位置が200pxを超えたらボタンを表示
    if (scrollPosition > 200) {
        scrollToTopBtn.style.display = 'block'; // ボタンを表示
    } else {
        scrollToTopBtn.style.display = 'none'; // スクロール位置がトップに戻ると非表示
    }

    // フッターに接近したらボタンがフッターの上に追従
    if (scrollPosition + window.innerHeight >= footerPosition) {
        scrollToTopBtn.style.position = 'absolute'; // フッター手前でボタンが追従を終了
        scrollToTopBtn.style.bottom = `${window.innerHeight - (footerPosition - scrollPosition)}px`; // フッターに隠れないように調整
    } else {
        scrollToTopBtn.style.position = 'fixed'; // 通常の固定位置に戻す
        scrollToTopBtn.style.bottom = '20px'; // 画面下部に固定
    }
});

// ボタンクリックでスクロールトップ
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

