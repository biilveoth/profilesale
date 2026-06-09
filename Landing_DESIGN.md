# BrifTech Landing Page — Design System & Implementation Guide

> Phiên bản: 1.0  
> Mục tiêu: Làm chuẩn thiết kế và chuẩn triển khai UI cho landing page BrifTech trước khi code web.  
> Cơ sở xây dựng: Kế thừa visual base dark-first, purple/blue/magenta accent, glass effect, spacing, component style và responsive rule từ file design cũ; điều chỉnh theo brief thương hiệu BrifTech và mục tiêu chuyển đổi qua Zalo.

---

## 1. Product Context

### 1.1. Thương hiệu

- **Tên thương hiệu:** BrifTech
- **Mô hình:** Công ty cung cấp dịch vụ phát triển website và sản phẩm số
- **Logo:** Chưa có logo chính thức, tạm thời sử dụng wordmark `BrifTech`
- **Thị trường:** Việt Nam, phục vụ khách hàng trên toàn quốc
- **Ngôn ngữ:** Giao diện có bộ chuyển `VI / EN`; phiên bản đầu tiên ưu tiên hoàn thiện tiếng Việt
- **Chuyển đổi chính:** Khách hàng nhắn tin qua **Zalo** để được tư vấn và nhận báo giá

### 1.2. Mục tiêu landing page

1. Giới thiệu năng lực phát triển website, landing page, website bán hàng và hệ thống quản trị của BrifTech.
2. Định vị BrifTech là đối tác phát triển sản phẩm số toàn diện, không chỉ là đơn vị làm website theo mẫu.
3. Tạo cảm giác công nghệ cao, cao cấp, chuyên nghiệp và đáng tin cậy.
4. Giúp khách hàng nhanh chóng hiểu dịch vụ, quy trình, chi phí khởi điểm và chính sách hỗ trợ.
5. Thúc đẩy khách hàng nhắn Zalo để được tư vấn và nhận báo giá.

### 1.3. Đối tượng khách hàng

BrifTech phục vụ nhiều nhóm khách hàng:

- Cá nhân và thương hiệu cá nhân
- Doanh nghiệp nhỏ và vừa
- Startup
- Doanh nghiệp quy mô lớn
- Khách hàng cần website hoặc hệ thống quản trị theo nghiệp vụ riêng

Không giới hạn ngành nghề. Đội ngũ BA có kinh nghiệm ở các domain:

- Tài chính
- Kế toán
- E-commerce
- Sức khỏe và wellness
- Bán lẻ
- Nhân sự
- Y tế

---

## 2. Brand Positioning

### 2.1. Định vị cốt lõi

**BrifTech là đối tác phát triển sản phẩm số toàn diện, từ phân tích nghiệp vụ, thiết kế trải nghiệm, xây dựng hệ thống, bàn giao đến đồng hành sau triển khai.**

Website doanh nghiệp là dịch vụ mũi nhọn, nhưng giao diện cần thể hiện được năng lực triển khai nhiều cấp độ sản phẩm: landing page, website bán hàng, website doanh nghiệp và hệ thống quản trị lớn như CRM, HRM, ERP, web app custom.

### 2.2. Khác biệt cần truyền tải

- Chi phí hợp lý, minh bạch
- Tốc độ triển khai nhanh
- UI/UX thiết kế riêng theo từng thương hiệu
- Có BA phân tích bài toán và nghiệp vụ trước khi phát triển
- Khách hàng được trao đổi trực tiếp trong suốt dự án
- Có khả năng phát triển từ website đơn giản đến CRM, HRM, ERP tùy chỉnh
- Có bảo hành, bảo trì và đồng hành sau bàn giao

### 2.3. Tính cách thương hiệu

| Thuộc tính | Cách thể hiện trên UI |
|---|---|
| Công nghệ cao | Dark UI, 3D hero, gradient accent, motion tinh tế |
| Sắc nét và tiên phong | Layout rõ, ít chi tiết thừa, typography mạnh |
| Cao cấp, tối giản | Không dùng quá nhiều card nổi, không trang trí rối |
| Đáng tin cậy | Nội dung rõ, giá minh bạch, quy trình cụ thể, chính sách rõ ràng |
| Nhanh nhưng không vội vàng | CTA dễ thấy, flow nội dung gọn, nhưng không dùng countdown/ép mua |
| Sáng tạo nhưng hiệu quả | Visual hiện đại, nhưng luôn phục vụ chuyển đổi kinh doanh |

---

## 3. Communication Strategy

### 3.1. Headline chính

**Website không chỉ đẹp. Website phải tạo ra tăng trưởng.**

### 3.2. Supporting message

**Thiết kế riêng. Triển khai nhanh. Đồng hành dài hạn.**

### 3.3. Mô tả ngắn

BrifTech phân tích bài toán kinh doanh, thiết kế trải nghiệm và phát triển website, hệ thống quản trị phù hợp với cách doanh nghiệp thực sự vận hành.

### 3.4. CTA chính

- `Nhận tư vấn qua Zalo`
- `Nhận báo giá`

Tất cả CTA chính đều dẫn đến cùng một đường link Zalo. Trong giai đoạn prototype sử dụng placeholder, trước production phải thay bằng link Zalo chính thức.

### 3.5. CTA phụ

- `Xem dịch vụ`
- `Xem quy trình`
- `Xem bảng giá`
- `Xem dự án tiêu biểu`

CTA phụ ưu tiên scroll đến section tương ứng, không cạnh tranh trực tiếp với CTA Zalo.

---

## 4. Visual Theme & Atmosphere

