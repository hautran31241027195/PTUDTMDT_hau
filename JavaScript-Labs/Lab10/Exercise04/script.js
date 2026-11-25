/* Exercise 10.4 – jQuery listeners */

/* Các bước 2-4 (đã thay thế bằng phiên bản cuối):
   $(".panel").click(function () { $("#message").html("You clicked in the panel"); });
   $(".panel").on("click", function () { ... });          // on() dùng được cho mọi sự kiện
   $(function () { ... });                                 // chờ DOM sẵn sàng (document ready)  */

// Bước 5: nối chuỗi nhiều sự kiện (chaining)
$(function () {
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");      // gỡ sự kiện mousemove
        });
});
