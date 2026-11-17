/* Exercise 10.10 – jqXHR handling */
// Lưu ý: GitHub Pages chạy trên HTTPS nên phải gọi dịch vụ bằng HTTPS (http:// bị trình duyệt chặn).
// Nếu dịch vụ ngoài không phản hồi (mất mạng, bị chặn CORS...) thì dùng dữ liệu mẫu cities.json.
var CITIES_URL = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
var LOCAL_URL = "cities.json";

$(function () {
    $('.animLoading').hide();

    $("#consume").click(function () {
        $('.animLoading').show();
        $("#results ul").empty();
        $("#note").text("");

        $.get(CITIES_URL, null, null, "json")
            // done chạy đầu tiên khi thành công
            .done(function (data) {
                addCities(data);
                $("#note").text("done(): dữ liệu lấy từ dịch vụ web.");
            })
            // fail chạy khi có lỗi (trước always)
            .fail(function (xhr, status, error) {
                // đề bài dùng alert; ở đây hiện thông báo ngay trên trang rồi nạp dữ liệu mẫu
                $("#note").text("fail(): không tải được dữ liệu – status=" + status +
                                " error=" + error + ". Đang dùng dữ liệu mẫu cities.json.");
                $.getJSON(LOCAL_URL).done(addCities);
            })
            // always luôn chạy cuối cùng: tắt biểu tượng chờ
            .always(function () {
                $('.animLoading').fadeOut("slow");
            });
    });
});

function addCities(data) {
    $.each(data, function (index, value) {
        var li = $('<li/>').html(value.name);
        li.appendTo("div#results ul");
    });
}
