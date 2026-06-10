import { lazy, Suspense, useEffect, useRef, useState } from "react";
import logoLockup from "./logo2-lockup.png";
import logoSymbol from "./logo2-symbol.png";
import { englishTranslations } from "./translations";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  Gauge,
  Globe2,
  Handshake,
  Headphones,
  HeartPulse,
  LayoutTemplate,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Palette,
  Phone,
  ReceiptText,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

const ZALO_URL =
  import.meta.env.VITE_ZALO_URL || "https://zalo.me/0972229142";
const LEAD_FORM_ENDPOINT =
  import.meta.env.VITE_LEAD_FORM_ENDPOINT ||
  "https://formsubmit.co/ajax/biilveoth@gmail.com";
const SPLINE_SCENE =
  "https://prod.spline.design/6yrC-EDzrIZRlENf/scene.splinecode";
const Spline = lazy(() => import("@splinetool/react-spline"));
const LANGUAGE_STORAGE_KEY = "briftech-language";
const translatableAttributes = ["aria-label", "placeholder", "title"];
const reverseEnglishTranslations = Object.fromEntries(
  Object.entries(englishTranslations).map(([vi, en]) => [en, vi]),
);
const translationEntries = {
  en: Object.entries(englishTranslations).sort(([a], [b]) => b.length - a.length),
  vi: Object.entries(reverseEnglishTranslations).sort(([a], [b]) => b.length - a.length),
};

function translateString(value, language) {
  const dictionary = language === "en" ? englishTranslations : reverseEnglishTranslations;
  const exact = dictionary[value];
  if (exact) return exact;

  let translated = value;
  translationEntries[language].forEach(([source, target]) => {
    if (translated.includes(source)) translated = translated.split(source).join(target);
  });
  return translated;
}

function translateTextNode(node, language) {
  const value = node.nodeValue;
  const normalized = value?.replace(/\s+/g, " ").trim();
  if (!normalized) return;

  const translated = translateString(normalized, language);
  if (translated === normalized) return;

  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function translateElement(element, language) {
  translatableAttributes.forEach((attribute) => {
    const value = element.getAttribute?.(attribute);
    if (!value) return;
    const translated = translateString(value, language);
    if (translated !== value) element.setAttribute(attribute, translated);
  });
}

function translateTree(root, language) {
  if (!root) return;

  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, language);
    return;
  }

  if (root.nodeType !== Node.ELEMENT_NODE) return;
  translateElement(root, language);

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  );

  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
    if (node.nodeType === Node.ELEMENT_NODE) translateElement(node, language);
    node = walker.nextNode();
  }
}

function usePageLanguage() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "vi";
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "vi";
  });

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return undefined;

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.title =
      language === "en"
        ? "BrifTech | Websites and systems built for SME growth"
        : "BrifTech | Website và hệ thống giúp SME tăng trưởng";

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      language === "en"
        ? "BrifTech designs and builds business websites, landing pages, e-commerce platforms, CRM, HRM and ERP solutions for small and medium-sized businesses."
        : "BrifTech tư vấn và triển khai website doanh nghiệp, landing page, website bán hàng, CRM, HRM và ERP dành cho doanh nghiệp vừa và nhỏ.",
    );

    translateTree(root, language);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target, language);
          return;
        }

        if (mutation.type === "attributes") {
          translateElement(mutation.target, language);
          return;
        }

        mutation.addedNodes.forEach((node) => translateTree(node, language));
      });
    });

    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttributes,
    });

    return () => observer.disconnect();
  }, [language]);

  return { language, setLanguage };
}

const primaryNav = [
  ["Dịch vụ", "#services"],
  // ["Dự án", "#projects"], // Bật lại khi section Projects sẵn sàng công bố.
  ["Giá", "#pricing"],
  ["Cam kết", "#commitments"],
  ["Về BrifTech", "#about"],
  ["FAQ", "#faq"],
];

const trustItems = [
  "100+ dự án triển khai",
  "BA đa domain",
  "UI/UX thiết kế riêng",
  "Bàn giao source code",
  "Bảo hành 12 tháng",
];

