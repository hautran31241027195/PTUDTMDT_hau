/* ==========================================================
   main.js – Trang chủ JavaScript-Labs
   Vận dụng: biến/hàm/đối tượng (Lab 08), DOM & Events (Lab 09)
   ========================================================== */

/* >>> SINH VIÊN CHỈNH THÔNG TIN CÁ NHÂN TẠI ĐÂY (một chỗ duy nhất) <<< */
var STUDENT = {
  name: "Trần Lê Như Hậu",
  mssv: "31241027195",
  classCode: "26C1INF50902702",
  github: "https://github.com/[username]",
  repo: "https://github.com/[username]/[repository]",
  pages: "https://[username].github.io/[repository]/JavaScript-Labs/",
  avatar: "images/avatar.svg"          // đổi thành images/avatar.jpg nếu dùng ảnh cá nhân
};

window.addEventListener("load", function () {
  fillStudentInfo();
  initTabs();
  initMenuHighlight();
  initShop();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- 1. Điền thông tin sinh viên ---------- */
function fillStudentInfo() {
  var textEls = document.querySelectorAll("[data-student]");
  for (var i = 0; i < textEls.length; i++) {
    var key = textEls[i].getAttribute("data-student");
    if (STUDENT[key]) textEls[i].textContent = STUDENT[key];
  }
  var linkEls = document.querySelectorAll("[data-student-href]");
  for (i = 0; i < linkEls.length; i++) {
    linkEls[i].href = STUDENT[linkEls[i].getAttribute("data-student-href")];
  }
  document.getElementById("avatar").src = STUDENT.avatar;
  document.title = "JavaScript Labs – " + STUDENT.name;
}

/* ---------- 2. Tab "Kiến thức đã học" ---------- */
function initTabs() {
  var tabs = document.querySelectorAll(".tabs button");
  var panels = document.querySelectorAll(".panel-k");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
      panels.forEach(function (p) { p.classList.remove("on"); });
      tab.setAttribute("aria-selected", "true");
      document.getElementById(tab.getAttribute("data-panel")).classList.add("on");
    });
  });
}

/* ---------- 3. Tô sáng mục menu theo vị trí cuộn ---------- */
function initMenuHighlight() {
  var links = document.querySelectorAll(".menu a");
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach(function (s) { io.observe(s); });
}

/* ---------- 4. Demo thương mại điện tử: giỏ hàng + kiểm tra biểu mẫu ---------- */
// Constructor function (Lab 08 – Objects)
function Product(id, name, icon, price) {
  this.id = id; this.name = name; this.icon = icon; this.price = price;
}
var products = [
  new Product(1, "Áo thun Basic", "👕", 189000),
  new Product(2, "Giày sneaker", "👟", 690000),
  new Product(3, "Balo laptop", "🎒", 459000)
];
var cart = [];            // [{product, qty}]
var discountRate = 0;     // 0.1 khi áp mã UEH10

function formatVND(n) { return n.toLocaleString("vi-VN") + " ₫"; }

function initShop() {
  var box = document.getElementById("products");
  products.forEach(function (p) {            // Tạo phần tử bằng DOM (Lab 09)
    var el = document.createElement("div");
    el.className = "prod";
    el.innerHTML =
      '<div class="pic">' + p.icon + "</div><h4>" + p.name + "</h4>" +
      '<div class="price">' + formatVND(p.price) + "</div>" +
      '<div class="qty"><button type="button" data-act="minus" aria-label="Giảm">−</button>' +
      '<span id="q' + p.id + '">1</span>' +
      '<button type="button" data-act="plus" aria-label="Tăng">+</button></div><br>' +
      '<button type="button" class="btn btn-brand btn-sm" data-act="add">Thêm vào giỏ</button>';
    el.setAttribute("data-id", p.id);
    box.appendChild(el);
  });

  // Event delegation: một listener cho toàn bộ danh sách sản phẩm
  box.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-act]");
    if (!btn) return;
    var id = Number(btn.closest(".prod").getAttribute("data-id"));
    var qEl = document.getElementById("q" + id);
    var q = Number(qEl.textContent);
    if (btn.dataset.act === "plus") qEl.textContent = Math.min(q + 1, 20);
    if (btn.dataset.act === "minus") qEl.textContent = Math.max(q - 1, 1);
    if (btn.dataset.act === "add") { addToCart(id, q); qEl.textContent = 1; }
  });

  document.getElementById("cartList").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-remove]");
    if (b) { cart.splice(Number(b.getAttribute("data-remove")), 1); renderCart(); }
  });

  document.getElementById("applyCoupon").addEventListener("click", applyCoupon);
  initCheckoutForm();
  renderCart();
}

