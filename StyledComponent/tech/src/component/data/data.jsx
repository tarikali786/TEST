import {
  PieChartFilled,
  DesktopOutlined,
  DatabaseFilled,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
export const Carouselitems = [
  {
    key: "1",
    title: "Web and mobile payment built for developers",
    content:
      "Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.",
  },
  {
    key: "2",
    title: "Work better together. Schedule meetings",
    content:
      "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
  },
  {
    key: "3",
    title: "The best app to increase your productivity",
    content:
      "Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.",
  },
];

export const AboutItems = [
  {
    key: "1",
    icon: <PieChartFilled />,
    title: "High Performance",
    content:
      "Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    title: "Flat Design",
    content:
      "Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.",
  },
  {
    key: "3",
    icon: <DatabaseFilled />,
    title: "Simplified Workflow",
    content:
      "Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.",
  },
];

export const FeatureItems = [
  {
    key: "1",
    title: "Modern Design",
    image:
      "https://bibekshakya.com/demo/react/antdesign/tech/static/media/modern-design.930b558d.jpg",
  },
  {
    key: "2",
    title: "Clean and Elegant",
    image:
      "https://bibekshakya.com/demo/react/antdesign/tech/static/media/clean-design.0f928231.jpg",
  },
  {
    key: "3",
    title: "Great Support",
    image:
      "https://bibekshakya.com/demo/react/antdesign/tech/static/media/great-support.b6918a9f.jpg",
  },
  {
    key: "4",
    title: "Easy to customise",
    image:
      "https://bibekshakya.com/demo/react/antdesign/tech/static/media/easy-customise.80fba52b.jpg",
  },
  {
    key: "5",
    title: "Unlimited Features",
    image:
      "https://bibekshakya.com/demo/react/antdesign/tech/static/media/unlimited-features.7e97e67b.jpg",
  },
  {
    key: "6",
    title: "Advanced Options",
    image:
      "https://bibekshakya.com/demo/react/antdesign/tech/static/media/advanced-option.c294df00.jpg",
  },
];

export const FAQItems = [
  {
    key: "1",
    label: "How to setup the theme?",
    children: (
      <p>
        {" "}
        Get your website up and running in no time with our user-friendly setup
        theme. Experience seamless customization options and enjoy a stress-free
        launch with our step-by-step guide. Upgrade your online presence with a
        professional look that's tailored to your brand.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I change plan or cancel at any time?",
    children: (
      <p>
        We understand that plans can change, and that's why we offer a flexible
        cancelation policy for our customers. If you need to cancel your plan,
        please contact our support team for assistance. We'll do our best to
        make the process as smooth and hassle-free as possible.
      </p>
    ),
  },
  {
    key: "3",
    label: "How to access through cloud?",
    children: (
      <p>
        Access your data anytime, anywhere with our cloud-based solution. No
        more limitations, enjoy seamless access to your information from any
        device with internet connection. Say goodbye to traditional setup,
        embrace the future of tech with us.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I manage multiple task?",
    children: (
      <p>
        Maximize your productivity and efficiency with our app's ability to
        handle multiple tasks seamlessly. Say goodbye to juggling between
        multiple windows and programs and hello to effortless multitasking.
      </p>
    ),
  },
  {
    key: "5",
    label: "How can I change my password?",
    children: (
      <p>
        Simplify your life with our easy-to-use password change feature.
        Securely update your password in just a few clicks, ensuring maximum
        protection for your data and peace of mind for you. Try it now!
      </p>
    ),
  },
  {
    key: "6",
    label: "How to manage my account?",
    children: (
      <p>
        Manage all your accounts in one place with our streamlined and secure
        account management system. Easily update personal information, change
        passwords, and track account activity. Simplify your life and stay in
        control with our user-friendly platform.
      </p>
    ),
  },
];

export const PricingData = [
  {
    key: "1",
    price: "$23.4",
    title: "BASIC",
    space: "1 GB of space",
    user: "1 User",
    support: "24/7 support",
    backup: "Safe, reliable backup",
    access: "Access from anywhere",
  },
  {
    key: "2",
    price: "$23.4",
    title: "PREMIUM",
    space: "5 GB of space",
    user: "5 user",
    support: "24/7 support",
    backup: "Safe, reliable backup",
    access: "Access from anywhere",
  },
  {
    key: "1",
    price: "$23.4",
    support: "24/7 support",
    title: "ENTERPRISE",
    space: "Unlimited space",
    user: "15 users",
    backup: "Safe, reliable backup",
    access: "Access from anywhere",
  },
];

export const ContactItems = [
  {
    key: "1",
    name: "Fullname",
    type: "text",
    placeholder: "Enter your fullname",
    prefix: <UserOutlined className="site-form-item-icon"/>,
  },
  {
    key: "2",
    name: "Email",
    type: "email",
    placeholder: "Enter your email",
    prefix: <MailOutlined className="site-form-item-icon" />,
  },
  {
    key: "3",
    name: "Telephone",
    type: "number",
    placeholder: "Enter your Telephone",
    prefix: <PhoneOutlined  className="site-form-item-icon"/>,
  },
  {
    key: "4",
    name: "subject",
    type: "text",
    placeholder: "Enter your Subject",
    prefix: <MessageOutlined className="site-form-item-icon"/>,
  },
];
