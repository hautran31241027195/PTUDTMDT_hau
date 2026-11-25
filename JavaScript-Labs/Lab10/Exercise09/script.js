/* Exercise 10.9 – GET requests */
// Lưu ý: GitHub Pages chạy trên HTTPS nên phải gọi dịch vụ bằng HTTPS (http:// bị trình duyệt chặn).
// Nếu dịch vụ ngoài không phản hồi (mất mạng, bị chặn CORS...) thì dùng dữ liệu mẫu cities.json.
var CITIES_URL = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
var LOCAL_URL = "cities.json";

$(function () {
    $("#consume").click(function () {
        $("#results").html("<ul></ul>");        // bước 5: danh sách <ul> rỗng
        $("#note").text("");

        // bước 3-5: $.get + kiểm tra status + $.each
        $.get(CITIES_URL, function (data, status) {
            if (status == "success") {
                showCities(data);
                $("#note").text("Nguồn dữ liệu: dịch vụ web randyconnolly.com");
            }
        }, "json").fail(function () {
            // dự phòng: tải dữ liệu mẫu cục bộ
            $.get(LOCAL_URL, function (data) {
                showCities(data);
                $("#note").text("Dịch vụ ngoài không phản hồi – đang hiển thị dữ liệu mẫu (cities.json).");
            }, "json");
        });
    });
});

function showCities(data) {
    $.each(data, function (index, value) {
        var li = $('<li/>').html(value.name);
        li.appendTo("div#results ul");
    });
}