function addToCart(id, qty) {
  var p = products.filter(function (x) { return x.id === id; })[0];
  var line = cart.filter(function (x) { return x.product.id === id; })[0];
  if (line) line.qty += qty; else cart.push({ product: p, qty: qty });
  renderCart();
}

function renderCart() {
  var ul = document.getElementById("cartList");
  ul.innerHTML = "";
  var subtotal = 0;
  if (cart.length === 0) {
    ul.innerHTML = '<li class="empty">Giỏ hàng đang trống – hãy thêm sản phẩm.</li>';
  }
  cart.forEach(function (line, i) {
    var money = line.product.price * line.qty;
    subtotal += money;
    var li = document.createElement("li");
    li.innerHTML = "<span>" + line.product.icon + " " + line.product.name + " × " + line.qty +
      "</span><span>" + formatVND(money) + ' <button type="button" data-remove="' + i +
      '" aria-label="Xóa">✕</button></span>';
    ul.appendChild(li);
  });
  var discount = Math.round(subtotal * discountRate);
  document.getElementById("subtotal").textContent = formatVND(subtotal);
  document.getElementById("discount").textContent = "− " + formatVND(discount);
  document.getElementById("total").textContent = formatVND(subtotal - discount);
}

function applyCoupon() {
  var code = document.getElementById("coupon").value.trim().toUpperCase();
  var msg = document.getElementById("couponMsg");
  if (code === "UEH10") {
    discountRate = 0.1; msg.textContent = "Đã áp dụng mã UEH10: giảm 10%."; msg.className = "msg ok";
  } else {
    discountRate = 0; msg.textContent = code ? "Mã giảm giá không hợp lệ." : "Vui lòng nhập mã (thử UEH10)."; msg.className = "msg";
  }
  renderCart();
}

/* ----- Kiểm tra biểu mẫu thanh toán (Lab 09 – Form validation) ----- */
var rules = {
  fullName: { test: function (v) { return v.trim().split(/\s+/).length >= 2; }, msg: "Nhập đầy đủ họ và tên (ít nhất 2 từ)." },
  phone:    { test: function (v) { return /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v.trim()); }, msg: "Số điện thoại Việt Nam không hợp lệ (vd: 0912345678)." },
  email:    { test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); }, msg: "Email không đúng định dạng." }
};

function validateField(input) {
  var rule = rules[input.id];
  var ok = rule.test(input.value);
  input.classList.toggle("bad", !ok);
  input.classList.toggle("good", ok);
  document.getElementById(input.id + "Err").textContent = ok ? "" : rule.msg;
  return ok;
}

function initCheckoutForm() {
  var form = document.getElementById("checkoutForm");
  Object.keys(rules).forEach(function (id) {
    var input = document.getElementById(id);
    input.addEventListener("blur", function () { validateField(input); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var allOk = true;
    Object.keys(rules).forEach(function (id) {
      if (!validateField(document.getElementById(id))) allOk = false;
    });
    var result = document.getElementById("orderMsg");
    if (!allOk) { result.className = "msg"; result.textContent = "Vui lòng sửa các trường báo lỗi."; return; }
    if (cart.length === 0) { result.className = "msg"; result.textContent = "Giỏ hàng đang trống."; return; }
    result.className = "msg ok";
    result.textContent = "Đặt hàng thành công (demo) – cảm ơn " + document.getElementById("fullName").value.trim() + "!";
    cart = []; discountRate = 0; renderCart(); form.reset();
    form.querySelectorAll("input").forEach(function (i) { i.classList.remove("good", "bad"); });
  });
}
