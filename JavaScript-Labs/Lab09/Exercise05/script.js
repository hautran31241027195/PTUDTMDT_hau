/* Exercise 9.5 – Responding to load events */
// biến toàn cục + hàm dựng khung div (từ Lab 08)
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 2-3: chạy ngay → lỗi vì div1 chưa tồn tại (script nằm trong <head>)
     var divToGet = document.getElementById("div1");
     alert(divToGet.innerHTML);                       // TypeError: Cannot read properties of null

   Bước 4: chờ trang tải xong bằng sự kiện load */
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