const websiteCapabilities = [
  {
    icon: LayoutTemplate,
    title: "Giao diện khách hàng nhìn thấy",
    features: [
      "Tối ưu mobile",
      "Dễ đọc",
      "CTA rõ ràng",
      "Tải nhanh",
      "Hiệu ứng mượt",
      "Đúng nhận diện",
      "Form nhận khách",
      "Dễ xem giá",
    ],
  },
  {
    icon: Database,
    title: "Hệ thống quản trị phía sau",
    features: [
      "Quản lý bài viết",
      "Quản lý sản phẩm",
      "Quản lý đơn hàng",
      "Tài khoản nhân viên",
      "Phân quyền",
      "Lưu dữ liệu",
      "Gửi thông báo",
      "Báo cáo cơ bản",
    ],
  },
  {
    icon: Blocks,
    title: "Công cụ vận hành riêng",
    features: [
      "Dashboard",
      "CRM mini",
      "Đặt lịch",
      "Theo dõi đơn",
      "Quản lý khách hàng",
      "Quy trình nội bộ",
      "Dùng trên mobile",
      "Xuất báo cáo",
    ],
    featured: true,
  },
  {
    icon: Bot,
    title: "AI hỗ trợ tư vấn",
    features: [
      "Chatbot hỏi đáp",
      "Gợi ý sản phẩm",
      "Tóm tắt yêu cầu",
      "Lọc khách tiềm năng",
      "Trả lời tự động",
      "Tìm kiếm thông minh",
      "Tiết kiệm thời gian",
      "Hỗ trợ 24/7",
    ],
  },
  {
    icon: Globe2,
    title: "Hosting & vận hành",
    features: [
      "Hosting năm đầu",
      "Hỗ trợ domain",
      "SSL bảo mật",
      "Backup dữ liệu",
      "Theo dõi lỗi",
      "Cập nhật website",
      "Tối ưu tốc độ",
      "Dễ mở rộng",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Bán hàng & nội dung",
    features: [
      "Giỏ hàng",
      "Thanh toán online",
      "Mã giảm giá",
      "Trang sản phẩm",
      "Blog SEO",
      "Trang dịch vụ",
      "Landing page",
      "Đo chuyển đổi",
    ],
  },
];

const websiteOutcomes = [
  {
    icon: Code2,
    title: "Một nền tảng có thể mở rộng",
    text: "Cấu trúc rõ ràng để doanh nghiệp bổ sung trang và tính năng mà không phải xây lại từ đầu.",
  },
  {
    icon: Zap,
    title: "Trải nghiệm nhanh, ít rời trang",
    text: "Tốc độ và hiển thị mobile được tối ưu để khách hàng tiếp cận thông tin thuận tiện hơn.",
  },
  {
    icon: ShieldCheck,
    title: "Vận hành an toàn hơn",
    text: "SSL, phân quyền, backup và phương án lưu dữ liệu được thiết kế theo nhu cầu thực tế.",
  },
  {
    icon: Search,
    title: "Nền tảng để được tìm thấy",
    text: "Cấu trúc, nội dung và sitemap giúp Google đọc hiểu website tốt hơn ngay từ đầu.",
  },
  {
    icon: BadgeCheck,
    title: "Năng lực được trình bày thuyết phục",
    text: "Thông điệp và giao diện nhất quán giúp khách hàng hiểu nhanh lý do nên lựa chọn doanh nghiệp.",
  },
  {
    icon: BarChart3,
    title: "Có dữ liệu để cải thiện",
    text: "Hệ thống sẵn sàng đo lường lượt truy cập, chuyển đổi và hành vi quan trọng của khách hàng.",
  },
];

const serviceConstellation = [
  { label: "Website doanh nghiệp", x: 68, y: 32, size: "xl", tone: "accent", href: "#services", dx: 16, dy: -12, duration: 8.6 },
  { label: "Website bán hàng", x: 49, y: 50, size: "hero", tone: "light", href: "#services", dx: -14, dy: 10, duration: 9.4 },
  { label: "Thiết kế riêng", x: 57, y: 68, size: "lg", tone: "accent", href: "#difference", dx: 12, dy: 15, duration: 8.1 },
  { label: "Landing page", x: 36, y: 32, size: "lg", tone: "violet", href: "#pricing", dx: -12, dy: -9, duration: 10.2 },
  { label: "CRM · HRM · ERP", x: 74, y: 55, size: "md", tone: "violet", href: "#services", dx: 10, dy: 13, duration: 9.1 },
  { label: "UI/UX theo thương hiệu", x: 27, y: 57, size: "md", tone: "light", href: "#services", dx: 15, dy: -10, duration: 11.2 },
  { label: "SEO tăng trưởng", x: 75, y: 72, size: "md", tone: "accent", href: "#services", dx: 15, dy: -8, duration: 10.5 },
  { label: "BA đa domain", x: 39, y: 75, size: "md", tone: "light", href: "#difference", dx: -12, dy: 9, duration: 9.7 },
  { label: "Triển khai nhanh", x: 20, y: 42, size: "sm", tone: "muted", href: "#process", dx: 13, dy: 11, duration: 8.9 },
  { label: "CMS dễ quản trị", x: 85, y: 41, size: "sm", tone: "light", href: "#capabilities", dx: -13, dy: -9, duration: 9.9 },
  { label: "Đo lường chuyển đổi", x: 62, y: 86, size: "sm", tone: "muted", href: "#capabilities", dx: 12, dy: -10, duration: 9.2 },
  { label: "Thanh toán online", x: 16, y: 62, size: "sm", tone: "light", href: "#capabilities", dx: -11, dy: 8, duration: 8.4 },
  { label: "Phễu nhận lead", x: 29, y: 15, size: "sm", tone: "muted", href: "#capabilities", dx: 9, dy: 12, duration: 9.6 },
  { label: "API tùy chỉnh", x: 88, y: 63, size: "sm", tone: "light", href: "#services", dx: -10, dy: 10, duration: 11 },
  { label: "Đồng hành trực tiếp", x: 12, y: 28, size: "sm", tone: "accent", href: "#difference", dx: 14, dy: -8, duration: 10.6 },
  { label: "Tư vấn qua Zalo", x: 86, y: 82, size: "sm", tone: "violet", href: ZALO_URL, dx: -12, dy: -11, duration: 9 },
];

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Website doanh nghiệp",
    eyebrow: "Dịch vụ chủ lực",
    description:
      "Biến năng lực doanh nghiệp thành một website thuyết phục, dễ quản trị và sẵn sàng tạo khách hàng.",
    features: ["Chiến lược nội dung & UI/UX", "CMS chủ động vận hành", "SEO & đo lường nền tảng"],
    featured: true,
  },
  {
    icon: LayoutTemplate,
    title: "Landing page",
    eyebrow: "Ra mắt nhanh",
    description:
      "Trang đích tập trung một mục tiêu: thu hút đúng khách hàng và thúc đẩy họ hành động.",
    features: ["Thông điệp bán hàng rõ", "Tối ưu chuyển đổi", "Theo dõi hiệu quả"],
  },
  {
    icon: ShoppingBag,
    title: "Website bán hàng",
    eyebrow: "Tăng trưởng",
    description:
      "Xây dựng kênh bán hàng trực tuyến đồng bộ từ trải nghiệm mua đến quản lý sản phẩm và đơn hàng.",
    features: ["Hành trình mua hàng", "Quản trị sản phẩm & đơn", "Thanh toán & đo lường"],
  },
  {
    icon: Blocks,
    title: "Hệ thống quản trị",
    eyebrow: "Theo nghiệp vụ",
    description:
      "Số hóa quy trình bằng CRM, HRM, ERP và web app được thiết kế theo nghiệp vụ thực tế.",
    features: ["BA bóc tách quy trình", "Backend/API tùy chỉnh", "Phân quyền & báo cáo"],
  },
  {
    icon: Gauge,
    title: "Bảo trì & tối ưu",
    eyebrow: "Đồng hành",
    description:
      "Duy trì website ổn định, cập nhật kịp thời và sẵn sàng nâng cấp khi doanh nghiệp phát triển.",
    features: ["Theo dõi & xử lý lỗi", "Backup và cập nhật", "Nâng cấp tính năng"],
  },
  {
    icon: Search,
    title: "SEO kỹ thuật",
    eyebrow: "Hiện diện bền vững",
    description:
      "Xây nền tảng để Google hiểu đúng website và khách hàng dễ tìm thấy doanh nghiệp hơn.",
    features: ["Cấu trúc on-page", "Schema & sitemap", "Search Console & tốc độ"],
  },
];

const differences = [
  {
    icon: Palette,
    number: "01",
    title: "Bắt đầu từ bài toán kinh doanh",
    text: "Mỗi dự án được làm rõ mục tiêu, khách hàng và cách vận hành trước khi lựa chọn giao diện hay công nghệ.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Tiến độ nhanh, có kiểm soát",
    text: "Phạm vi rõ, đầu mối trực tiếp và từng mốc nghiệm thu giúp dự án đi nhanh mà vẫn kiểm soát chất lượng.",
  },
  {
    icon: Database,
    number: "03",
    title: "BA đa domain",
    text: "Kinh nghiệm đa ngành giúp BrifTech hiểu quy trình trước khi viết code, giảm sai lệch và chi phí làm lại.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Đồng hành đến khi vận hành",
    text: "Khách hàng theo dõi được từng giai đoạn, được hướng dẫn quản trị và hỗ trợ liên tục sau khi ra mắt.",
  },
];