BrifTech sử dụng visual base kế thừa tinh thần **dark-first, hiện đại, giàu chiều sâu, có điểm nhấn 3D và glass effect nhẹ**. Tuy nhiên, khác với nền tảng cộng đồng 3D, BrifTech là landing page bán dịch vụ công nghệ, nên phong cách cần được điều chỉnh theo hướng **chuyên nghiệp, sắc nét, đáng tin và chuyển đổi tốt hơn**.

### 4.1. Cảm giác tổng thể

- Nền tối sâu tạo cảm giác công nghệ và cao cấp.
- Purple là màu thương hiệu chính, dùng cho CTA, điểm nhấn và trạng thái active.
- Blue dùng cho liên kết, thông tin phụ và trạng thái hỗ trợ.
- Magenta dùng tiết chế để tạo cảm giác sáng tạo, không dùng quá nhiều.
- 3D Spline là visual hero chính, không phải decoration phụ.
- Card và section dùng inset border mờ để tạo chiều sâu.
- Whitespace rộng, không nhồi nội dung vào các khối nhỏ.
- Giao diện không được giống template agency phổ thông.

### 4.2. Key characteristics

- Dark-first foundation: `#121316`, `#191A1D`
- Vibrant accent palette: purple `#A77EFF`, blue `#2589FF`, magenta `#FF7DBB`
- Glass-morphism nhẹ: overlay trắng opacity thấp, inset border tinh tế
- Content-first: nội dung dịch vụ, quy trình, giá và cam kết phải rõ hơn decoration
- Conversion-oriented: CTA Zalo luôn dễ thấy nhưng không gây áp lực
- High contrast: nội dung marketing phải dễ đọc trên desktop và mobile

---

## 5. Design Tokens

### 5.1. Color tokens

```css
:root {
  --color-bg-primary: #121316;
  --color-bg-secondary: #191A1D;
  --color-bg-tertiary: #232323;
  --color-surface-soft: rgba(255, 255, 255, 0.05);
  --color-surface-hover: rgba(255, 255, 255, 0.08);
  --color-surface-active: rgba(255, 255, 255, 0.12);

  --color-primary: #A77EFF;
  --color-primary-hover: #915EFF;
  --color-primary-active: #7A4FD4;

  --color-blue: #2589FF;
  --color-blue-hover: #2B99FF;

  --color-magenta: #FF7DBB;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.72);
  --color-text-muted: rgba(255, 255, 255, 0.52);
  --color-text-disabled: rgba(255, 255, 255, 0.36);

  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-soft: rgba(255, 255, 255, 0.05);
  --color-border-strong: rgba(255, 255, 255, 0.14);

  --color-success: #539D52;
  --color-warning: #FFB221;
  --color-error: #FF5C7A;
  --color-info: #2589FF;

  --color-overlay: rgba(0, 0, 0, 0.6);
  --color-focus-ring: rgba(167, 126, 255, 0.4);
}
```

### 5.2. Spacing tokens

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-18: 72px;
  --space-24: 96px;
}
```

### 5.3. Radius tokens

```css
:root {
  --radius-none: 0px;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
  --radius-circle: 50%;
}
```

### 5.4. Shadow & elevation tokens

```css
:root {
  --shadow-inset-subtle: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset;
  --shadow-inset-soft: rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  --shadow-card-hover: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset,
                       rgba(0, 0, 0, 0.22) 0px 12px 32px 0px;
  --shadow-floating: rgba(0, 0, 0, 0.24) 0px 16px 48px 0px;
  --shadow-focus: rgba(167, 126, 255, 0.35) 0px 0px 0px 2px;
}
```

### 5.5. Z-index tokens

```css
:root {
  --z-base: 1;
  --z-sticky: 50;
  --z-dropdown: 100;
  --z-modal: 500;
  --z-toast: 800;
  --z-tooltip: 900;
}
```

---

## 6. Color Palette & Usage Rules

### 6.1. Primary colors

| Color | Hex | Vai trò |
|---|---:|---|
| Primary Purple | `#A77EFF` | CTA chính, active state, brand accent |
| Primary Blue | `#2589FF` | Link, secondary action, info state |
| Primary Magenta | `#FF7DBB` | Creative highlight, icon accent, gradient detail |

### 6.2. Background colors

| Color | Hex/RGBA | Vai trò |
|---|---:|---|
| Dark Background | `#121316` | Nền chính toàn trang |
| Alternate Dark | `#191A1D` | Nền section xen kẽ, footer, sticky header |
| Deep Charcoal | `#232323` | Surface phụ, panel nhỏ |
| Glass Surface | `rgba(255,255,255,0.05)` | Card, input, icon button, chip |

### 6.3. Text colors

| Token | Value | Dùng cho |
|---|---:|---|
| Text Primary | `#FFFFFF` | Headline, title, CTA label |
| Text Secondary | `rgba(255,255,255,0.72)` | Body text chính |
| Text Muted | `rgba(255,255,255,0.52)` | Metadata, mô tả phụ, caption |
| Text Disabled | `rgba(255,255,255,0.36)` | Disabled state |

### 6.4. Semantic colors

| Token | Value | Dùng cho |
|---|---:|---|
| Success | `#539D52` | Thành công, xác nhận |
| Warning | `#FFB221` | Cảnh báo, lưu ý giá/phạm vi |
| Error | `#FF5C7A` | Lỗi form, trạng thái thất bại |
| Info | `#2589FF` | Thông tin phụ, link |

### 6.5. Color usage rules

- Không dùng nền trắng cho primary section.
- Không dùng quá 2 màu accent trong cùng một component.
- Purple là màu chuyển đổi chính, không thay bằng blue/magenta cho CTA chính.
- Magenta chỉ dùng làm điểm nhấn nhỏ, không dùng cho toàn bộ CTA hoặc section lớn.
- Không dùng màu xám tối cho text trên nền tối; ưu tiên trắng với opacity.
- Trạng thái lỗi/thành công không chỉ dựa vào màu, phải có text hoặc icon đi kèm.

