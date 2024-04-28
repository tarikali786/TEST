import { AboutItems } from "../data/data";
import "./Hero.css";
import { Row, Col } from "antd";
export const About = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolor quas nulla reiciendis cum, perferendis repellendus sunt
            consectetur voluptatum rem neque voluptates itaque deserunt
            temporibus asperiores, delectus maxime ut reprehenderit eligendi
            eveniet, doloribus architecto sapiente. Maxime ex itaque dolore
            reiciendis, vero numquam harum praesentium, architecto quo sapiente
            perferendis. Cumque, nam.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {AboutItems.map((item) => (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              key={item.id}
            >
              <div className="content">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
