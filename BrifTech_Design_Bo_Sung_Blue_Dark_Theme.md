# BrifTech Landing Page — Design Addendum: Brighter Blue Dark Theme

> Phiên bản bổ sung: 1.1  
> Mục tiêu: Cập nhật định hướng màu sắc/visual cho landing page BrifTech theo cảm hứng từ mẫu design dark tech xanh dương, nhưng làm sáng hơn để phù hợp landing page bán dịch vụ, dễ đọc hơn và thân thiện hơn trên desktop/mobile.  
> Phạm vi áp dụng: Bổ sung và thay thế một phần cho các mục liên quan đến màu sắc, background, glow, card, button, hero, pricing, FAQ, section visual trong file design.md hiện tại.  
> Lưu ý: Không sao chép bố cục, nội dung, nhận diện hoặc asset của mẫu tham chiếu. Chỉ tham chiếu hướng màu, độ tương phản, ánh sáng xanh và cảm giác high-tech.

---

## 1. Tóm tắt thay đổi

Landing page BrifTech vẫn giữ nền tảng **dark-first, công nghệ cao, cao cấp**, nhưng điều chỉnh từ hệ màu tím/purple-heavy sang hướng **black navy + electric blue + soft cyan glow**.

Mục tiêu thay đổi:

- Website nhìn hiện đại, sắc nét và “tech” hơn.
- Màu chủ đạo chuyển sang xanh dương phát sáng, tạo cảm giác AI/SaaS/high-tech.
- Tổng thể vẫn tối, nhưng sáng hơn mẫu tham chiếu để tránh cảm giác quá nặng, quá đen.
- CTA, pricing, FAQ, card và hero có glow xanh rõ hơn nhưng không lạm dụng.
- Nội dung marketing vẫn phải dễ đọc, không bị chìm trong nền tối.
- Không biến website thành giao diện game/cyberpunk quá mạnh.

---

## 2. Visual Direction mới

### 2.1. Cảm giác tổng thể

Từ bản này, BrifTech đi theo visual direction:

**Dark Navy. Electric Blue. Premium Tech. Clean Conversion.**

Giao diện cần có cảm giác:

- Nền tối sâu nhưng không đen tuyệt đối toàn bộ.
- Có ánh sáng xanh lan nhẹ ở hero, pricing, CTA cuối và các điểm nhấn quan trọng.
- Card có viền xanh/trắng mờ, tạo cảm giác module công nghệ.
- Một số section có nền glow xanh radial để tăng chiều sâu.
- Text trắng rõ, body text dùng trắng opacity cao hơn bản cũ.
- Button CTA nổi bật bằng nền trắng hoặc xanh sáng tùy ngữ cảnh.
- Website nhìn sáng hơn mẫu tham chiếu khoảng 15–25%.

### 2.2. Từ khóa thiết kế

- High-tech
- Premium SaaS
- Blue glow
- Dark navy
- Clean glass
- Conversion-focused
- Sharp but readable
- Professional, not gaming

---

## 3. Updated Color Tokens

Thay thế hoặc bổ sung nhóm màu trong file design.md hiện tại bằng bộ token dưới đây.

```css
:root {
  /* Background */
  --color-bg-primary: #070A0F;
  --color-bg-secondary: #0B1018;
  --color-bg-tertiary: #101826;
  --color-bg-elevated: #121B2A;

  /* Surface */
  --color-surface-soft: rgba(255, 255, 255, 0.055);
  --color-surface-medium: rgba(255, 255, 255, 0.075);
  --color-surface-hover: rgba(255, 255, 255, 0.105);
  --color-surface-active: rgba(255, 255, 255, 0.14);

  /* Brand accents */
  --color-primary: #2F8CFF;
  --color-primary-hover: #58A6FF;
  --color-primary-active: #1672E6;

  --color-cyan: #6BD6FF;
  --color-cyan-soft: #9ADFFF;
  --color-blue-deep: #0B4DBA;
  --color-blue-glow: #1E7BFF;

  /* Keep purple as minor legacy accent only */
  --color-purple-accent: #8B7CFF;

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.78);
  --color-text-muted: rgba(255, 255, 255, 0.58);
  --color-text-disabled: rgba(255, 255, 255, 0.36);

  /* Border */
  --color-border-subtle: rgba(255, 255, 255, 0.09);
  --color-border-soft: rgba(255, 255, 255, 0.06);
  --color-border-blue: rgba(88, 166, 255, 0.28);
  --color-border-blue-strong: rgba(88, 166, 255, 0.48);

  /* Semantic */
  --color-success: #48D597;
  --color-warning: #FFB84D;
  --color-error: #FF5C7A;
  --color-info: #58A6FF;

  /* Overlay & focus */
  --color-overlay: rgba(0, 0, 0, 0.68);
  --color-focus-ring: rgba(88, 166, 255, 0.45);
}
```