---

## 7. Typography

### 7.1. Font family

Ưu tiên font system để tốc độ tải nhanh và hỗ trợ tiếng Việt tốt.

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
```

Không dùng cỡ chữ 11px của file tham chiếu cho nội dung marketing dài. Landing page cần dễ đọc hơn, nhất là trên mobile.

### 7.2. Type scale

| Role | Size Desktop | Size Mobile | Weight | Line height | Usage |
|---|---:|---:|---:|---:|---|
| Hero Display | 64px | 40px | 600 | 1.05 | Headline chính hero |
| H1 | 48px | 34px | 600 | 1.12 | Section quan trọng |
| H2 | 36px | 28px | 600 | 1.2 | Section title |
| H3 | 24px | 22px | 500/600 | 1.3 | Card title, pricing title |
| H4 | 18px | 18px | 500/600 | 1.4 | Subsection title |
| Body Large | 18px | 16px | 400 | 1.6 | Hero description, section intro |
| Body | 16px | 15px | 400 | 1.6 | Paragraph, FAQ answer |
| Body Small | 14px | 14px | 400 | 1.5 | Metadata, card desc |
| Caption | 12px | 12px | 400/500 | 1.4 | Badge, label, note |
| Button | 14px | 14px | 500/600 | 1 | CTA label |

### 7.3. Typography rules

- Heading ngắn, mạnh, dễ hiểu trong 5 giây đầu.
- Body text không nhỏ hơn 14px trên mobile.
- Không dùng font weight dưới 400 trên nền tối.
- Chỉ dùng weight 400, 500, 600 để giữ cảm giác tinh gọn.
- Letter spacing mặc định bằng `0`.
- Heading có thể dùng `letter-spacing: -0.02em` nếu cần cảm giác hiện đại.
- Không căn giữa toàn bộ nội dung dài; chỉ căn giữa heading/intro của section nếu layout phù hợp.
- Mỗi section không nên có quá 3 cấp typography hierarchy.

---

## 8. Layout System

### 8.1. Container

| Context | Value |
|---|---:|
| Max page width | `1440px` |
| Main content width | `1280px` |
| Desktop side padding | `32px` |
| Tablet side padding | `24px` |
| Mobile side padding | `16px` |

```css
.container {
  width: min(100% - 64px, 1280px);
  margin: 0 auto;
}

@media (max-width: 767px) {
  .container {
    width: min(100% - 32px, 1280px);
  }
}
```

### 8.2. Section spacing

| Section type | Desktop | Mobile |
|---|---:|---:|
| Hero | `96px–128px` vertical | `64px–80px` vertical |
| Standard section | `80px–96px` vertical | `56px–64px` vertical |
| Compact section | `56px–64px` vertical | `40px–48px` vertical |
| Footer | `48px–64px` vertical | `40px–48px` vertical |

### 8.3. Grid system

- Desktop service grid: 3–4 columns tùy nội dung.
- Portfolio grid: 3 columns desktop, 2 columns tablet, 1 column mobile.
- Pricing grid: 4 columns desktop, 2 columns tablet, 1 column mobile hoặc carousel nếu không đủ rộng.
- Gap tiêu chuẩn: `24px` cho marketing cards, `16px` cho compact grid.

### 8.4. Whitespace philosophy

Whitespace dùng để tạo cảm giác cao cấp và tập trung. Không biến mọi section thành floating card. Chỉ card hóa các nhóm thông tin cần so sánh như dịch vụ, giá, portfolio, FAQ. Các section kể chuyện như hero, process, BA capability nên có không gian thoáng và nhịp đọc rõ.

---

## 9. Responsive Behavior

### 9.1. Breakpoints

| Breakpoint | Width | Key changes |
|---|---:|---|
| Mobile | `320px–479px` | 1 cột, menu thu gọn, CTA rõ, giảm 3D |
| Tablet | `480px–767px` | 2 cột cho service/portfolio, padding 24px |
| Small Desktop | `768px–1023px` | 2–3 cột, hero chuyển cân bằng text/visual |
| Large Desktop | `1024px–1439px` | Full layout, pricing 4 cột |
| XL Desktop | `1440px+` | Container centered, giữ max-width |

### 9.2. Mobile rules

- Hero ưu tiên headline, mô tả và CTA; không để 3D chiếm hết màn hình.
- CTA Zalo có thể sticky ở cạnh dưới nếu không gây che nội dung.
- Navigation chuyển sang hamburger menu.
- Pricing card xếp 1 cột, gói `Website Doanh Nghiệp` hiển thị trước hoặc nổi bật rõ.
- FAQ dùng accordion để tiết kiệm chiều cao.
- Touch target tối thiểu `44px × 44px`.
- Không dùng animation nặng hoặc video/3D nếu làm tụt performance.

### 9.3. Tablet rules

- Service, portfolio và pricing có thể hiển thị 2 cột.
- Header vẫn có thể giữ nav rút gọn nếu đủ rộng.
- Hero 3D giảm kích thước, không đè lên CTA.

### 9.4. Desktop rules

- Hero rộng, 3D là tín hiệu thị giác đầu tiên.
- Nội dung theo container tối đa `1280px–1440px`.
- Pricing có thể so sánh trực tiếp 4 cột.
- Header có thể sticky và đổi surface nhẹ khi scroll.

---

## 10. Component Library

### 10.1. Buttons

#### Primary CTA Button

Dùng cho: `Nhận tư vấn qua Zalo`, `Nhận báo giá`.

```css
.button-primary {
  height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  border: none;
  background: #A77EFF;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition: background 180ms ease-out, transform 180ms ease-out, box-shadow 180ms ease-out;
}

.button-primary:hover {
  background: #915EFF;
  transform: translateY(-1px);
}

