/* Exercise 8.8 – JavaScript Functions */

// biến toàn cục (global scope)
var boxClass = 'movingDiv';

// Bước 1-3: hàm tự in ra  →  Bước 4-5: hàm trả về chuỗi  →  Bước 6-7: thêm tham số num
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