const companyFacts = [
  {
    icon: BriefcaseBusiness,
    eyebrow: "Năng lực cốt lõi",
    title: "Tư vấn và triển khai trọn vẹn",
    text: "Từ phân tích nghiệp vụ, nội dung, UI/UX đến phát triển và vận hành.",
  },
  {
    icon: Globe2,
    eyebrow: "Khách hàng trọng tâm",
    title: "Doanh nghiệp vừa và nhỏ",
    text: "Giải pháp vừa với nguồn lực hiện tại và đủ nền tảng để mở rộng dài hạn.",
  },
  {
    icon: Users,
    eyebrow: "Cách làm việc",
    title: "Trực tiếp, rõ phạm vi, rõ tiến độ",
    text: "Chủ doanh nghiệp được trao đổi trực tiếp và theo dõi từng mốc triển khai.",
  },
];

const companyStats = [
  { value: "100+", label: "dự án đã triển khai" },
  { value: "6+", label: "domain kinh nghiệm" },
  { value: "12", label: "tháng bảo hành" },
];

const teamProfiles = [
  {
    icon: BarChart3,
    title: "Nguyễn Thành Luân",
    role: "Product & Business Analyst",
    text: "Đồng hành cùng chủ doanh nghiệp để chuyển mục tiêu kinh doanh và quy trình vận hành thành phạm vi sản phẩm rõ ràng.",
    points: ["Làm rõ mục tiêu, người dùng và quy trình", "Chốt phạm vi, chi phí và tiến độ", "Ưu tiên tính năng theo hiệu quả kinh doanh"],
  },
  {
    icon: Code2,
    title: "Bùi Hải Nam",
    role: "Solution & Engineering",
    text: "Phụ trách kiến trúc và phương án kỹ thuật để hệ thống ổn định, bảo trì thuận tiện và sẵn sàng mở rộng.",
    points: ["Thiết kế luồng hệ thống trước khi code", "Xây dựng backend/API phù hợp nghiệp vụ", "Kiểm soát hiệu năng và khả năng mở rộng"],
  },
];

const domains = [
  { icon: CircleDollarSign, name: "Tài chính" },
  { icon: ReceiptText, name: "Kế toán" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: HeartPulse, name: "Sức khỏe" },
  { icon: Store, name: "Bán lẻ" },
  { icon: Users, name: "Nhân sự" },
  { icon: ShieldCheck, name: "Y tế" },
];

const process = [
  {
    icon: MessageCircle,
    title: "Khám phá bài toán",
    text: "Trao đổi mục tiêu, vấn đề hiện tại, ngân sách và kỳ vọng tăng trưởng.",
  },
  {
    icon: BarChart3,
    title: "Chốt phạm vi",
    text: "Bóc tách nghiệp vụ, ưu tiên tính năng, tiến độ và các mốc thanh toán.",
  },
  {
    icon: Palette,
    title: "Thiết kế trải nghiệm",
    text: "Xây dựng cấu trúc nội dung và UI/UX bám sát thương hiệu, hành vi khách hàng.",
  },
  {
    icon: Code2,
    title: "Phát triển hệ thống",
    text: "Lập trình, tích hợp quản trị và cập nhật tiến độ theo từng milestone.",
  },
  {
    icon: BadgeCheck,
    title: "Kiểm thử & nghiệm thu",
    text: "Kiểm tra tính năng, dữ liệu, responsive, hiệu năng và điều chỉnh theo phạm vi.",
  },
  {
    icon: Rocket,
    title: "Ra mắt & đồng hành",
    text: "Triển khai, bàn giao source code, hướng dẫn vận hành và bảo hành 12 tháng.",
  },
];

const pricing = [
  {
    name: "Landing Page",
    tag: "Khởi động nhanh",
    oldPrice: "3.000.000đ",
    price: "1.999.000đ",
    time: "3–5 ngày",
    scope: "1 trang chuyển đổi, tối đa 8 section",
    features: [
      "Cấu trúc nội dung bán hàng",
      "UI/UX responsive theo thương hiệu",
      "Form nhận khách hàng tiềm năng",
      "GA4 + Pixel nền tảng",
      "Bảo hành 12 tháng",
    ],
    action: "Nhận báo giá Landing",
  },
  {
    name: "Website doanh nghiệp",
    tag: "Đề xuất",
    oldPrice: "8.000.000đ",
    price: "4.999.000đ",
    time: "7–14 ngày",
    scope: "Số trang dự kiến theo phạm vi đã thống nhất",
    features: [
      "Tư vấn cấu trúc & hỗ trợ biên tập nội dung",
      "UI/UX thiết kế theo thương hiệu",
      "CMS để doanh nghiệp chủ động cập nhật",
      "SEO, GA4 và Search Console nền tảng",
      "Chỉnh sửa không giới hạn trong thiết kế/phạm vi đã duyệt",
    ],
    action: "Tư vấn gói doanh nghiệp",
    recommended: true,
  },
  {
    name: "Website bán hàng",
    tag: "Tăng trưởng",
    oldPrice: "15.000.000đ",
    price: "9.999.000đ",
    time: "3–4 tuần",
    scope: "Phạm vi bán hàng cơ bản",
    features: [
      "Hành trình mua hàng theo thương hiệu",
      "Quản lý sản phẩm và đơn hàng",
      "Giỏ hàng, thanh toán và thông báo",
      "Đo lường hành vi chuyển đổi",
      "Training vận hành & bảo hành 12 tháng",
    ],
    action: "Xây web bán hàng",
  },
  {
    name: "CRM / HRM / ERP",
    tag: "Theo yêu cầu",
    oldPrice: "Theo phạm vi",
    oldPriceIsLabel: true,
    price: "Từ 24.999.000đ",
    time: "Từ 1 tháng",
    scope: "Báo giá sau phân tích BA",
    features: [
      "BA phân tích quy trình và phân quyền",
      "Prototype luồng nghiệp vụ trước khi code",
      "Backend/API và dashboard tùy chỉnh",
      "Kiến trúc sẵn sàng mở rộng",
      "Milestone & SLA theo thỏa thuận",
    ],
    action: "Trao đổi giải pháp",
  },
];

