import { Card, List } from "antd";
import { TechButton, TechHeading } from "../Styled/StyledComponent";
import { PricingData } from "../data/data";
import { SendOutlined } from "@ant-design/icons";
export const Pricing = () => {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <TechHeading>Choose a plan to fit your needs</TechHeading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={PricingData}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p>{item.price}</p>
                <p>{item.space}</p>
                <p>{item.user}</p>
                <p>{item.support}</p>
                <p>{item.backup}</p>
                <p>{item.access}</p>
                <TechButton primary style={{ margin: "2rem auto" }}>
                  <SendOutlined style={{ rotate: "-30deg" }} />
                  Get Started
                </TechButton>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
