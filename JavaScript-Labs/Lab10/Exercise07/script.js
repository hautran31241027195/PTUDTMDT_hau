/* Exercise 10.7 – More jQuery animation: popup xem trước ảnh lớn */
$(function () {

    $('figure img').on('mouseover', function (e) {

        // tạo tên file ảnh lớn dựa trên ảnh nhỏ hiện tại (small → medium)
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // tạo phần tử động chứa ảnh lớn và chú thích
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // làm ảnh nhỏ chuyển xám
        $(this).addClass("gray");

        // rồi cho popup hiện dần
        $("#preview").fadeIn(1000);
    });

    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});

function removePreview() {
    // xóa phần tử động và bỏ class gray
    $(this).removeClass("gray");
    $("#preview").remove();
}

function movePreview(e) {
    // đặt vị trí popup theo tọa độ chuột
    $("#preview")
        .css("top", (e.pageY - 10) + "px")
        .css("left", (e.pageX + 30) + "px");
}
