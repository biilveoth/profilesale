# BrifTech Landing Page

Landing page giới thiệu dịch vụ phát triển website và sản phẩm số của BrifTech.

## Chạy local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Cấu hình Zalo

Tạo file `.env` từ `.env.example` và thay đường dẫn thật:

```env
VITE_ZALO_URL=https://zalo.me/so-dien-thoai
VITE_LEAD_FORM_ENDPOINT=https://formsubmit.co/ajax/email-nhan-lead
```

## Form nhận khách hàng

Form cuối trang đang gửi thông tin qua FormSubmit. Ở lần gửi lead đầu tiên,
FormSubmit sẽ gửi email xác nhận đến hộp thư nhận lead. Cần mở email đó và
xác nhận thì các lead tiếp theo mới được chuyển vào inbox.

## Trước khi phát hành

- Thay portfolio concept bằng dự án thật có quyền công bố.
- Xác nhận điều kiện ưu đãi, hosting và domain.
- Kiểm tra lại Spline scene trên thiết bị mobile mục tiêu.
- Gửi thử form và xác nhận email nhận lead.
