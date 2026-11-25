/* Exercise 9.8 – Form validation */

/* thiết lập listener khi trang đã sẵn sàng */
function init() {
    document.getElementById("sampleForm").addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);

/* đảm bảo các ô không bị bỏ trống (bước 3: hiển thị lỗi trong <div id="errors">) */
function checkForEmptyFields(e) {
    // ẩn vùng thông báo lỗi
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    // duyệt các ô để tìm ô trống
    var fieldList = [];
    for (i = 0; i < fields.length; i++) {
        if (fields[i].value == null || fields[i].value == "") {
            e.preventDefault();          // chặn gửi biểu mẫu
            fieldList.push(fields[i]);
        }
    }

    // tạo thông báo lỗi
    var msg = "The following fields can't be empty: ";
    if (fieldList.length > 0) {
        for (i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }
        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
        return;
    }

    /* ----- Mở rộng cho thương mại điện tử: kiểm tra định dạng email và số điện thoại ----- */
    var problems = [];
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) problems.push("Email is not valid");
    if (!/^[0-9+\s-]{9,14}$/.test(phone)) problems.push("Phone must contain 9-14 digits");
    if (document.getElementById("pass").value.length < 6) problems.push("Password needs at least 6 characters");

    if (problems.length > 0) {
        e.preventDefault();
        errorArea.innerHTML = "<p>" + problems.join("<br>") + "</p>";
        errorArea.className = "visible";
    }
}