.button-primary:active {
  background: #7A4FD4;
  transform: translateY(0);
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: rgba(167, 126, 255, 0.4) 0px 0px 0px 3px;
}

.button-primary:disabled {
  background: rgba(167, 126, 255, 0.5);
  color: rgba(255, 255, 255, 0.6);
  cursor: not-allowed;
  transform: none;
}
```

#### Secondary Button

Dùng cho: `Xem dịch vụ`, `Xem quy trình`, `Xem dự án`.

- Background: transparent hoặc `rgba(255,255,255,0.05)` tùy ngữ cảnh
- Text: `#FFFFFF`
- Border: inset `rgba(255,255,255,0.08)`
- Hover: surface sáng hơn, text chuyển `#A77EFF`
- Height: `44px–48px`
- Radius: pill

#### Ghost Icon Button

Dùng cho: language switch, menu icon, social icon, close modal.

- Width/height: `40px` desktop, `44px` mobile
- Radius: `50%`
- Background: `rgba(255,255,255,0.05)`
- Inset border: `rgba(255,255,255,0.05)`
- Hover: background `rgba(255,255,255,0.1)`

### 10.2. Header / Navigation

#### Desktop Header

- Height: `72px`
- Position: sticky top `0`
- Background default: transparent/dark blend trên hero
- Background after scroll: `rgba(18,19,22,0.86)` + backdrop blur
- Border bottom after scroll: `rgba(255,255,255,0.05)`
- Layout: logo left, nav center/right, language switch + CTA right

Navigation items:

- Dịch vụ
- Dự án
- Quy trình
- Bảng giá
- FAQ

Rules:

- Active/hover text chuyển `#FFFFFF` hoặc `#A77EFF`.
- Header không được quá cao gây chiếm hero.
- CTA Zalo trong header luôn hiển thị trên desktop.
- Wordmark `BrifTech` dùng text cho đến khi có logo chính thức.

#### Mobile Header

- Height: `64px`
- Logo left, menu button right
- CTA Zalo có thể nằm trong menu hoặc sticky bottom
- Menu mở dạng full-screen sheet hoặc dropdown panel nền tối
- Menu item tối thiểu 44px height

### 10.3. Language Switch `VI / EN`

- Component nhỏ dạng segmented control hoặc text toggle.
- Default: `VI` active.
- `EN` có thể disabled hoặc vẫn hiển thị nhưng chưa cần nội dung hoàn chỉnh ở bản đầu.
- Active state: text `#FFFFFF`, background `rgba(255,255,255,0.08)` hoặc border purple.

### 10.4. Cards

#### Service Card

Dùng cho các dịch vụ: Website doanh nghiệp, Landing page, Website bán hàng, Hệ thống quản trị, Bảo trì/SEO.

- Background: `rgba(255,255,255,0.05)`
- Border: inset `rgba(255,255,255,0.08)`
- Radius: `8px–12px`
- Padding: `24px`
- Icon: 20–24px, cùng một bộ icon
- Title: 20–24px, weight 600
- Description: 14–16px, text secondary
- Hover: border sáng hơn, transform nhẹ `translateY(-2px)`

Không lồng card trong card. Nếu cần list feature, dùng bullet/check icon trực tiếp trong card.

#### Portfolio Card

- Visual là nội dung chính, không dùng ảnh trang trí vô nghĩa.
- Image ratio: `16:10` hoặc `4:3`, thống nhất trong toàn section.
- Radius visual: `16px` nếu muốn nổi bật hơn service card.
- Metadata gồm: tên dự án, domain, phạm vi, kết quả.
- Nếu chưa có dữ liệu thật, dùng placeholder rõ ràng và đánh dấu không dùng production.

#### Pricing Card

- Background: `rgba(255,255,255,0.05)`
- Recommended card: thêm border purple hoặc glow nhẹ, không làm lòe loẹt.
- Giá gốc gạch ngang.
- Giá ưu đãi nổi bật.
- Có nhãn `Ưu đãi khách hàng mới`.
- Website Doanh Nghiệp có badge `Đề xuất`.
- Ghi rõ: giá khởi điểm, chi phí có thể thay đổi theo phạm vi.
- CTA riêng từng gói nhưng đều dẫn Zalo.

#### Testimonial Card

- Chỉ dùng nội dung thật khi production.
- Nếu chưa có thật, ghi rõ placeholder trong code/content.
- Quote ngắn, không quá 2–3 dòng.
- Có tên, vai trò, doanh nghiệp nếu được phép công bố.

### 10.5. Badges / Chips

#### Category Badge

- Background: `rgba(167,126,255,0.2)`
- Text: `#A77EFF`
- Border: `1px solid rgba(167,126,255,0.4)`
- Radius: `9999px` hoặc `4px` tùy ngữ cảnh
- Font size: `12px`
- Weight: `500`

#### Recommended Badge

- Text: `Đề xuất`
- Background: `#A77EFF`
- Text: `#FFFFFF`
- Dùng trên gói Website Doanh Nghiệp.

#### Promotion Badge

- Text: `Ưu đãi khách hàng mới`
- Background: `rgba(255,125,187,0.16)`
- Text: `#FF7DBB`
- Border: `rgba(255,125,187,0.32)`

### 10.6. Forms & Inputs

Landing page hiện ưu tiên CTA Zalo, không nhất thiết có form dài. Nếu có form tư vấn, áp dụng rule sau:

#### Text Input

- Height: `48px`
- Background: `rgba(255,255,255,0.05)`
- Text: `#FFFFFF`
- Placeholder: `rgba(255,255,255,0.4)`
- Radius: `12px` hoặc pill nếu input ngắn
- Border/inset: `rgba(255,255,255,0.08)`
- Focus: inset/outline purple

#### Textarea