---

## 4. Color Usage Rules mới

### 4.1. Màu chính

| Nhóm màu | Giá trị | Cách dùng |
|---|---:|---|
| Near Black Navy | `#070A0F` | Nền chính toàn trang |
| Dark Navy | `#0B1018` | Section nền xen kẽ, header khi scroll |
| Elevated Navy | `#121B2A` | Card, panel, pricing card |
| Electric Blue | `#2F8CFF` | CTA chính, active state, icon quan trọng |
| Soft Blue | `#58A6FF` | Hover, link, border nổi bật |
| Cyan Glow | `#6BD6FF` | Glow, highlight nhỏ, light beam |
| Deep Blue | `#0B4DBA` | Gradient, vùng sáng sâu |
| White | `#FFFFFF` | Heading, CTA label, nội dung quan trọng |

### 4.2. Quy tắc dùng màu

- Blue là brand accent chính trong bản này.
- Purple chỉ dùng rất nhẹ nếu cần giữ liên hệ với bản design cũ, không dùng làm màu CTA chính nữa.
- Không dùng magenta làm màu chính trong bản này.
- Không dùng nền đen tuyệt đối `#000000` cho toàn trang; chỉ dùng trong một số vùng visual để tạo chiều sâu.
- Không dùng quá nhiều glow trong cùng một viewport.
- Text quan trọng không được dùng opacity dưới `0.72`.
- Giá, CTA, heading và thông tin chính sách phải đủ sáng và rõ trên nền tối.
- Mỗi section chỉ nên có một điểm phát sáng chính.

---

## 5. Background & Glow System

### 5.1. Page background

Nền toàn trang nên dùng gradient nhẹ thay vì màu phẳng.

```css
body {
  background:
    radial-gradient(circle at 50% 0%, rgba(47, 140, 255, 0.16), transparent 34%),
    radial-gradient(circle at 12% 20%, rgba(107, 214, 255, 0.08), transparent 28%),
    linear-gradient(180deg, #0B1018 0%, #070A0F 36%, #070A0F 100%);
  color: #FFFFFF;
}
```

### 5.2. Section glow

Dùng cho hero, pricing, final CTA hoặc khu vực cần nhấn mạnh.

```css
.section-glow {
  position: relative;
  overflow: hidden;
}

.section-glow::before {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 360px;
  background: radial-gradient(circle at 50% 50%, rgba(47, 140, 255, 0.24), transparent 62%);
  pointer-events: none;
  z-index: 0;
}

.section-glow > * {
  position: relative;
  z-index: 1;
}
```

### 5.3. Card glow

Glow chỉ xuất hiện khi hover hoặc khi card được đánh dấu nổi bật.

```css
.card-glow {
  background: linear-gradient(180deg, rgba(18, 27, 42, 0.92), rgba(8, 12, 19, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.03),
    0 18px 48px rgba(0, 0, 0, 0.26);
}

.card-glow:hover {
  border-color: rgba(88, 166, 255, 0.42);
  box-shadow:
    inset 0 0 0 1px rgba(88, 166, 255, 0.16),
    0 0 36px rgba(47, 140, 255, 0.16),
    0 18px 48px rgba(0, 0, 0, 0.32);
}
```

---

## 6. Updated Buttons

### 6.1. Primary CTA — Blue Glow

Dùng cho các CTA chính như:

- `Nhận tư vấn qua Zalo`
- `Nhận báo giá`
- `Bắt đầu trao đổi`

```css
.button-primary {
  height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  border: 1px solid rgba(154, 223, 255, 0.42);
  background: linear-gradient(180deg, #58A6FF 0%, #2F8CFF 100%);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 10px 28px rgba(47, 140, 255, 0.32),
    0 0 42px rgba(47, 140, 255, 0.22);
  transition: transform 180ms ease-out, box-shadow 180ms ease-out, background 180ms ease-out;
}

.button-primary:hover {
  background: linear-gradient(180deg, #6FB4FF 0%, #3A95FF 100%);
  transform: translateY(-1px);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12) inset,
    0 12px 34px rgba(47, 140, 255, 0.42),
    0 0 56px rgba(47, 140, 255, 0.32);
}

.button-primary:active {
  transform: translateY(0);
  background: #1672E6;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(88, 166, 255, 0.45),
    0 10px 28px rgba(47, 140, 255, 0.32);
}
```

