/* Exercise 8.9 – Functions as Objects */
var isCanadian = true;

/* Bước 1 (ban đầu): taxRate() là hàm riêng, calculateTax() gọi taxRate().
   Bước 3: lồng taxRate() vào trong calculateTax().
   Bước 4: gán hàm vào biến:  var tax = function taxRate() { ... };
   Bước 5: hàm ẩn danh:       var tax = function () { ... };
   Bước 6 (phiên bản dưới đây): truyền hàm ẩn danh làm tham số. */

function calculateTax(amount, tax) {
    return amount * tax();          // tax là một hàm được truyền vào
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
