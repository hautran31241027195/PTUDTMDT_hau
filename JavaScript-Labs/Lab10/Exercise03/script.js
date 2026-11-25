/* Exercise 10.3 – Advanced selectors */

// Bước 2: selector theo kiểu input – các ô mật khẩu nền vàng
$(':password').css('background-color', 'yellow');

// Bước 4: :nth-child(4n) – mỗi phần tử con thứ 4 trong form (đã chạy riêng ở bước 3, giờ chạy cùng)
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: :contains – các <label> có chứa chữ "word" đổi màu chữ sang đen
$('label:contains("word")').css("color", "black");