### 6.2. Alternative Primary CTA — White Pill

Có thể dùng trong hero hoặc final CTA nếu nền phía sau có glow xanh mạnh.

```css
.button-primary-white {
  height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: #FFFFFF;
  color: #07101D;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  box-shadow:
    0 12px 36px rgba(88, 166, 255, 0.28),
    0 0 52px rgba(47, 140, 255, 0.24);
}

.button-primary-white:hover {
  background: #EAF5FF;
  transform: translateY(-1px);
}
```

### 6.3. Secondary Button

```css
.button-secondary {
  height: 48px;
  padding: 0 22px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.055);
  color: rgba(255, 255, 255, 0.92);
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(12px);
}

.button-secondary:hover {
  color: #FFFFFF;
  border-color: rgba(88, 166, 255, 0.38);
  background: rgba(88, 166, 255, 0.1);
}
```

---

## 7. Header Update

Header giữ layout cũ nhưng đổi màu theo hướng xanh dương.

### 7.1. Desktop header

```css
.site-header {
  height: 72px;
  background: rgba(7, 10, 15, 0.58);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.site-header.is-scrolled {
  background: rgba(7, 10, 15, 0.88);
  border-bottom-color: rgba(88, 166, 255, 0.14);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.22);
}

.site-header__logo {
  color: #FFFFFF;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.site-header__nav a {
  color: rgba(255, 255, 255, 0.68);
}

.site-header__nav a:hover,
.site-header__nav a.is-active {
  color: #58A6FF;
}
```

### 7.2. Mobile header

- Nền mobile menu dùng `#0B1018`.
- Border item dùng `rgba(255,255,255,0.08)`.
- CTA Zalo trong menu dùng button primary blue.
- Sticky bottom CTA có thể dùng `button-primary-white` nếu nền dưới có glow xanh.

---

## 8. Hero Section Update

Hero là khu vực quan trọng nhất để áp dụng màu mới.

### 8.1. Hero background

```css
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  overflow: hidden;
  background:
    radial-gradient(circle at 72% 34%, rgba(47, 140, 255, 0.26), transparent 30%),
    radial-gradient(circle at 50% 100%, rgba(47, 140, 255, 0.18), transparent 40%),
    linear-gradient(180deg, #0B1018 0%, #070A0F 100%);
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at 50% 35%, black, transparent 70%);
  pointer-events: none;
}
```

### 8.2. Hero content

Giữ nội dung chính trong file design hiện tại, nhưng visual tone đổi sang xanh.

Badge hero:

```css
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 9999px;
  border: 1px solid rgba(88, 166, 255, 0.32);
  background: rgba(47, 140, 255, 0.11);
  color: #9ADFFF;
  font-size: 13px;
  font-weight: 600;
}
```

Headline:

```css
.hero-title {
  color: #FFFFFF;
  text-shadow: 0 0 34px rgba(88, 166, 255, 0.16);
}
```

Một số từ khóa trong headline có thể highlight bằng gradient xanh:

```css
.text-gradient-blue {
  background: linear-gradient(90deg, #FFFFFF 0%, #9ADFFF 42%, #58A6FF 100%);
  -webkit-background-clip: text;
  color: transparent;
}
```

### 8.3. Hero visual

Nếu dùng Spline:

- Giữ Spline là visual chính.
- Nền Spline nên phối xanh/đen, hạn chế tím/magenta.
- Nếu scene hiện tại quá tím, có thể phủ overlay xanh nhẹ.
- Không để glow quá mạnh đằng sau text.
- Mobile ưu tiên fallback image sáng hơn và nhẹ hơn.

---

## 9. Service Card Update

Service card nên giống module công nghệ: tối, có viền mờ, icon xanh, hover sáng.

