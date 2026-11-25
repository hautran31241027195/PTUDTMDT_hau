/* Exercise 9.3 – Modifying the DOM */

// Tạo thẻ <p> mới, thêm text, rồi gắn vào <div id="first">
var first = document.getElementById("first");
var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Xóa một thẻ <li> khỏi danh sách icon
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
