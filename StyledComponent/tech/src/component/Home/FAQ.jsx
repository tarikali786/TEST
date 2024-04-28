import { Collapse } from "antd";
import "./Hero.css";
import { MailFilled } from "@ant-design/icons";
import { FAQItems } from "../data/data";
import { TechButton, TechHeading } from "../Styled/StyledComponent";
export const FAQ = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <Collapse items={FAQItems} defaultActiveKey={["1"]} />

        <div className="quickSupport">
          <TechHeading>Want quick support?</TechHeading>
          <p>
            Get quick support 24/7 with our dedicated customer service team.
            We're here to help you manage your account, answer any questions,
            and resolve any issues. Trust us to make your experience stress-free
            and enjoyable.
          </p>
          <TechButton primary style={{ margin: "0 auto", marginTop:"2rem" }}>
            <MailFilled />
            Email Your Question
          </TechButton>
        </div>
      </div>
    </div>
  );
};
