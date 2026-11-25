/* Exercise 8.10 – Creating JavaScript Objects
   Đề bài viết lại cùng một đối tượng "order" theo nhiều cách. Ở đây mình giữ
   cả 4 cách trong một trang (mỗi cách một biến khác tên) để xem kết quả cùng lúc. */

// Cách 1: new Object() + thuộc tính gán bằng dấu chấm
var order1 = new Object();
order1.product = "Self Portrait in a Straw Hat";
order1.price = 15.0;
order1.quantity = 2;
order1.total = function () { return this.price * this.quantity; };
document.write("<h3>1. new Object()</h3>");
document.write("Product=" + order1.product);
document.write("<br>Price=" + order1.price);
document.write("<br>Quantity=" + order1.quantity);
document.write("<br>Total=" + order1.total());
// Bước 3: nếu viết order1.total (thiếu ngoặc) thì in ra nội dung hàm thay vì kết quả

// Cách 2: {} + ký hiệu ngoặc vuông
var order2 = {};
order2["product"] = "Self Portrait in a Straw Hat";
order2["price"] = 15.0;
order2["quantity"] = 2;
order2["total"] = function () { return this.price * this.quantity; };
document.write("<h3>2. {} và ngoặc vuông</h3>Total=" + order2.total());

// Cách 3: object literal
var order3 = {
    product: "Self Portrait in a Straw Hat",
    price: 15.0,
    quantity: 2,
    total: function () { return this.price * this.quantity; }
};
document.write("<h3>3. Object literal</h3>Total=" + order3.total());

// Cách 4: constructor function (tạo được nhiều thể hiện)
function Order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function () { return this.price * this.quantity; };
    this.output = function () {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    };
}
var example1 = new Order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new Order("Untitled #23", 10, 4);
document.write("<h3>4. Constructor function</h3>");
example1.output();
example2.output();