```css
.service-card {
  padding: 24px;
  border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(18, 27, 42, 0.9), rgba(8, 12, 19, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.03),
    0 18px 48px rgba(0, 0, 0, 0.22);
}

.service-card:hover {
  transform: translateY(-2px);
  border-color: rgba(88, 166, 255, 0.36);
  box-shadow:
    0 0 40px rgba(47, 140, 255, 0.14),
    0 20px 52px rgba(0, 0, 0, 0.3);
}

.service-card__icon {
  color: #58A6FF;
  background: rgba(47, 140, 255, 0.12);
  border: 1px solid rgba(88, 166, 255, 0.24);
}
```

Website Doanh Nghiệp là dịch vụ chủ lực nên có thể dùng card nổi bật hơn:

```css
.service-card--featured {
  border-color: rgba(88, 166, 255, 0.52);
  background:
    radial-gradient(circle at 50% 0%, rgba(47, 140, 255, 0.22), transparent 45%),
    linear-gradient(180deg, rgba(18, 27, 42, 0.96), rgba(8, 12, 19, 0.98));
}
```

---

## 10. Pricing Section Update

Pricing nên là nơi thể hiện rõ cảm giác giống SaaS/high-tech nhất, nhưng vẫn sáng hơn mẫu tham chiếu.

### 10.1. Pricing section background

```css
.pricing-section {
  background:
    radial-gradient(circle at 50% 48%, rgba(47, 140, 255, 0.24), transparent 34%),
    linear-gradient(180deg, #070A0F 0%, #0B1018 52%, #070A0F 100%);
}
```

### 10.2. Pricing card

```css
.pricing-card {
  border-radius: 18px;
  padding: 24px;
  background:
    linear-gradient(180deg, rgba(18, 27, 42, 0.94), rgba(8, 12, 19, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.035),
    0 18px 48px rgba(0, 0, 0, 0.28);
}

.pricing-card--recommended {
  border-color: rgba(88, 166, 255, 0.58);
  background:
    radial-gradient(circle at 50% 0%, rgba(47, 140, 255, 0.28), transparent 42%),
    linear-gradient(180deg, rgba(19, 35, 57, 0.98), rgba(8, 12, 19, 0.98));
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.18) inset,
    0 0 56px rgba(47, 140, 255, 0.24),
    0 24px 64px rgba(0, 0, 0, 0.36);
}

.pricing-card__price {
  color: #FFFFFF;
  font-weight: 700;
}

.pricing-card__old-price {
  color: rgba(255, 255, 255, 0.42);
  text-decoration: line-through;
}

.pricing-card__note {
  color: rgba(255, 255, 255, 0.62);
}
```

### 10.3. Badge trong pricing

```css
.badge-recommended {
  background: linear-gradient(180deg, #58A6FF, #2F8CFF);
  color: #FFFFFF;
  border: 1px solid rgba(154, 223, 255, 0.48);
}

.badge-promotion {
  background: rgba(47, 140, 255, 0.12);
  color: #9ADFFF;
  border: 1px solid rgba(88, 166, 255, 0.32);
}
```

---

## 11. FAQ Accordion Update

FAQ trong mẫu tham chiếu có cảm giác tối, gọn, viền mảnh. BrifTech nên làm tương tự nhưng sáng hơn một chút.

```css
.faq-item {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.035);
  overflow: hidden;
}

.faq-item + .faq-item {
  margin-top: 12px;
}

.faq-item__button {
  min-height: 56px;
  padding: 0 18px;
  color: #FFFFFF;
  font-weight: 600;
}

.faq-item__button:hover {
  background: rgba(88, 166, 255, 0.075);
}

.faq-item__icon {
  color: #58A6FF;
}

.faq-item__answer {
  padding: 0 18px 18px;
  color: rgba(255, 255, 255, 0.74);
}
```

---

## 12. Final CTA Update

Final CTA nên có block glow xanh ở giữa, tạo cảm giác “kết lại bằng ánh sáng”.

```css
.final-cta {
  position: relative;
  border-radius: 24px;
  padding: 64px 32px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(47, 140, 255, 0.42), transparent 44%),
    linear-gradient(180deg, rgba(18, 27, 42, 0.96), rgba(8, 12, 19, 0.98));
  border: 1px solid rgba(88, 166, 255, 0.24);
  box-shadow:
    0 0 72px rgba(47, 140, 255, 0.22),
    inset 0 0 0 1px rgba(255, 255, 255, 0.045);
}

.final-cta__title {
  color: #FFFFFF;
  text-shadow: 0 0 36px rgba(88, 166, 255, 0.24);
}

.final-cta__description {
  color: rgba(255, 255, 255, 0.76);
}
```

