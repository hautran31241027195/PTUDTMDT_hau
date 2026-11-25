/* Exercise 10.5 – Inserting DOM elements
   Đề bài thử lần lượt từng phương thức trên cùng một ảnh. Ở đây mình chạy cả 7 phương thức
   cùng lúc, mỗi phương thức chèn một ảnh có nhãn riêng để thấy rõ vị trí của chúng. */
$(function () {
    var panel = $('.panel');

    // tạo ảnh mới kèm nhãn (title) để biết ảnh nào do phương thức nào chèn
    function makeImg(label) {
        return $('<img src="../images/art/thumbs/13030.jpg" title="' + label + '" alt="' + label + '">');
    }

    // ---- chèn BÊN NGOÀI .panel ----
    panel.after(makeImg("after"));                  // bước 2: sau panel
    panel.before(makeImg("before"));                // bước 3: trước panel
    makeImg("insertBefore").insertBefore(panel);    // bước 8: tương đương before()

    // ---- chèn BÊN TRONG .panel ----
    panel.append(makeImg("append"));                // bước 4: cuối nội dung panel
    panel.prepend(makeImg("prepend"));              // bước 5: đầu nội dung panel
    makeImg("appendTo").appendTo(panel);            // bước 6: tương đương append()
    makeImg("prependTo").prependTo(panel);          // bước 7: tương đương prepend()
});