const commitments = [
  { icon: ShieldCheck, title: "Bảo hành kỹ thuật 12 tháng", text: "Xử lý lỗi thuộc phạm vi bàn giao trong suốt thời gian bảo hành." },
  { icon: Gauge, title: "Bảo trì và hỗ trợ vận hành", text: "Hỗ trợ cập nhật nội dung, backup, theo dõi hoạt động và tư vấn khi cần." },
  { icon: Globe2, title: "Hạ tầng phù hợp nhu cầu", text: "Tư vấn hosting, domain và phương án triển khai cân bằng giữa chi phí và hiệu năng." },
  { icon: FileCode2, title: "Bàn giao đầy đủ source code", text: "Doanh nghiệp chủ động sở hữu sản phẩm sau khi hoàn tất nghĩa vụ thanh toán." },
  { icon: Headphones, title: "Training quản trị trực tiếp", text: "Hướng dẫn đội ngũ cập nhật nội dung và xử lý các thao tác vận hành thường ngày." },
  { icon: TrendingUp, title: "Sẵn sàng cho giai đoạn tiếp theo", text: "Kiến trúc được tổ chức để thuận tiện tích hợp và mở rộng khi nhu cầu tăng lên." },
];

const faqs = [
  {
    question: "Chi phí có phát sinh trong quá trình triển khai không?",
    answer:
      "BrifTech xác nhận rõ phạm vi và báo giá trước khi bắt đầu. Mọi yêu cầu nằm ngoài phạm vi chỉ được triển khai sau khi hai bên thống nhất chi phí và thời gian.",
  },
  {
    question: "Tôi chưa có nội dung thì BrifTech có hỗ trợ không?",
    answer:
      "Có. Bạn chỉ cần cung cấp thông tin nền tảng về doanh nghiệp, sản phẩm và khách hàng. BrifTech sẽ hỗ trợ xây cấu trúc, biên tập và trình bày nội dung phù hợp với hành trình bán hàng.",
  },
  {
    question: "Gói website doanh nghiệp có giới hạn số trang và số lần chỉnh sửa không?",
    answer:
      "BrifTech không áp một giới hạn cứng cho số trang hoặc số lần chỉnh sửa. Các hạng mục sẽ được xử lý đến khi nghiệm thu, miễn là nằm trong phạm vi và định hướng đã thống nhất từ đầu.",
  },
  {
    question: "Thời gian triển khai được tính như thế nào?",
    answer:
      "Tiến độ được tính từ thời điểm ký hợp đồng và khởi động dự án. Mốc thời gian cam kết áp dụng khi khách hàng cung cấp đầy đủ nội dung, phản hồi và thông tin nghiệp vụ cần thiết theo kế hoạch.",
  },
  {
    question: "BrifTech chia thanh toán theo hình thức nào?",
    answer:
      "Thông thường dự án được chia theo tỷ lệ 40% khi khởi động, 30% sau khi duyệt thiết kế hoặc milestone giữa kỳ và 30% khi nghiệm thu. Dự án lớn có thể chia theo từng milestone riêng.",
  },
  {
    question: "Sau khi hoàn thành, tôi có được bàn giao source code không?",
    answer:
      "Có. BrifTech bàn giao toàn bộ source code và hướng dẫn quản trị sau khi dự án hoàn tất thanh toán theo thỏa thuận.",
  },
  {
    question: "Website có chuẩn SEO và responsive không?",
    answer:
      "Mọi website đều được tối ưu hiển thị trên desktop, tablet, mobile và triển khai các hạng mục SEO kỹ thuật nền tảng.",
  },
  {
    question: "BrifTech hỗ trợ như thế nào sau bàn giao?",
    answer:
      "Dự án được bảo hành kỹ thuật 12 tháng. BrifTech đồng thời hỗ trợ vận hành, cập nhật nội dung, backup, theo dõi hoạt động và tư vấn mở rộng theo chính sách của từng gói.",
  },
  {
    question: "Có thể phát triển thêm tính năng về sau không?",
    answer:
      "Có. Hệ thống được tổ chức để có thể nâng cấp tính năng, tích hợp dịch vụ và mở rộng theo từng giai đoạn phát triển.",
  },
];

function ZaloButton({ children, className = "", compact = false }) {
  return (
    <a
      className={`button button-primary ${compact ? "button-compact" : ""} ${className}`}
      href={ZALO_URL}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{children}</span>
      {!compact && <ArrowUpRightIcon />}
    </a>
  );
}

function ZaloBadge({ small = false }) {
  return (
    <span className={`zalo-badge ${small ? "is-small" : ""}`} aria-hidden="true">
      Zalo
    </span>
  );
}

