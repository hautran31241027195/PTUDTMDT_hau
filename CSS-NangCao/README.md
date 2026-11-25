# CSS-NangCao – Lab 07: Advanced CSS (Layout)

## Thông tin sinh viên
- Họ và tên: Trần Lê Như Hậu
- MSSV: 31241027195
- Lớp học phần: 26C1INF50902702
- GitHub cá nhân: https://github.com/hautran31241027195

## Mục tiêu thực hiện Lab 07
Hoàn thành 19 Exercise của Lab 07 (Chương 5 – Advanced CSS: Layout):
- Điều khiển document flow bằng `display`; định vị bằng `relative` / `absolute`; xếp lớp bằng `z-index`.
- Dùng `float` và `clear`; dựng bố cục hai cột, ba cột.
- Thiết kế responsive bằng media queries và viewport.
- Dùng CSS transforms, transitions, filters và animations.
- Dùng Bootstrap grid system và các thành phần giao diện có sẵn.

## Cấu trúc thư mục
```text
CSS-NangCao/
├── index.html              # Trang chủ: thông tin cá nhân, giới thiệu, liên kết Exercise, tổng kết
├── README.md
├── css/style.css           # CSS của trang chủ
├── images/avatar.jpg       # Ảnh đại diện
└── Lab07/
    ├── index.html          # Trang danh sách 19 Exercise
    ├── css/                # lab07.css (trang danh sách) + labnav.css (thanh điều hướng nhỏ)
    ├── bootstrap/          # Bootstrap 3 (css, js, fonts) dùng cho Exercise 7.19
    ├── images/             # Hình ảnh dùng chung cho các Exercise
    ├── Exercise01/ ... Exercise19/
    │   ├── index.html      # Mã HTML của Exercise
    │   └── lab07-exerciseNN.css   # CSS tương ứng (Exercise 7.12 và 7.13: desktop + mobile)
```

## Nội dung các nhóm Exercise
| Nhóm | Nội dung |
|---|---|
| 7.1 – 7.4 | Document flow, relative/absolute positioning, z-index |
| 7.5 – 7.9 | Float, clear và positioning |
| 7.10 – 7.13 | Bố cục hai/ba cột, media queries, viewport |
| 7.14 – 7.18 | Transforms, transitions, filters, animations |
| 7.19 | Bootstrap grid system |

Ghi chú: Bộ file được cung cấp không có `lab07-exercise13.html`. Exercise 7.13 yêu cầu tiếp tục từ 7.12, nên `Exercise13/` là bản sao của `Exercise12/` được bổ sung viewport và `<select>` điều hướng cho mobile.

## Đường dẫn GitHub Pages
- Trang chủ CSS-NangCao: https://hautran31241027195.github.io/PTUDTMDT_hau/CSS-NangCao/
- Danh sách Lab 07: https://hautran31241027195.github.io/PTUDTMDT_hau/CSS-NangCao/Lab07/

## Hướng dẫn truy cập các bài thực hành
1. Mở trang chủ CSS-NangCao, chọn nhóm Exercise hoặc **Mở trang danh sách đầy đủ Lab 07**.
2. Mỗi Exercise có nút **Chạy thử** (xem kết quả) và nút xem file CSS tương ứng.
3. Với 7.7, 7.10–7.13 và 7.19: thu nhỏ/phóng to cửa sổ trình duyệt để quan sát bố cục thay đổi.
4. Với 7.12–7.13: khi chiều rộng nhỏ hơn 481px, trang chuyển sang `lab07-exercise12-mobile.css`.
5. Có thể chạy cục bộ bằng cách mở `index.html` hoặc dùng Live Server.