---

## 13. Portfolio & Visual Mockup Update

Portfolio nên dùng visual mockup tối, có viền xanh nhẹ, tránh ảnh stock sáng lệch tone.

```css
.portfolio-card {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
}

.portfolio-card__image {
  background:
    radial-gradient(circle at 50% 50%, rgba(47, 140, 255, 0.2), transparent 52%),
    linear-gradient(180deg, #101826, #070A0F);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.portfolio-card:hover {
  border-color: rgba(88, 166, 255, 0.34);
}
```

Nếu chưa có portfolio thật:

- Môi trường demo có thể dùng mockup dark blue.
- Production nên ẩn section hoặc thay bằng case study thật.
- Không ghi số liệu giả như dữ liệu thật.

---

## 14. Typography Adjustment

Typography trong bản cũ vẫn dùng được. Chỉ điều chỉnh cảm giác thị giác:

- Heading có thể sáng hơn, ít opacity hơn.
- Body text nên tăng từ `0.72` lên `0.78` để dễ đọc trên nền xanh đen.
- Caption/metadata không thấp hơn `0.58` nếu nằm trên nền rất tối.
- Heading có thể dùng gradient xanh nhẹ ở 1–2 từ khóa, không dùng toàn bộ headline.

Ví dụ:

```css
.section-title {
  color: #FFFFFF;
  letter-spacing: -0.03em;
}

.section-description {
  color: rgba(255, 255, 255, 0.78);
}

.text-muted {
  color: rgba(255, 255, 255, 0.58);
}
```

---

## 15. Visual Decoration Rules

Có thể bổ sung các chi tiết sau để website gần hơn với mẫu tham chiếu:

### 15.1. Grid line nhẹ

Dùng ở hero hoặc process section.

```css
.tech-grid {
  background-image:
    linear-gradient(rgba(88, 166, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 166, 255, 0.045) 1px, transparent 1px);
  background-size: 56px 56px;
}
```

### 15.2. Blue corner marker

Có thể dùng cho card quan trọng, nhưng dùng rất tiết chế.

```css
.corner-marker {
  position: relative;
}

.corner-marker::before,
.corner-marker::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: rgba(88, 166, 255, 0.58);
  pointer-events: none;
}

.corner-marker::before {
  top: -1px;
  left: -1px;
  border-top: 1px solid;
  border-left: 1px solid;
}

.corner-marker::after {
  right: -1px;
  bottom: -1px;
  border-right: 1px solid;
  border-bottom: 1px solid;
}
```

### 15.3. Light beam

Dùng ở hero/final CTA, không dùng ở mọi section.

```css
.blue-beam {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(47, 140, 255, 0.34), transparent 65%);
  filter: blur(18px);
  pointer-events: none;
}
```

---

## 16. Responsive Notes

### 16.1. Mobile

- Giảm glow còn khoảng 50–60% so với desktop.
- Không dùng quá nhiều radial gradient trong một màn hình.
- Hero 3D hoặc visual phải nằm dưới content, không được đẩy CTA xuống quá sâu.
- Sticky CTA bottom nếu dùng phải có nền `rgba(7,10,15,0.88)` và blur.
- Pricing card xếp 1 cột, recommended card hiển thị nổi bật nhưng không quá cao.
- Text body tối thiểu 15px.

### 16.2. Tablet

- Glow có thể giữ 70–80% desktop.
- Service/pricing grid dùng 2 cột.
- Hero visual giảm kích thước để headline và CTA vẫn là trọng tâm.

### 16.3. Desktop

- Có thể dùng glow rõ hơn ở hero, pricing và final CTA.
- Process section có thể thêm progress line màu xanh.
- Portfolio card có hover image shift nhẹ.

---

## 17. Motion Update

Motion nên sắc nét, nhẹ, giống SaaS/AI product.

```css
:root {
  --motion-fast: 160ms;
  --motion-base: 220ms;
  --motion-slow: 420ms;
  --motion-ease: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Rules:

- Button/card hover: `160ms–220ms`.
- Section reveal: opacity + translateY 16px.
- Glow không được nhấp nháy liên tục.
- Không dùng animation scanline liên tục nếu làm người dùng mỏi mắt.
- Tôn trọng `prefers-reduced-motion`.

---

## 18. Accessibility & Contrast Update

Vì nền mới tối hơn và có nhiều vùng glow, cần kiểm tra kỹ:

- Heading trắng trên nền tối phải rõ, không bị hòa vào glow.
- Body text dùng `rgba(255,255,255,0.78)` thay vì quá mờ.
- CTA xanh phải có text trắng đủ tương phản.
- Link xanh trên nền tối dùng `#58A6FF` hoặc sáng hơn.
- Focus ring chuyển sang xanh `rgba(88,166,255,0.45)`.
- Không chỉ dùng glow để biểu thị active/focus; phải có border hoặc outline rõ.

