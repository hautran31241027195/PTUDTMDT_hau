/* Exercise 9.4 – Simple event handling */
var btn = document.getElementById("testButton");
var img = document.getElementById("mainImage");

// Bước 2: gắn hàm xử lý cho sự kiện click
btn.addEventListener("click", simpleHandler);

// Bước 5-6: nút Hide/Show, dùng CSS transition + setTimeout
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // đổi display sau 1000 ms (chờ hiệu ứng mờ dần xong)
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        // đổi class sau 500 ms để hiệu ứng hiện dần chạy được
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

// Bước 3: hàm ẩn danh – ảnh chuyển xám khi rê chuột vào
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Bước 4: bỏ style khi chuột rời ảnh
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
