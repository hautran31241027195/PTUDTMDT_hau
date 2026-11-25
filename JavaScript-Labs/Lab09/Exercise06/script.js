/* Exercise 9.6 – Debugging events */
// biến toàn cục + hàm dựng khung div (từ Lab 08)
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            // Gỡ lỗi: đặt breakpoint ở dòng alert (DevTools → Sources) rồi xem e, e.target
            console.log("mouseover on", e.target.id, e);
            alert("triggered by " + e.target.id);
        });
    }
});
