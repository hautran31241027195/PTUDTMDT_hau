/* Exercise 10.8 – Complex animations */
$(function () {
    $("button").click(function () {
        $("#box")
            .animate({            // bước 3: animate nhiều thuộc tính CSS cùng lúc
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({ top: '400px', opacity: '0.2' })   // bước 4: các animate chạy nối tiếp
            .animate({ height: '200px' }, 2000);
    });
});
