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