- Min height: `120px`
- Padding: `14px 16px`
- Radius: `12px`
- Không resize làm vỡ layout nếu nằm trong modal.

#### Validation

- Error message: `#FF5C7A`, font 13–14px
- Success/help text: text muted hoặc success color
- Không chỉ đổi màu border khi lỗi; phải có text lỗi.

### 10.7. FAQ Accordion

- Mỗi item có title, icon plus/minus hoặc chevron.
- Background: transparent hoặc surface mềm.
- Border-bottom: `rgba(255,255,255,0.08)`.
- Open state: answer hiển thị với text secondary.
- Animation: max-height/opacity nhẹ, không giật.
- Keyboard accessible: Enter/Space toggle.

### 10.8. Toast / Feedback

Dùng khi người dùng bấm CTA, copy liên hệ hoặc gửi form.

- Position: top-right desktop, bottom mobile.
- Background: `#191A1D`
- Border: inset `rgba(255,255,255,0.08)`
- Success icon màu `#539D52`
- Error icon màu `#FF5C7A`
- Auto close: 3–5 giây

### 10.9. Modal / Sheet

Nếu có modal báo giá hoặc menu mobile:

- Backdrop: `rgba(0,0,0,0.6)`
- Modal background: `#191A1D`
- Border: `rgba(255,255,255,0.08)`
- Radius: `16px–24px`
- Max width desktop: `560px–720px`
- Mobile: bottom sheet hoặc full width với padding 16px

---

## 11. Page Structure & Content Hierarchy

Landing page gồm các section sau, đúng theo thứ tự ưu tiên chuyển đổi.

### 11.1. Header

**Mục tiêu:** Cho người dùng biết thương hiệu, di chuyển nhanh đến nội dung chính và luôn có CTA Zalo.

Nội dung:

- Wordmark `BrifTech`
- Navigation: Dịch vụ, Dự án, Quy trình, Bảng giá, FAQ
- Language switch `VI / EN`
- CTA: `Nhận tư vấn qua Zalo`

### 11.2. Hero

**Mục tiêu:** Trong 5 giây đầu, người dùng hiểu BrifTech làm gì, khác biệt gì và nên bấm CTA nào.

Content đề xuất:

- Badge nhỏ: `Đối tác phát triển website & sản phẩm số`
- Headline: `Website không chỉ đẹp. Website phải tạo ra tăng trưởng.`
- Supporting: `Thiết kế riêng. Triển khai nhanh. Đồng hành dài hạn.`
- Description: `BrifTech phân tích bài toán kinh doanh, thiết kế trải nghiệm và phát triển website, hệ thống quản trị phù hợp với cách doanh nghiệp thực sự vận hành.`
- CTA chính: `Nhận tư vấn qua Zalo`
- CTA phụ: `Xem dịch vụ`
- Visual chính: 3D Spline scene

Layout:

- Desktop: text bên trái, 3D visual full-bleed hoặc tích hợp trong hero bên phải/nền.
- Mobile: text trên, CTA ngay sau description, 3D phía dưới hoặc dùng fallback image.

### 11.3. Giá trị khác biệt

**Mục tiêu:** Nêu lý do nên chọn BrifTech thay vì một đơn vị làm web theo mẫu.

4 điểm chính:

1. **Thiết kế riêng** — UI/UX bám theo thương hiệu và mục tiêu kinh doanh.
2. **Triển khai nhanh** — Quy trình gọn, scope rõ, tốc độ cao.
3. **BA đa domain** — Phân tích nghiệp vụ trước khi viết code.
4. **Đồng hành trực tiếp** — Khách hàng trao đổi rõ ràng trong suốt dự án.

### 11.4. Dịch vụ

Thứ tự ưu tiên:

1. Website doanh nghiệp — dịch vụ nổi bật
2. Landing page
3. Website bán hàng
4. Hệ thống quản trị: CRM / HRM / ERP / web app custom
5. Dịch vụ bổ trợ: bảo trì, SEO, hosting, domain, tư vấn tối ưu

Rules:

- Website doanh nghiệp phải nổi bật hơn các dịch vụ khác.
- Hệ thống quản trị cần thể hiện được năng lực tùy chỉnh theo nghiệp vụ.
- Không trình bày như danh sách bán hàng rẻ tiền; cần giữ tone công nghệ cao và chuyên nghiệp.

### 11.5. Portfolio

**Mục tiêu:** Chứng minh năng lực bằng dự án thực tế.

Mỗi dự án gồm:

- Tên dự án
- Domain
- Phạm vi triển khai
- Kết quả hoặc giá trị tạo ra
- Ảnh giao diện / mockup / screenshot

Lưu ý production:

- Chỉ dùng ảnh, tên khách hàng và kết quả thật khi có quyền công bố.
- Không công bố số liệu mock như dữ liệu thật.

### 11.6. Năng lực BA theo domain

**Mục tiêu:** Làm rõ BrifTech không chỉ code giao diện, mà hiểu nghiệp vụ trước khi phát triển.

Domain hiển thị:

- Tài chính
- Kế toán
- E-commerce
- Sức khỏe & wellness
- Bán lẻ
- Nhân sự
- Y tế

Có thể hiển thị dạng chip grid hoặc orbit/cluster visual nhẹ. Không cần quá nhiều text.

### 11.7. Quy trình triển khai

6 bước:

1. **Tư vấn:** Tìm hiểu mục tiêu, nhu cầu và ngân sách.
2. **Phân tích BA:** Làm rõ nghiệp vụ, người dùng, tính năng và phạm vi.
3. **Thiết kế UI/UX:** Xây dựng cấu trúc, wireframe và giao diện theo thương hiệu.
4. **Phát triển:** Lập trình frontend, backend và tích hợp hệ thống.
5. **Kiểm thử:** Kiểm tra tính năng, responsive, hiệu năng và nghiệm thu.
6. **Bàn giao và đồng hành:** Triển khai, hướng dẫn, bảo hành và hỗ trợ sau ra mắt.

