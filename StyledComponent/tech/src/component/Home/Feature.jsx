import "./Hero.css";
import { Card } from "antd";
import { Row, Col } from "antd";
import { FeatureItems } from "../data/data";

const { Meta } = Card;

export const Feature = () => {
  return (
    <div id="feature" className="block bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <Row gutter={[16, 16]}>
          {FeatureItems.map((item) => (
            <Col
              key={item.id}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
            >
              <Card hoverable cover={<img alt={item.title} src={item.image} />}>
                <Meta title={item.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
