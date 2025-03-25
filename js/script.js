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
            section.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    // 5秒ごとに背景画像を変更
    setInterval(changeBackground, 5000);

    // 初回適用
    changeBackground();
});