Visual rule:

- Trình bày như một dòng chảy liên tục.
- Có progress line hoặc highlight theo scroll nếu triển khai animation.
- Người dùng phải hiểu dự án đang đi từ đâu đến đâu.

### 11.8. Bảng giá

| Gói dịch vụ | Giá gốc | Giá ưu đãi | Thời gian | Phạm vi khởi điểm |
|---|---:|---:|---:|---|
| Landing Page | 3.000.000đ | 1.888.000đ | 3–5 ngày | 1 trang, tối đa 8 section |
| Website Doanh Nghiệp | 8.000.000đ | 5.000.000đ | 7–14 ngày | Tối đa 8 trang nội dung |
| Website Bán Hàng | 15.000.000đ | 10.000.000đ | 3–4 tuần | Tính năng bán hàng cơ bản, khởi tạo tối đa 100 sản phẩm |
| CRM / HRM / ERP | Theo phạm vi | Từ 25.000.000đ | Từ 1 tháng | Báo giá sau khi phân tích nghiệp vụ |

Presentation rules:

- Giá gốc gạch ngang.
- Giá ưu đãi nổi bật.
- Có nhãn `Ưu đãi khách hàng mới`.
- Gói Website Doanh Nghiệp được đánh dấu `Đề xuất`.
- Không dùng đồng hồ đếm ngược hoặc thông điệp khẩn cấp giả tạo.
- Luôn ghi rõ: `Giá trên là giá khởi điểm và có thể thay đổi theo phạm vi thực tế.`

### 11.9. Chính sách và cam kết

Hiển thị dạng icon list hoặc card grid.

- Bảo hành kỹ thuật 12 tháng
- Bảo trì miễn phí 12 tháng cho lỗi thuộc phạm vi bàn giao
- Tặng hosting năm đầu
- Domain miễn phí tùy theo gói dịch vụ
- Bàn giao toàn bộ source code sau khi hoàn tất thanh toán
- Hướng dẫn sử dụng và quản trị sau bàn giao
- Hỗ trợ SEO kỹ thuật nền tảng
- Đồng hành trong quá trình vận hành và mở rộng sản phẩm

### 11.10. Đánh giá khách hàng

- Chỉ sử dụng nội dung thật khi phát hành production.
- Nếu chưa có, section có thể ẩn hoặc dùng placeholder trong bản demo nội bộ.
- Không bịa tên doanh nghiệp, số liệu, feedback.

### 11.11. FAQ

Các câu hỏi cần có:

1. Chi phí có phát sinh không?
2. Khách hàng chưa có nội dung thì có được hỗ trợ không?
3. Có bàn giao source code không?
4. Website có chuẩn SEO và responsive không?
5. Sau bàn giao BrifTech hỗ trợ như thế nào?
6. BrifTech có thể phát triển thêm tính năng về sau không?

### 11.12. Final CTA

**Mục tiêu:** Kết lại bằng lời mời trao đổi bài toán, không chỉ bán gói dịch vụ.

Content gợi ý:

- Heading: `Bạn đang cần một website có thể vận hành thật, không chỉ để trưng bày?`
- Description: `Trao đổi với BrifTech để được phân tích nhu cầu, đề xuất hướng triển khai và nhận báo giá phù hợp.`
- CTA: `Nhận tư vấn qua Zalo`

### 11.13. Footer

Nội dung:

- Wordmark BrifTech
- Mô tả ngắn về dịch vụ
- Navigation ngắn: Dịch vụ, Quy trình, Bảng giá, FAQ
- Zalo
- Copyright

Không cần footer quá phức tạp trong bản landing page đầu.

---

## 12. Hero 3D Spline

### 12.1. Scene tạm thời

```text
https://my.spline.design/boxeshover-tNGHXkOweLOVADrVKsIYFUkZ/
```

### 12.2. Cách sử dụng

- Scene là visual chính của hero, không đặt trong khung preview trang trí nhỏ.
- Desktop cho phép tương tác hover/cursor.
- Text và CTA phải luôn đọc rõ, không bị 3D che lấp.
- Mobile cần bố cục và camera riêng; nếu hiệu năng không đạt thì dùng ảnh fallback.
- Có loading state nhẹ trong khi scene tải.
- Tôn trọng `prefers-reduced-motion`.
- Kiểm tra hiệu năng thực tế trước production.

### 12.3. Fallback strategy

- Nếu Spline load chậm quá 2–3 giây: hiển thị static fallback image.
- Nếu user bật reduced motion: dùng static image hoặc scene không animation.
- Nếu mobile FPS thấp: giảm kích thước scene hoặc ẩn interaction.
- Không để iframe/Spline làm chặn render nội dung chính.

### 12.4. Loading state

- Skeleton/glow nhẹ trên vùng visual.
- Không dùng spinner lớn gây cảm giác chờ đợi.
- Text và CTA hero phải hiển thị trước hoặc đồng thời với visual.

---

## 13. Motion & Micro-interaction

### 13.1. Motion principles

- Motion phục vụ phân cấp nội dung, không trình diễn quá đà.
- Không lạm dụng parallax, glow, blur hoặc animation lặp vô tận.
- Mọi animation phải có trạng thái giảm chuyển động cho `prefers-reduced-motion`.

### 13.2. Timing

| Interaction | Duration | Easing |
|---|---:|---|
| Hover button/card | `150ms–200ms` | `ease-out` |
| Accordion open/close | `180ms–240ms` | `ease-in-out` |
| Modal/sheet | `220ms–280ms` | `ease-out` |
| Section reveal | `300ms–500ms` | `ease-out` |

