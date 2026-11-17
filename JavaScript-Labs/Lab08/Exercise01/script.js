/* Exercise 8.1 – Enabling/Disabling JavaScript
   Mặc định trang hiển thị "disabled". Nếu JavaScript đang bật, đoạn mã này
   sẽ đổi thông báo thành "enabled" (giống trang JavaScriptTest.php của đề bài). */
var statusEl = document.getElementById("jsStatus");
statusEl.innerHTML = "You have JavaScript enabled";
statusEl.className = "status on";
console.log("JavaScript is running");
