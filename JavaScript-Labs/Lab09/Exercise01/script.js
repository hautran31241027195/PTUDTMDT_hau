/* Exercise 9.1 – Basic DOM selection */

// Bước 2: getElementById + thuộc tính value của <textarea>
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Bước 3-4: thay nội dung bằng innerHTML (có / không dùng biến tạm)
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Bước 5-6: innerHTML (kèm thẻ) so với innerText (chỉ văn bản)
msg.value = document.getElementById("first").innerHTML;
msg.value = document.getElementById("first").innerText;

// Bước 7: getAttribute
msg.value = "My class is " + msg.getAttribute("class");

// Bước 8: getElementsByTagName trả về một tập phần tử
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Bước 9: tất cả <span>
elem = document.getElementsByTagName("span");
for (i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

// Bước 10: getElementsByClassName
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

// Bước 11: querySelector (chỉ phần tử khớp đầu tiên)
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

// Bước 12: querySelectorAll (tất cả phần tử khớp)
ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

// Bước 13: đổi class thành "hidden" (class của Bootstrap) → textarea biến mất
document.getElementById("msgArea").setAttribute("class", "hidden");

// Bước 14: đổi màu nền bằng style
document.getElementById("features").style.backgroundColor = "green";