### 13.3. Required micro-interactions

- Header đổi surface nhẹ khi scroll.
- Section reveal nhẹ bằng opacity và translate.
- Portfolio card có image shift hoặc preview motion nhẹ.
- Pricing hover làm rõ card đang xem.
- Process có progress line hoặc highlight theo vị trí cuộn.
- CTA Zalo có feedback rõ khi hover/tap.

### 13.4. Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 14. Accessibility

### 14.1. Contrast

- Body text phải đạt tối thiểu WCAG AA contrast ratio 4.5:1.
- Text lớn/headline phải đạt tối thiểu 3:1.
- Text muted không dùng cho nội dung quan trọng hoặc thông tin giá.
- CTA label luôn dùng text `#FFFFFF` trên nền purple.

### 14.2. Keyboard accessibility

- Tất cả button/link/menu/accordion phải focus được bằng keyboard.
- Focus state phải nhìn thấy rõ bằng outline hoặc shadow purple.
- Menu mobile có thể đóng bằng `Esc`.
- Accordion toggle bằng `Enter` hoặc `Space`.

### 14.3. Screen reader

- Logo/wordmark có label phù hợp.
- Icon-only button phải có `aria-label`.
- Spline/visual nếu không truyền thông tin quan trọng thì đánh dấu decorative hoặc có mô tả ngắn.
- Form input phải có label rõ, không chỉ dùng placeholder.

### 14.4. Touch target

- Minimum: `44px × 44px` cho mobile.
- Khoảng cách giữa touch target: tối thiểu `8px`.
- Sticky CTA không che nội dung hoặc footer.

---

## 15. Content Rules

### 15.1. Tone of voice

- Chuyên nghiệp, rõ ràng, tự tin.
- Không phóng đại quá mức.
- Không dùng ngôn ngữ ép mua như countdown, khan hiếm giả.
- Nhấn vào giá trị kinh doanh, phân tích nghiệp vụ và đồng hành sau triển khai.

### 15.2. Copywriting rules

- Headline ngắn, mạnh, dễ hiểu.
- Mỗi card chỉ nên có 1 ý chính.
- Giá phải ghi rõ phạm vi khởi điểm.
- Chính sách phải viết cụ thể, tránh câu chung chung.
- CTA dùng động từ hành động: `Nhận tư vấn`, `Nhận báo giá`, `Xem dịch vụ`.

### 15.3. Placeholder rules

Các mục sau có thể dùng placeholder trong design/prototype nhưng phải thay bằng dữ liệu thật trước production:

- Logo chính thức
- Link Zalo
- Ảnh, tên và kết quả của portfolio
- Logo khách hàng
- Đánh giá khách hàng
- Số lượng dự án, khách hàng và năm kinh nghiệm
- Domain chính thức
- Điều khoản chi tiết của hosting và domain miễn phí
- Điều kiện của chương trình ưu đãi

Không công bố số liệu mock như dữ liệu thật.

---

## 16. Media & Iconography

### 16.1. Icon rules

- Dùng một bộ icon thống nhất, ưu tiên line icon hiện đại.
- Icon size:
  - Inline: `16px`
  - Card/service: `20px–24px`
  - Primary action: `24px`
- Stroke width: `1.5px–2px`
- Icon accent: purple, blue hoặc white muted tùy ngữ cảnh.
- Không mix nhiều phong cách icon trong cùng trang.

### 16.2. Image rules

- Portfolio image là nội dung chính, phải sắc nét.
- Không dùng ảnh stock quá chung chung.
- Không dùng decoration vô nghĩa thay thế bằng chứng năng lực.
- Thumbnail fallback có thể dùng gradient dark + tên dự án.
- Tỷ lệ ảnh nên thống nhất trong cùng một grid.

### 16.3. Avatar / client logo

- Avatar testimonial: `40px–48px`
- Client logo: ưu tiên monochrome/light version trên nền tối.
- Nếu logo khách hàng không có quyền dùng, ẩn section logo.

---

## 17. State System

### 17.1. Loading states

- Hero 3D: skeleton/glow nhẹ.
- Portfolio: skeleton image block + title line.
- Pricing: tránh loading từng giá nếu dữ liệu static.
- Form submit: button loading text `Đang gửi...` hoặc icon loading nhỏ.

### 17.2. Empty states

Dùng cho portfolio/testimonial nếu chưa có dữ liệu production.

- Empty state phải thân thiện, không technical.
- Không hiển thị empty state cho người dùng production nếu có thể ẩn section.

### 17.3. Error states

- Form lỗi: hiển thị lỗi dưới input.
- Link Zalo chưa cấu hình trong staging: toast hoặc console warning nội bộ.
- Spline lỗi load: fallback image.

### 17.4. Success states

- Bấm/copy liên hệ thành công: toast success.
- Submit form thành công nếu có: thông báo rõ bước tiếp theo.

---

## 18. SEO & Performance Design Considerations

### 18.1. SEO content structure

- Mỗi trang có duy nhất một `h1` trong hero.
- Section title dùng `h2`.
- Card title dùng `h3` nếu phù hợp.
- Nội dung dịch vụ cần có keyword tự nhiên: thiết kế website, phát triển website, landing page, website bán hàng, hệ thống quản trị, CRM, HRM, ERP.

### 18.2. Performance rules

- Spline không được chặn Largest Contentful Paint của hero text.
- Ảnh portfolio dùng định dạng tối ưu như WebP/AVIF nếu có.
- Lazy load ảnh dưới fold.
- Không lạm dụng blur/glow lớn vì tốn render.
- Animation không được làm layout shift.

### 18.3. Responsive performance

- Mobile có thể dùng fallback image thay cho 3D nếu cần.
- Giảm số lượng animation reveal trên thiết bị yếu.
- CTA và nội dung chính phải render nhanh hơn visual trang trí.

