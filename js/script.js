document.addEventListener("DOMContentLoaded", function() {
    // 画像のパスをリスト化
    const images = [
        "images/hero1.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg"
    ];

    let currentIndex = 0;
    const section = document.querySelector(".section1");

    function changeBackground() {
        if (section) {
            // 背景画像の切り替え
            section.style.transition = "background-image 1s ease-in-out";  // 背景画像切り替え時にアニメーションを加える
            section.style.backgroundImage = `url(${images[currentIndex]})`;

            // インデックス更新
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    // 5秒ごとに背景画像を変更
    setInterval(changeBackground, 5000);

    // 初回適用時に背景画像を変更
    changeBackground();
});