function ArrowUpRightIcon() {
  return <ExternalLink size={15} aria-hidden="true" />;
}

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align} reveal`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Header({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
            : 0;

        setScrolled((current) =>
          current ? window.scrollY > 14 : window.scrollY > 48,
        );
        setScrollProgress(progress);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}>
        <div className="container header-inner">
          <a href="#top" className="wordmark" aria-label="BrifTech - Trang chủ">
            <img className="wordmark-logo" src={logoSymbol} alt="" />
            <span>BrifTech</span>
          </a>

          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {primaryNav.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="language-switch" aria-label="Chọn ngôn ngữ">
              <button
                type="button"
                className={language === "vi" ? "active" : ""}
                onClick={() => onLanguageChange("vi")}
                aria-pressed={language === "vi"}
                title={language === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Việt"}
              >
                VI
              </button>
              <button
                type="button"
                className={language === "en" ? "active" : ""}
                onClick={() => onLanguageChange("en")}
                aria-pressed={language === "en"}
                title="Switch to English"
              >
                EN
              </button>
            </div>
            <ZaloButton compact className="header-cta">
              Tư vấn
            </ZaloButton>
            <button
              type="button"
              className="icon-button menu-button"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="scroll-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${scrollProgress})` }} />
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Điều hướng mobile">
          {primaryNav.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>{label}</span>
              <ArrowDownRight size={19} />
            </a>
          ))}
          <ZaloButton>Nhận tư vấn qua Zalo</ZaloButton>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const splineStageRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [loaded]);

  useEffect(() => {
    const stage = splineStageRef.current;
    if (!stage) return undefined;

    const handleWheel = (event) => {
      if (event.ctrlKey) return;

      const rect = stage.getBoundingClientRect();
      const isInsideStage =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInsideStage) return;

      const isVerticalScroll =
        Math.abs(event.deltaY) > Math.abs(event.deltaX) &&
        Math.abs(event.deltaY) > 0.5;

      if (isVerticalScroll) {
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("wheel", handleWheel, {
      capture: true,
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel, true);
    };
  }, []);

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div
          ref={splineStageRef}
          className={`spline-stage ${loaded ? "is-loaded" : ""}`}
          aria-hidden="true"
        >
          <div className="spline-aura" />
          {!loaded && !failed && (
            <div className="spline-loading">
              <span />
              <p>Đang tải trải nghiệm 3D</p>
            </div>
          )}
          {failed && !loaded && (
            <div className="spline-fallback">
              <Boxes size={84} strokeWidth={1.2} />
              <span>Strategy · Design · Technology</span>
            </div>
          )}
          <Suspense fallback={null}>
            <Spline
              scene={SPLINE_SCENE}
              onLoad={() => {
                setLoaded(true);
                setFailed(false);
              }}
              onError={() => setFailed(true)}
            />
          </Suspense>
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="status-dot" />
              Đối tác số hóa dành cho doanh nghiệp vừa và nhỏ
            </div>
            <h1>
              Website không chỉ để hiện diện.
              <span> Website phải tạo ra tăng trưởng.</span>
            </h1>
            <p className="hero-lead">
              BrifTech giúp chủ doanh nghiệp biến website thành một tài sản
              kinh doanh: thu hút khách hàng, củng cố uy tín và từng bước số hóa
              cách doanh nghiệp vận hành.
            </p>
            <div className="hero-actions">
              <ZaloButton>Trao đổi bài toán qua Zalo</ZaloButton>
              <a className="button button-secondary" href="#services">
                Xem dịch vụ
                <ArrowDownRight size={18} />
              </a>
            </div>
            <div className="hero-proof" aria-label="Lợi ích chính">
              <span><CheckCircle2 size={16} /> Tư vấn trực tiếp</span>
              <span><CheckCircle2 size={16} /> Minh bạch phạm vi</span>
              <span><CheckCircle2 size={16} /> Bảo hành 12 tháng</span>
            </div>
          </div>

          <div className="hero-scene-space" />
        </div>
        <div className="spline-caption">
          <span><Sparkles size={14} /> Kéo chuột để tương tác</span>
          <span>3D experience</span>
        </div>
        <div className="container hero-bottom">
          <p>Hiểu bài toán. Thiết kế đúng. Triển khai đến cùng.</p>
          <a href="#capabilities" aria-label="Cuộn xuống phần tiếp theo">
            <ChevronDown size={20} />
          </a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Năng lực BrifTech">
        <div className="trust-inner">
          <div className="trust-track">
            {[false, true].map((duplicate) => (
              <div
                className="trust-group"
                aria-hidden={duplicate || undefined}
                key={duplicate ? "duplicate" : "primary"}
              >
                {trustItems.map((item, index) => (
                  <span className="trust-item" key={item}>
                    {item}
                    {index < trustItems.length - 1 && <i aria-hidden="true" />}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Difference() {
  return (
    <section className="section difference-section" id="difference">
      <div className="container">
        <SectionHeading
          eyebrow="Vì sao là BrifTech"
          title="Không bán một website. Xây một nền tảng để doanh nghiệp tiến lên."
          description="BrifTech kết nối tư duy kinh doanh, phân tích nghiệp vụ, thiết kế và kỹ thuật để giải quyết đúng vấn đề thay vì chỉ hoàn thành một danh sách tính năng."
        />
        <div className="difference-grid">
          {differences.map(({ icon: Icon, number, title, text }) => (
            <article className="difference-item reveal" key={title}>
              <div className="difference-top">
                <span>{number}</span>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteCapabilities() {
  return (
    <section className="section alt-section capability-section" id="capabilities">
      <div className="container">
        <SectionHeading
          eyebrow="Giá trị doanh nghiệp nhận được"
          title={<>Một website tốt phải tạo ra <span className="accent-text">giá trị đo được.</span></>}
          description="Không chỉ đẹp trên màn hình, website cần giúp chủ doanh nghiệp bán hàng thuyết phục hơn, quản trị chủ động hơn và có nền tảng để tăng trưởng."
          align="center"
        />

        <div className="capability-grid">
          {websiteCapabilities.map(({ icon: Icon, title, features, featured }) => (
            <article
              className={`capability-card reveal ${featured ? "is-featured" : ""}`}
              key={title}
            >
              <div className="capability-title">
                <span className="capability-icon"><Icon size={23} /></span>
                <h3>{title}</h3>
              </div>
              <div className="capability-tags">
                {features.map((feature) => <span key={feature}>{feature}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="outcomes-block">
          <div className="outcomes-heading reveal">
            <Sparkles size={20} />
            <h3>Kết quả sau khi bàn giao</h3>
          </div>
          <div className="outcomes-grid">
            {websiteOutcomes.map(({ icon: Icon, title, text }) => (
              <article className="outcome-item reveal" key={title}>
                <span className="outcome-icon"><Icon size={21} /></span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceConstellation({ compact = false } = {}) {
  const fieldRef = useRef(null);

  const handlePointerMove = (event) => {
    const field = fieldRef.current;
    if (!field) return;
    const rect = field.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    field.style.setProperty("--constellation-x", x.toFixed(3));
    field.style.setProperty("--constellation-y", y.toFixed(3));
  };

  const resetPointer = () => {
    fieldRef.current?.style.setProperty("--constellation-x", "0");
    fieldRef.current?.style.setProperty("--constellation-y", "0");
  };

  return (
    <section
      className={`section constellation-section ${compact ? "is-compact" : ""}`}
      aria-labelledby={compact ? undefined : "constellation-title"}
      aria-label={compact ? "Năng lực website BrifTech" : undefined}
    >
      <div className="container">
        {!compact && (
          <div className="constellation-heading reveal">
            <span className="eyebrow">Năng lực kết nối</span>
            <h2 id="constellation-title">Một đầu mối xuyên suốt. <span className="accent-text">Đủ năng lực để đi đường dài.</span></h2>
            <p>Từ chiến lược nội dung và UI/UX đến hệ thống quản trị, tích hợp và đo lường, mọi hạng mục được kết nối trong cùng một quy trình.</p>
          </div>
        )}
        <div
          className="constellation-field reveal"
          ref={fieldRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="constellation-grid" aria-hidden="true" />
          <div className="constellation-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="constellation-plane">
            {serviceConstellation.map((item, index) => {
              const isExternal = item.href.startsWith("http");
              return (
                <a
                  className={`constellation-word size-${item.size} tone-${item.tone}`}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  key={item.label}
                  style={{
                    "--word-x": `${item.x}%`,
                    "--word-y": `${item.y}%`,
                    "--word-dx": `${item.dx}px`,
                    "--word-dy": `${item.dy}px`,
                    "--word-duration": `${item.duration}s`,
                    "--word-delay": `${-index * 0.37}s`,
                  }}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
          <div className="constellation-hint">
            <Sparkles size={14} />
            Di chuyển con trỏ · Chạm để khám phá
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section alt-section" id="services">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Dịch vụ"
            title="Giải pháp phù hợp với từng giai đoạn phát triển"
            description="Từ website tạo uy tín và khách hàng đến hệ thống giúp đội ngũ vận hành hiệu quả hơn, BrifTech triển khai theo đúng ưu tiên kinh doanh."
          />
          <a className="text-link" href="#pricing">
            Xem bảng giá <ArrowRight size={17} />
          </a>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, eyebrow, description, features, featured }) => (
            <article
              className={`service-card reveal ${featured ? "service-featured" : ""}`}
              key={title}
            >
              <div className="service-icon"><Icon size={24} /></div>
              <span className="service-eyebrow">{eyebrow}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {features.map((feature) => (
                  <li key={feature}><Check size={16} />{feature}</li>
                ))}
              </ul>
              <a href={ZALO_URL} target="_blank" rel="noreferrer" aria-label={`Tư vấn ${title}`}>
                Trao đổi nhu cầu <ArrowUpRightIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ variant }) {
  if (variant === "finance") {
    return (
      <div className="project-ui finance-ui" aria-hidden="true">
        <div className="mock-sidebar">
          <span className="mock-logo" />
          {[1, 2, 3, 4, 5].map((item) => <i key={item} />)}
        </div>
        <div className="mock-main">
          <div className="mock-header"><b /><span /></div>
          <div className="metric-row"><i /><i /><i /></div>
          <div className="chart-panel">
            <svg viewBox="0 0 440 135" preserveAspectRatio="none">
              <path d="M0 110 C60 95 60 80 110 87 S180 35 230 62 S315 82 360 30 S410 24 440 8" />
              <path className="chart-fill" d="M0 110 C60 95 60 80 110 87 S180 35 230 62 S315 82 360 30 S410 24 440 8 L440 135 L0 135 Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "commerce") {
    return (
      <div className="project-ui commerce-ui" aria-hidden="true">
        <div className="shop-nav"><b>nord.</b><span>Shop&nbsp;&nbsp; Journal&nbsp;&nbsp; About</span><i /></div>
        <div className="shop-copy">
          <small>NEW COLLECTION 2026</small>
          <strong>Everyday objects,<br />made with intention.</strong>
          <button type="button">Explore collection</button>
        </div>
        <div className="product-scene">
          <div className="product-block block-one" />
          <div className="product-block block-two" />
          <div className="product-block block-three" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-ui health-ui" aria-hidden="true">
      <div className="health-nav"><b>well.</b><span>Programs&nbsp;&nbsp; Experts&nbsp;&nbsp; Stories</span></div>
      <div className="health-copy">
        <small>YOUR HEALTH, IN RHYTHM</small>
        <strong>Feel better.<br />Live clearer.</strong>
        <span>Personalized care plans, built around you.</span>
      </div>
      <div className="health-orbit">
        <i className="orbit-one" />
        <i className="orbit-two" />
        <HeartPulse size={50} />
      </div>
      <div className="health-stats"><i /><i /><i /></div>
    </div>
  );
}

function AboutBrifTech() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-copy reveal">
            <span className="about-pill"><BriefcaseBusiness size={17} /> Đối tác triển khai</span>
            <h2>Đội ngũ kỹ thuật hiểu cách doanh nghiệp vận hành.</h2>
            <p>
              BrifTech được xây dựng để đồng hành cùng doanh nghiệp vừa và nhỏ
              trong quá trình tăng trưởng và số hóa. Chúng tôi kết hợp tư duy
              sản phẩm, phân tích nghiệp vụ và năng lực kỹ thuật để tạo ra giải
              pháp dễ sử dụng, dễ quản trị và tạo giá trị lâu dài.
            </p>
          </div>
        </div>

        <div className="about-fact-grid">
          {companyFacts.map(({ icon: Icon, eyebrow, title, text }) => (
            <article className="about-fact reveal" key={title}>
              <span className="about-icon"><Icon size={22} /></span>
              <span>{eyebrow}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="about-stats reveal">
          {companyStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="team-heading">
          <SectionHeading
            eyebrow="Đội ngũ phụ trách"
            title="Hai đầu mối xuyên suốt mỗi dự án"
            description="Khách hàng làm việc trực tiếp với người phụ trách bài toán kinh doanh và người chịu trách nhiệm giải pháp kỹ thuật."
          />
        </div>

        <div className="team-grid">
          {teamProfiles.map(({ icon: Icon, title, role, text, points }, index) => (
            <article className={`team-card reveal team-${index + 1}`} key={title}>
              <div className="team-visual" aria-hidden="true">
                <div className="profile-frame">
                  <Icon size={80} />
                  <span>{role}</span>
                </div>
              </div>
              <div className="team-title">
                <span className="about-icon"><Icon size={22} /></span>
                <div>
                  <h3>{title}</h3>
                  <strong>{role}</strong>
                </div>
              </div>
              <p>{text}</p>
              <ul>
                {points.map((point) => (
                  <li key={point}><CheckCircle2 size={16} />{point}</li>
                ))}
              </ul>
              <a href={ZALO_URL} target="_blank" rel="noreferrer">
                Trao đổi vai trò dự án <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      variant: "finance",
      title: "Finflow Dashboard",
      domain: "Tài chính",
      scope: "Product design · Dashboard · Web app",
      result: "Concept minh họa năng lực hệ thống dữ liệu",
    },
    {
      variant: "commerce",
      title: "Nord Commerce",
      domain: "E-commerce",
      scope: "Brand website · Commerce experience",
      result: "Concept minh họa trải nghiệm bán hàng",
    },
    {
      variant: "health",
      title: "Well Health",
      domain: "Healthcare",
      scope: "Website · Booking journey · CMS",
      result: "Concept minh họa hành trình dịch vụ",
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Selected work"
            title="Thiết kế để được nhớ. Xây dựng để vận hành."
            description="Các concept dưới đây minh họa hướng tiếp cận đa ngành. Dự án thực tế sẽ được cập nhật khi hoàn tất quyền công bố."
          />
          <span className="demo-note"><Bot size={16} /> Concept preview</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-visual">
                <ProjectVisual variant={project.variant} />
                <span className="concept-label">CONCEPT</span>
              </div>
              <div className="project-meta">
                <div>
                  <span>{project.domain}</span>
                  <h3>{project.title}</h3>
                </div>
                <ArrowDownRight size={23} />
              </div>
              <p>{project.scope}</p>
              <small>{project.result}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Domains() {
  return (
    <section className="section domain-section">
      <div className="container domain-layout">
        <div className="domain-copy reveal">
          <span className="eyebrow">Business analysis</span>
          <h2>Hiểu bài toán trước khi chọn công nghệ.</h2>
          <p>
            Một sản phẩm tốt không bắt đầu bằng framework. Nó bắt đầu từ người
            dùng, quy trình và mục tiêu vận hành. Đội ngũ BA của BrifTech giúp
            biến những nhu cầu phức tạp thành phạm vi rõ ràng.
          </p>
          <div className="domain-proof">
            <div><BarChart3 size={20} /><span><b>Business first</b>Phân tích theo mục tiêu</span></div>
            <div><PackageCheck size={20} /><span><b>Scope rõ ràng</b>Giảm rủi ro triển khai</span></div>
          </div>
        </div>
        <div className="domain-cloud reveal" aria-label="Các lĩnh vực có kinh nghiệm">
          <div className="domain-center">
            <span>BA</span>
            <small>đa domain</small>
          </div>
          {domains.map(({ icon: Icon, name }, index) => (
            <div className={`domain-chip domain-${index + 1}`} key={name}>
              <Icon size={18} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section alt-section process-section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Quy trình triển khai"
          title="Biết dự án đang ở đâu, cần quyết định điều gì."
          description="Sáu giai đoạn được chia rõ đầu việc, đầu ra và mốc nghiệm thu để chủ doanh nghiệp kiểm soát tiến độ mà không cần theo sát kỹ thuật."
          align="center"
        />
        <div className="process-flow">
          <div className="process-line" aria-hidden="true"><span /></div>
          {process.map(({ icon: Icon, title, text }, index) => (
            <article className="process-step reveal" key={title}>
              <div className="process-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="Chi phí minh bạch"
          title="Đầu tư đúng nhu cầu. Không trả tiền cho phần chưa cần."
          description="Mỗi gói là một mức khởi điểm rõ ràng. BrifTech sẽ cùng bạn chốt phạm vi trước khi triển khai để ngân sách tập trung vào giá trị quan trọng nhất."
          align="center"
        />
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article
              className={`pricing-card reveal ${plan.recommended ? "is-recommended" : ""}`}
              key={plan.name}
            >
              {plan.recommended && <span className="recommended-badge"><Sparkles size={13} /> Đề xuất</span>}
              <div className="pricing-head">
                <span className="plan-tag">{plan.tag}</span>
                <h3>{plan.name}</h3>
                <div className="promotion">Mức giá ưu đãi hiện hành</div>
                {plan.oldPrice && (
                  plan.oldPriceIsLabel
                    ? <span className="pricing-scope-label">{plan.oldPrice}</span>
                    : <s>{plan.oldPrice}</s>
                )}
                <strong className={plan.price.startsWith("Từ") ? "is-long" : ""}>
                  {plan.price}
                </strong>
                <small>Giá khởi điểm theo phạm vi</small>
              </div>
              <div className="plan-facts">
                <span><Clock3 size={16} />{plan.time}</span>
                <span><PackageCheck size={16} />{plan.scope}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={16} />{feature}</li>
                ))}
              </ul>
              <a
                className={`button ${plan.recommended ? "button-primary" : "button-secondary"}`}
                href={ZALO_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                {plan.action}
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          <CircleDollarSign size={17} />
          Giá là mức khởi điểm. Tiến độ tính từ khi ký hợp đồng và được bảo đảm
          khi khách hàng cung cấp nội dung, phản hồi và nghiệp vụ đúng kế hoạch.
        </p>
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="section alt-section commitments-section" id="commitments">
      <div className="container">
        <div className="commitment-layout">
          <div className="commitment-copy reveal">
            <span className="eyebrow">Giảm rủi ro sau đầu tư</span>
            <h2>Bàn giao sản phẩm, không bàn giao sự bối rối.</h2>
            <p>
              Đội ngũ của bạn được hướng dẫn để chủ động vận hành. BrifTech tiếp
              tục bảo hành, bảo trì và tư vấn để sản phẩm luôn ổn định khi nhu
              cầu kinh doanh thay đổi.
            </p>
            <ZaloButton>Nhận tư vấn phương án phù hợp</ZaloButton>
          </div>
          <div className="commitment-list">
            {commitments.map(({ icon: Icon, title, text }) => (
              <article className="commitment-item reveal" key={title}>
                <Icon size={21} />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-copy reveal">
          <span className="eyebrow">Trước khi hợp tác</span>
          <h2>Rõ thông tin trước khi ra quyết định.</h2>
          <p>BrifTech minh bạch phạm vi, tiến độ và trách nhiệm hai bên ngay từ đầu để dự án dễ kiểm soát và hạn chế phát sinh.</p>
          <ZaloButton>Trao đổi trực tiếp qua Zalo</ZaloButton>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={20} />
                  </button>
                </h3>
                <div className="faq-answer" id={`faq-answer-${index}`}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    data.append("_subject", "Lead mới từ BrifTech Landing Page");
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("Nguồn", window.location.href);

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(LEAD_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Không thể gửi biểu mẫu");

      form.reset();
      setStatus("success");
      setFeedback("Thông tin đã được gửi. BrifTech sẽ liên hệ với bạn trong thời gian sớm nhất.");
    } catch {
      setStatus("error");
      setFeedback("Chưa thể gửi thông tin. Bạn vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo.");
    }
  };

  return (
    <section className="lead-section" id="contact">
      <div className="container lead-layout">
        <div className="lead-copy reveal">
          <span className="eyebrow">Bắt đầu từ một cuộc trao đổi</span>
          <h2>Để lại bài toán. BrifTech đề xuất hướng đi phù hợp.</h2>
          <p>
            Chia sẻ ngắn nhu cầu hiện tại, đội ngũ phụ trách sẽ liên hệ để làm rõ
            mục tiêu, phạm vi và phương án triển khai phù hợp với doanh nghiệp.
          </p>
          <div className="lead-benefits">
            <span><CheckCircle2 size={17} /> Tư vấn trực tiếp với người phụ trách</span>
            <span><CheckCircle2 size={17} /> Đề xuất phạm vi và ngân sách sơ bộ</span>
            <span><CheckCircle2 size={17} /> Không phát sinh nghĩa vụ hợp tác</span>
          </div>
          <div className="lead-direct">
            <span>Muốn trao đổi ngay?</span>
            <a href={ZALO_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Chat Zalo 0972 229 142
            </a>
          </div>
        </div>

        <form className="lead-form reveal" onSubmit={handleSubmit}>
          <div className="lead-form-heading">
            <span><Send size={18} /></span>
            <div>
              <h3>Nhận tư vấn miễn phí</h3>
              <p>BrifTech sẽ phản hồi trong giờ làm việc gần nhất.</p>
            </div>
          </div>

          <div className="lead-form-grid">
            <label>
              <span>Họ và tên <i>*</i></span>
              <input name="Họ và tên" type="text" autoComplete="name" placeholder="Nguyễn Văn A" required />
            </label>
            <label>
              <span>Số điện thoại <i>*</i></span>
              <input
                name="Số điện thoại"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="09xx xxx xxx"
                pattern="[0-9+().\\s-]{8,20}"
                required
              />
            </label>
            <label>
              <span>Doanh nghiệp</span>
              <input name="Doanh nghiệp" type="text" autoComplete="organization" placeholder="Tên doanh nghiệp của bạn" />
            </label>
            <label>
              <span>Nhu cầu quan tâm</span>
              <select name="Nhu cầu">
                <option value="Website doanh nghiệp">Website doanh nghiệp</option>
                <option value="Landing page">Landing page</option>
                <option value="Website bán hàng">Website bán hàng</option>
                <option value="CRM / HRM / ERP">CRM / HRM / ERP</option>
                <option value="Bảo trì / SEO">Bảo trì / SEO</option>
                <option value="Chưa xác định">Cần BrifTech tư vấn</option>
              </select>
            </label>
            <label>
              <span>Ngân sách dự kiến</span>
              <select name="Ngân sách">
                <option value="Cần tư vấn">Cần tư vấn</option>
                <option value="Dưới 5 triệu">Dưới 5 triệu</option>
                <option value="5 - 10 triệu">5 - 10 triệu</option>
                <option value="10 - 25 triệu">10 - 25 triệu</option>
                <option value="Trên 25 triệu">Trên 25 triệu</option>
              </select>
            </label>
            <label className="lead-form-message">
              <span>Bài toán cần giải quyết</span>
              <textarea
                name="Bài toán"
                rows="4"
                placeholder="Ví dụ: Website hiện tại khó quản trị, cần thiết kế lại để tăng khách hàng..."
              />
            </label>
          </div>

          <input className="lead-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" />

          <label className="lead-consent">
            <input type="checkbox" required />
            <span>Tôi đồng ý để BrifTech liên hệ và tư vấn theo thông tin đã cung cấp.</span>
          </label>

          <button className="button button-primary lead-submit" type="submit" disabled={status === "submitting"}>
            <Send size={17} />
            {status === "submitting" ? "Đang gửi thông tin..." : "Gửi yêu cầu tư vấn"}
          </button>

          {feedback && (
            <p className={`lead-feedback is-${status}`} role="status" aria-live="polite">
              {status === "success" ? <CheckCircle2 size={17} /> : <MessageCircle size={17} />}
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#top" className="footer-logo" aria-label="BrifTech - Trang chủ">
            <img src={logoLockup} alt="BrifTech" />
          </a>
          <p>
            Đối tác tư vấn và triển khai website, web app và hệ thống quản trị
            giúp doanh nghiệp vừa và nhỏ tăng trưởng và vận hành hiệu quả hơn.
          </p>
          <div className="footer-assurances" aria-label="Cam kết dịch vụ">
            <span><ShieldCheck size={15} /> Bảo hành 12 tháng</span>
            <span><Headphones size={15} /> Hỗ trợ vận hành</span>
            <span><FileCode2 size={15} /> Bàn giao source code</span>
          </div>
        </div>
        <div className="footer-links">
          <span>Dịch vụ</span>
          <a href="#services">Website doanh nghiệp</a>
          <a href="#services">Landing page</a>
          <a href="#services">Website bán hàng</a>
          <a href="#services">CRM / HRM / ERP</a>
          <a href="#pricing">Bảng giá</a>
        </div>
        <div className="footer-links">
          <span>Khám phá</span>
          <a href="#difference">Vì sao chọn BrifTech</a>
          {/* <a href="#projects">Dự án</a> */}
          <a href="#process">Quy trình</a>
          <a href="#about">Về BrifTech</a>
          <a href="#faq">Câu hỏi thường gặp</a>
        </div>
        <div className="footer-contact">
          <span>Liên hệ</span>
          <a href={ZALO_URL} target="_blank" rel="noreferrer">
            <span className="footer-contact-icon"><MessageCircle size={18} /></span>
            <span><small>Zalo tư vấn</small><strong>0972 229 142</strong></span>
          </a>
          <a href="tel:0972229142">
            <span className="footer-contact-icon"><Phone size={18} /></span>
            <span><small>Điện thoại</small><strong>0972 229 142</strong></span>
          </a>
          <a href="mailto:biilveoth@gmail.com">
            <span className="footer-contact-icon"><Mail size={18} /></span>
            <span><small>Email</small><strong>biilveoth@gmail.com</strong></span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Số+2+ngõ+155+Nguyễn+Văn+Trỗi+Hà+Đông+Hà+Nội"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer-contact-icon"><MapPin size={18} /></span>
            <span><small>Địa chỉ</small><strong>Số 2, ngõ 155 Nguyễn Văn Trỗi, Hà Đông, Hà Nội</strong></span>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 BrifTech. All rights reserved.</span>
        <span>Business Analysis · Design · Engineering</span>
      </div>
    </footer>
  );
}

function App() {
  const { language, setLanguage } = usePageLanguage();
  const [showStickyZalo, setShowStickyZalo] = useState(false);
  const [pageProgress, setPageProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
            : 0;

        setShowStickyZalo(window.scrollY > window.innerHeight * 0.72);
        setPageProgress(progress);
      });
    };

    handleScroll();
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const handlePointerMove = (event) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>
      <Header language={language} onLanguageChange={setLanguage} />
      <main id="main-content">
        <Hero />
        <ServiceConstellation compact />
        <WebsiteCapabilities />
        <Difference />
        <Services />
        {/* <Projects /> */}
        <Domains />
        <Process />
        <Pricing />
        <Commitments />
        <AboutBrifTech />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <div className={`floating-actions ${showStickyZalo ? "is-visible" : ""}`} aria-label="Hành động nhanh">
        <a
          className="floating-zalo"
          href={ZALO_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Tư vấn qua Zalo"
        >
          <MessageCircle size={20} />
          <span>Tư vấn Zalo</span>
        </a>
        <a
          className="floating-top"
          href="#top"
          aria-label="Lên đầu trang"
          style={{ "--page-progress": pageProgress }}
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </>
  );
}

export default App;