---

## 19. Implementation Naming Convention

### 19.1. CSS class naming suggestion

Có thể dùng BEM hoặc utility-first. Nếu dùng CSS module/BEM, gợi ý:

```text
site-header
site-header__logo
site-header__nav
site-header__cta
hero
hero__content
hero__visual
service-card
pricing-card
pricing-card--recommended
portfolio-card
process-step
faq-item
final-cta
site-footer
```

### 19.2. Component naming suggestion

```text
Header
HeroSection
ValueSection
ServicesSection
PortfolioSection
DomainCapabilitySection
ProcessSection
PricingSection
CommitmentSection
TestimonialsSection
FAQSection
FinalCTASection
Footer
Button
Badge
Card
Accordion
LanguageSwitch
SplineHero
```

---

## 20. Do's and Don'ts

### Do

- Do dùng purple `#A77EFF` cho CTA chính và brand moment.
- Do giữ nền tối `#121316`/`#191A1D` làm foundation.
- Do dùng inset border mờ để tạo depth trên dark UI.
- Do ưu tiên nội dung dịch vụ, giá, quy trình và cam kết rõ ràng.
- Do làm nổi bật Website Doanh Nghiệp là dịch vụ chủ lực.
- Do đảm bảo CTA Zalo luôn dễ tìm nhưng không gây áp lực.
- Do dùng 3D như tín hiệu năng lực công nghệ, không để ảnh hưởng readability.
- Do kiểm tra responsive mobile kỹ, đặc biệt hero và pricing.
- Do dùng dữ liệu thật cho portfolio, testimonial khi production.

### Don't

- Don't sao chép nhận diện hoặc bố cục của Spline/XimiTech.
- Don't dùng countdown hoặc thông điệp khẩn cấp giả.
- Don't biến mọi section thành card nổi.
- Don't dùng quá nhiều glow, blur, parallax.
- Don't dùng text 11px cho nội dung marketing dài.
- Don't dùng màu magenta quá nhiều làm mất cảm giác chuyên nghiệp.
- Don't đặt text trực tiếp trên visual 3D nếu không có overlay đảm bảo đọc rõ.
- Don't công bố số liệu mock như dữ liệu thật.
- Don't để 3D làm giảm tốc độ tải hoặc cản trở scroll trên mobile.

---

## 21. Acceptance Criteria

Thiết kế được coi là đạt khi đáp ứng các tiêu chí sau:

1. Hero truyền tải được dịch vụ và lợi ích trong 5 giây đầu.
2. Người dùng nhận biết Website Doanh Nghiệp là dịch vụ chủ lực.
3. Người dùng luôn tìm thấy CTA Zalo mà không bị ép chuyển đổi.
4. Bảng giá dễ hiểu, so sánh được và ghi rõ giá khởi điểm.
5. Giao diện có chất công nghệ cao nhưng vẫn đáng tin và dễ đọc.
6. Không sao chép bố cục hoặc nhận diện của Spline/XimiTech.
7. 3D không làm giảm khả năng đọc, responsive hoặc tốc độ tải trang.
8. Nội dung không tràn, che lấp hoặc vỡ bố cục trên desktop và mobile.
9. Các trạng thái hover, focus, loading, error, empty và reduced motion được thiết kế đầy đủ.
10. Toàn bộ UI nhất quán với design system này.
11. Nội dung production không dùng dữ liệu placeholder như dữ liệu thật.
12. Touch target mobile tối thiểu 44px.
13. Focus state rõ ràng cho toàn bộ phần tử tương tác.
14. CTA chính đều dẫn đúng link Zalo chính thức trước khi release.

---

## 22. Development Checklist

Trước khi code:

- [ ] Chốt link Zalo chính thức hoặc tạo biến cấu hình `ZALO_URL`.
- [ ] Chốt logo hoặc dùng wordmark `BrifTech`.
- [ ] Chốt danh sách section hiển thị ở production.
- [ ] Chốt dữ liệu portfolio thật hoặc ẩn section.
- [ ] Chốt testimonial thật hoặc ẩn section.
- [ ] Chốt điều kiện ưu đãi, hosting, domain.
- [ ] Chuẩn bị fallback image cho Spline hero.
- [ ] Chốt breakpoint và layout mobile.
- [ ] Implement design tokens trước component.
- [ ] Test keyboard navigation.
- [ ] Test reduced motion.
- [ ] Test responsive pricing và hero.
- [ ] Test performance trên mobile.

---

## 23. Suggested First Implementation Order

1. Tạo design tokens: color, spacing, radius, typography, shadow.
2. Build base layout: container, section, grid.
3. Build components: Button, Badge, Card, Accordion, LanguageSwitch.
4. Build Header và mobile menu.
5. Build Hero + Spline fallback strategy.
6. Build Services, Process, Pricing, FAQ.
7. Build Portfolio/Testimonial với placeholder có kiểm soát hoặc ẩn nếu chưa có dữ liệu thật.
8. Add motion/reveal nhẹ.
9. Add accessibility/focus/reduced motion.
10. Final QA desktop/tablet/mobile.

---

## 24. Notes for Production

- Đây là landing page chuyển đổi qua Zalo, nên CTA chính phải ổn định, dễ thấy và hoạt động đúng.
- Vì BrifTech định vị là đối tác phát triển sản phẩm số toàn diện, UI không nên quá “rẻ”, quá sale hoặc quá template.
- Giá là yếu tố hỗ trợ chuyển đổi, nhưng thông điệp chính vẫn là năng lực phân tích, thiết kế riêng, phát triển hệ thống và đồng hành lâu dài.
- Nếu chưa có portfolio/testimonial thật, ưu tiên ẩn hoặc ghi rõ placeholder ở môi trường demo thay vì công bố mock trên production.
