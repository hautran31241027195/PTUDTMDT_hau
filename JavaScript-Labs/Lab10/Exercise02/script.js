/* Exercise 10.2 – Basic selectors */

// Bước 2: chọn theo id, val() đặt giá trị cho textarea
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() lấy/đặt nội dung HTML.
// (Đề gốc dùng $('#first') nhưng làm vậy sẽ xóa luôn textarea bên trong, nên mình đổi sang #pageTitle)
$('#pageTitle').html("new Title");

// Bước 4: attr() lấy/đặt thuộc tính
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Bước 5: chọn mọi <button>, css() đổi nền thành đỏ – không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: chọn <body> cũng trả về một tập (chỉ có 1 phần tử)
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: chọn theo class và gắn thêm class "selected" (nền vàng)
$('.center-icons').addClass('selected');