---

## 19. Implementation Changes for Dev

Dev cần update theo thứ tự:

1. Thêm file token màu mới hoặc cập nhật CSS variables hiện tại.
2. Đổi primary accent từ purple sang blue.
3. Cập nhật background toàn trang theo dark navy gradient.
4. Cập nhật button primary sang blue glow hoặc white pill theo ngữ cảnh.
5. Cập nhật header scroll background và nav hover màu xanh.
6. Cập nhật hero background, badge, title highlight và Spline overlay nếu cần.
7. Cập nhật service card, pricing card, FAQ item, final CTA theo style mới.
8. Giảm/loại bỏ magenta trong UI.
9. Giữ purple như accent phụ rất nhẹ nếu cần, không dùng làm màu chính.
10. Test lại mobile vì glow/blur có thể ảnh hưởng performance.

---

## 20. Do / Don't bổ sung

### Do

- Do dùng blue `#2F8CFF` làm CTA và brand accent chính.
- Do dùng soft blue `#58A6FF` cho hover, link, border nổi bật.
- Do dùng cyan `#6BD6FF` cho glow/halo nhẹ.
- Do làm nền sáng hơn mẫu tham chiếu một chút để dễ đọc.
- Do giữ card gọn, viền mảnh, ánh sáng vừa đủ.
- Do ưu tiên readability và conversion hơn trang trí.
- Do kiểm tra hiệu năng mobile khi dùng nhiều blur/radial gradient.

### Don't

- Don't sao chép bố cục hoặc asset từ mẫu tham chiếu.
- Don't dùng nền đen đặc toàn trang làm website quá tối.
- Don't dùng glow xanh ở mọi card cùng lúc.
- Don't dùng magenta/purple quá nhiều trong bản màu mới.
- Don't làm UI giống game/cyberpunk.
- Don't để text nằm trực tiếp trên vùng glow mạnh.
- Don't giảm opacity body text quá thấp.
- Don't dùng hiệu ứng animation lặp gây rối.

---

## 21. Acceptance Criteria bổ sung

Bản cập nhật màu được coi là đạt khi:

1. Website chuyển rõ sang tone black navy + electric blue.
2. Tổng thể sáng hơn mẫu tham chiếu, không bị nặng/đen quá.
3. CTA chính nổi bật và dễ nhìn trên mọi section.
4. Hero có cảm giác high-tech nhưng headline/CTA vẫn đọc rõ.
5. Card, pricing, FAQ có viền/glow xanh nhất quán.
6. Không còn cảm giác purple/magenta là màu chủ đạo.
7. Mobile không bị quá nhiều glow hoặc tụt hiệu năng.
8. Text body, giá, chính sách và FAQ đạt độ tương phản tốt.
9. Website vẫn giữ định vị BrifTech: chuyên nghiệp, đáng tin, công nghệ cao.
10. Không sao chép trực tiếp layout/brand/asset của mẫu tham chiếu.

---

## 22. Gợi ý cập nhật nhanh trong file design.md hiện tại

Các mục nên chỉnh trong file design.md gốc:

- Mục `4. Visual Theme & Atmosphere`: đổi purple-first sang blue-first.
- Mục `5. Design Tokens`: thay color tokens bằng bộ token mới.
- Mục `6. Color Palette & Usage Rules`: cập nhật bảng màu và rule dùng màu.
- Mục `10. Component Library`: cập nhật button, card, pricing, FAQ, modal.
- Mục `11. Page Structure`: giữ nguyên cấu trúc section, chỉ đổi visual treatment.
- Mục `12. Hero 3D Spline`: bổ sung overlay xanh/fallback image tone xanh.
- Mục `13. Motion`: giữ motion nhẹ, thêm blue glow hover.
- Mục `20. Do's and Don'ts`: bổ sung không dùng magenta/purple quá nhiều.
- Mục `21. Acceptance Criteria`: thêm tiêu chí chuyển sang blue dark theme.
