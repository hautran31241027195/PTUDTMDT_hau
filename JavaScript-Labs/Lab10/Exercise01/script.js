/* Exercise 10.1 – Set up jQuery
   jQuery được nạp từ CDN; nếu CDN không tải được thì dùng bản dự phòng ../js/jquery-3.1.1.min.js */
$(function () {
    var source = jqFromCDN ? "CDN (code.jquery.com)" : "file dự phòng cục bộ (js/jquery-3.1.1.min.js)";
    var info = "jQuery " + $.fn.jquery + " đã tải từ: " + source;
    console.log(info);
    $("#msgArea").val(info);
});
