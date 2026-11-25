/* Exercise 9.2 – DOM family relations
   Thử trong Console (F12) của trang này:
     document.getElementById("first")
     document.getElementById("first").firstChild                // text node (khoảng trắng), không phải <h1>
     document.getElementById("first").firstChild.nextSibling    // phần tử kế tiếp cùng cấp (<h1>)
     document.getElementById("first").parentNode                // <div class="container">
*/
var stories = document.getElementById("stories");
for (i = 0; i < stories.childNodes.length; i++) {
    var node = stories.childNodes[i];
    console.log("child " + i + " =" + node + " nodeType=" + node.nodeType);

    // Bước 7: chỉ tô màu các node phần tử (nodeType 1), bỏ qua text node (nodeType 3)
    if (node.nodeType == 1) {
        node.style.backgroundColor = "#d9edf7";
    }
}
